<?php
declare(strict_types=1);

const BODY_LIMIT = 8192;
const RATE_WINDOW = 3600;
const RATE_LIMIT = 5;
const RECIPIENTS = ['rmackay@rmackayadvocates.com', 'kmantalgosolo@gmail.com'];
const SENDER = 'rmackay@rmackayadvocates.com';
const MATTER_CATEGORIES = ['tax', 'criminal', 'corporate-commercial', 'conveyancing', 'corporate-compliance'];
const FIELD_LIMITS = [
    'fullName' => 120,
    'email' => 254,
    'telephone' => 40,
    'matterCategory' => 64,
    'preferredContact' => 20,
    'message' => 2000,
    'privacyAcknowledged' => 32,
    'website' => 120,
];

function respond(int $status, array $body, array $headers = []): void
{
    http_response_code($status);
    header('Cache-Control: no-store');
    header('Content-Type: application/json; charset=utf-8');
    foreach ($headers as $name => $value) {
        header($name . ': ' . $value);
    }
    echo json_encode($body);
    exit;
}

function take_rate_limit(string $address): ?array
{
    $directory = dirname(__DIR__, 2) . '/.rma-contact-rate-limit';
    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
        return null;
    }

    $secretPath = $directory . '/.key';
    if (!is_file($secretPath)) {
        $handle = @fopen($secretPath, 'x');
        if ($handle !== false) {
            fwrite($handle, bin2hex(random_bytes(32)));
            fclose($handle);
            chmod($secretPath, 0600);
        }
    }
    $secret = @file_get_contents($secretPath);
    if ($secret === false || strlen($secret) < 32) {
        return null;
    }

    $clientId = hash_hmac('sha256', $address, $secret);
    $rateFile = $directory . '/submissions.json';
    $handle = @fopen($rateFile, 'c+');
    if ($handle === false || !flock($handle, LOCK_EX)) {
        if (is_resource($handle)) {
            fclose($handle);
        }
        return null;
    }

    $contents = stream_get_contents($handle);
    if ($contents === false || strlen($contents) > 262144) {
        flock($handle, LOCK_UN);
        fclose($handle);
        return null;
    }
    $records = $contents === '' ? [] : json_decode($contents, true);
    if (!is_array($records)) {
        flock($handle, LOCK_UN);
        fclose($handle);
        return null;
    }

    $now = time();
    foreach ($records as $id => $timestamps) {
        if (!is_array($timestamps)) {
            unset($records[$id]);
            continue;
        }
        $records[$id] = array_values(array_filter($timestamps, static function ($timestamp) use ($now): bool {
            return is_int($timestamp) && $timestamp > $now - RATE_WINDOW;
        }));
        if ($records[$id] === []) {
            unset($records[$id]);
        }
    }

    $timestamps = $records[$clientId] ?? [];
    if (count($timestamps) >= RATE_LIMIT) {
        $retryAfter = max(1, min(RATE_WINDOW, $timestamps[0] + RATE_WINDOW - $now));
        $result = ['allowed' => false, 'retryAfter' => $retryAfter];
    } elseif (count($records) >= 1000 && !isset($records[$clientId])) {
        $result = null;
    } else {
        $records[$clientId][] = $now;
        $result = ['allowed' => true, 'retryAfter' => 0];
    }

    rewind($handle);
    ftruncate($handle, 0);
    $saved = fwrite($handle, json_encode($records));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);

    return $saved === false ? null : $result;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Use POST to submit this form.'], ['Allow' => 'POST']);
}

if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') === false) {
    respond(415, ['ok' => false, 'error' => 'Submit the enquiry as JSON.']);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > BODY_LIMIT) {
    respond(413, ['ok' => false, 'error' => 'The enquiry is too large.']);
}

$rawBody = file_get_contents('php://input', false, null, 0, BODY_LIMIT + 1);
if ($rawBody === false || strlen($rawBody) > BODY_LIMIT) {
    respond(413, ['ok' => false, 'error' => 'The enquiry is too large.']);
}

$decodedBody = json_decode($rawBody);
if (!is_object($decodedBody)) {
    respond(400, ['ok' => false, 'error' => 'The enquiry could not be read.']);
}
$body = get_object_vars($decodedBody);

$unexpected = array_diff(array_keys($body), array_keys(FIELD_LIMITS));
if ($unexpected !== []) {
    respond(400, ['ok' => false, 'error' => 'The enquiry could not be read.']);
}

$values = [];
foreach (FIELD_LIMITS as $field => $limit) {
    if (!isset($body[$field]) || !is_string($body[$field]) || strlen($body[$field]) > $limit) {
        respond(400, ['ok' => false, 'error' => 'Check the enquiry fields and try again.']);
    }
    $values[$field] = trim($body[$field]);
}

if ($values['website'] !== '') {
    respond(400, ['ok' => false, 'error' => 'The enquiry could not be accepted.']);
}
if ($values['fullName'] === '') {
    respond(400, ['ok' => false, 'error' => 'Enter your full name.', 'field' => 'fullName']);
}
if ($values['email'] === '' || !filter_var($values['email'], FILTER_VALIDATE_EMAIL)) {
    respond(400, ['ok' => false, 'error' => 'Enter a valid email address.', 'field' => 'email']);
}
if ($values['message'] === '') {
    respond(400, ['ok' => false, 'error' => 'Add a brief message.', 'field' => 'message']);
}
if ($values['privacyAcknowledged'] !== 'acknowledged') {
    respond(400, ['ok' => false, 'error' => 'Please acknowledge the note above before sending.', 'field' => 'privacyAcknowledged']);
}
if ($values['matterCategory'] !== '' && !in_array($values['matterCategory'], MATTER_CATEGORIES, true)) {
    respond(400, ['ok' => false, 'error' => 'Choose a listed legal matter category.', 'field' => 'matterCategory']);
}
if ($values['preferredContact'] !== '' && !in_array($values['preferredContact'], ['email', 'telephone'], true)) {
    respond(400, ['ok' => false, 'error' => 'Choose a listed contact method.', 'field' => 'preferredContact']);
}
if (preg_match('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', implode('', $values)) === 1) {
    respond(400, ['ok' => false, 'error' => 'The enquiry could not be read.']);
}

$address = $_SERVER['REMOTE_ADDR'] ?? '';
if ($address === '' || strlen($address) > 100) {
    respond(503, ['ok' => false, 'error' => 'The enquiry service is temporarily unavailable. Please contact the firm directly.']);
}
$rate = take_rate_limit($address);
if ($rate === null) {
    error_log('Contact endpoint rate limiter unavailable.');
    respond(503, ['ok' => false, 'error' => 'The enquiry service is temporarily unavailable. Please try again later or contact the firm directly.']);
}
if (!$rate['allowed']) {
    respond(429, ['ok' => false, 'error' => 'Too many enquiries were sent from this connection. Please wait before trying again.'], ['Retry-After' => (string) $rate['retryAfter']]);
}

$matter = $values['matterCategory'] !== '' ? $values['matterCategory'] : 'Not specified';
$preferred = $values['preferredContact'] !== '' ? $values['preferredContact'] : 'No preference';
$message = implode("\r\n", [
    'A new enquiry was submitted through the website contact form.',
    '',
    'Name: ' . $values['fullName'],
    'Email: ' . $values['email'],
    'Telephone: ' . ($values['telephone'] !== '' ? $values['telephone'] : 'Not provided'),
    'Legal matter category: ' . $matter,
    'Preferred contact method: ' . $preferred,
    'Privacy acknowledgement: ' . $values['privacyAcknowledged'],
    '',
    'Message:',
    $values['message'],
]);
$subject = 'Website contact form enquiry';
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$headers = implode("\r\n", [
    'From: R. Mackay Advocates <' . SENDER . '>',
    'Reply-To: ' . $values['email'],
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
]);

$sent = mail(implode(', ', RECIPIENTS), $encodedSubject, $message, $headers);
if (!$sent) {
    error_log('Contact endpoint could not hand the enquiry to the configured mail transport.');
    respond(503, ['ok' => false, 'error' => 'The enquiry could not be sent. Please try again later or contact the firm directly.']);
}

respond(200, ['ok' => true, 'message' => 'Enquiry received.']);
