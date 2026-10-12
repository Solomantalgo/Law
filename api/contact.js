import { createHmac, randomUUID } from 'node:crypto';
import { practiceAreas } from '../src/data/siteData.js';

const BODY_LIMIT = 8 * 1024;
const UPSTREAM_BODY_LIMIT = 32 * 1024;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT = 5;
const MAX_LENGTHS = {
  fullName: 120,
  email: 254,
  telephone: 40,
  matterCategory: 64,
  preferredContact: 20,
  message: 2000,
  privacyAcknowledged: 32,
  website: 120,
};
const ALLOWED_FIELDS = Object.keys(MAX_LENGTHS);
const ALLOWED_MATTERS = new Set(practiceAreas.map((area) => area.slug));
const UPSTREAM_TIMEOUT_MS = 10000;
const RATE_LIMIT_TIMEOUT_MS = 2500;

const RATE_LIMIT_SCRIPT = `
local now = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local max = tonumber(ARGV[3])
redis.call('ZREMRANGEBYSCORE', KEYS[1], '-inf', now - window)
local count = redis.call('ZCARD', KEYS[1])
if count >= max then
  local first = redis.call('ZRANGE', KEYS[1], 0, 0, 'WITHSCORES')
  return {0, count, tonumber(first[2]) + window}
end
redis.call('ZADD', KEYS[1], now, ARGV[4])
redis.call('PEXPIRE', KEYS[1], window)
return {1, count + 1, now + window}
`;

function response(res, status, body, extraHeaders = {}) {
  for (const [key, value] of Object.entries(extraHeaders)) res.setHeader(key, value);
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  return res.status(status).json(body);
}

function parseBody(req) {
  const declaredLength = Number(req.headers?.['content-length'] || 0);
  if (declaredLength > BODY_LIMIT) return { error: 'too_large' };

  let body = req.body;
  if (Buffer.isBuffer(body)) body = body.toString('utf8');
  if (typeof body === 'string') {
    if (Buffer.byteLength(body, 'utf8') > BODY_LIMIT) return { error: 'too_large' };
    try { body = JSON.parse(body); } catch { return { error: 'invalid_json' }; }
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return { error: 'invalid_body' };
  if (Buffer.byteLength(JSON.stringify(body), 'utf8') > BODY_LIMIT) return { error: 'too_large' };
  return { body };
}

function validate(body) {
  const unexpected = Object.keys(body).filter((field) => !ALLOWED_FIELDS.includes(field));
  if (unexpected.length) return { error: 'invalid_fields' };

  for (const field of ALLOWED_FIELDS) {
    if (typeof body[field] !== 'string') return { error: 'invalid_fields' };
    if (body[field].length > MAX_LENGTHS[field]) return { error: 'field_too_long' };
  }

  const values = Object.fromEntries(ALLOWED_FIELDS.map((field) => [field, body[field].trim()]));
  if (values.website) return { error: 'invalid_submission' };
  if (!values.fullName) return { error: 'full_name_required', field: 'fullName' };
  if (!values.email) return { error: 'email_required', field: 'email' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return { error: 'email_invalid', field: 'email' };
  if (!values.message) return { error: 'message_required', field: 'message' };
  if (values.privacyAcknowledged !== 'acknowledged') return { error: 'acknowledgement_required', field: 'privacyAcknowledged' };
  if (values.matterCategory && !ALLOWED_MATTERS.has(values.matterCategory)) return { error: 'matter_category_invalid', field: 'matterCategory' };
  if (values.preferredContact && !['email', 'telephone'].includes(values.preferredContact)) return { error: 'preferred_contact_invalid', field: 'preferredContact' };
  if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(values.fullName + values.email + values.telephone + values.message)) {
    return { error: 'invalid_fields' };
  }
  return { values };
}

function getRateLimitConfig(env) {
  const url = env.UPSTASH_REDIS_REST_URL;
  const token = env.UPSTASH_REDIS_REST_TOKEN;
  const hashSecret = env.CONTACT_RATE_LIMIT_HASH_SECRET;
  if (!url || !token || !hashSecret || hashSecret.length < 32) return null;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' || !parsed.hostname.endsWith('.upstash.io')) return null;
    return { url: parsed.origin, token, hashSecret };
  } catch {
    return null;
  }
}

function getClientAddress(req) {
  const forwarded = req.headers?.['x-forwarded-for'];
  const address = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(',')[0]?.trim()
    || req.headers?.['x-real-ip'];
  return typeof address === 'string' && address.length <= 100 ? address : '';
}

async function checkRateLimit({ req, env, fetchImpl, now }) {
  const config = getRateLimitConfig(env);
  const address = getClientAddress(req);
  if (!config || !address) return { configured: false };

  const identifier = createHmac('sha256', config.hashSecret).update(address).digest('hex');
  const key = `rma:contact:${identifier}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), RATE_LIMIT_TIMEOUT_MS);
  try {
    const result = await fetchImpl(config.url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${config.token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(['EVAL', RATE_LIMIT_SCRIPT, '1', key, String(now()), String(RATE_WINDOW_MS), String(RATE_LIMIT), randomUUID()]),
      signal: controller.signal,
    });
    if (!result.ok) return { configured: true, available: false };
    const payload = await result.json();
    const values = payload?.result;
    if (!Array.isArray(values) || values.length < 3) return { configured: true, available: false };
    return { configured: true, available: true, allowed: Number(values[0]) === 1, retryAt: Number(values[2]) };
  } catch {
    return { configured: true, available: false };
  } finally {
    clearTimeout(timer);
  }
}

async function readLimitedText(responseObject, limit) {
  const declaredLength = Number(responseObject.headers.get('content-length') || 0);
  if (declaredLength > limit) throw new Error('upstream_response_too_large');
  if (!responseObject.body) return '';
  const reader = responseObject.body.getReader();
  const chunks = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > limit) {
      await reader.cancel();
      throw new Error('upstream_response_too_large');
    }
    chunks.push(value);
  }
  const joined = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { joined.set(chunk, offset); offset += chunk.byteLength; }
  return new TextDecoder().decode(joined);
}

export function createContactHandler({
  env = process.env,
  fetchImpl = fetch,
  now = Date.now,
  rateLimit = checkRateLimit,
  upstreamTimeoutMs = UPSTREAM_TIMEOUT_MS,
} = {}) {
  return async function contactHandler(req, res) {
    if (req.method !== 'POST') return response(res, 405, { ok: false, error: 'Use POST to submit this form.' }, { Allow: 'POST' });
    if (!String(req.headers?.['content-type'] || '').toLowerCase().includes('application/json')) {
      return response(res, 415, { ok: false, error: 'Submit the enquiry as JSON.' });
    }

    const parsed = parseBody(req);
    if (parsed.error === 'too_large') return response(res, 413, { ok: false, error: 'The enquiry is too large.' });
    if (parsed.error) return response(res, 400, { ok: false, error: 'The enquiry could not be read.' });
    const checked = validate(parsed.body);
    if (checked.error === 'invalid_submission') return response(res, 400, { ok: false, error: 'The enquiry could not be accepted.' });
    if (checked.error) return response(res, 400, { ok: false, error: 'Check the highlighted fields and try again.', field: checked.field });

    const scriptUrl = env.GOOGLE_APPS_SCRIPT_URL;
    let upstreamUrl;
    try {
      upstreamUrl = new URL(scriptUrl);
      if (upstreamUrl.protocol !== 'https:' || upstreamUrl.hostname !== 'script.google.com' || !upstreamUrl.pathname.endsWith('/exec')) throw new Error('invalid_url');
    } catch {
      return response(res, 503, { ok: false, error: 'The enquiry service is not configured.' });
    }

    let rate;
    try { rate = await rateLimit({ req, env, fetchImpl, now }); }
    catch { rate = { configured: true, available: false }; }
    if (!rate.configured) return response(res, 503, { ok: false, error: 'The enquiry service is not ready. Please contact the firm by telephone or email.' });
    if (!rate.available) return response(res, 503, { ok: false, error: 'The enquiry service is temporarily unavailable. Please try again later or contact the firm directly.' });
    if (!rate.allowed) {
      const retryAfter = Math.max(1, Math.min(3600, Math.ceil((rate.retryAt - now()) / 1000) || 3600));
      return response(res, 429, { ok: false, error: 'Too many enquiries were sent from this connection. Please wait before trying again.' }, { 'Retry-After': String(retryAfter) });
    }

    const form = new URLSearchParams();
    for (const field of ['fullName', 'email', 'telephone', 'matterCategory', 'preferredContact', 'message', 'privacyAcknowledged', 'website']) {
      form.set(field, checked.values[field]);
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), upstreamTimeoutMs);
    try {
      const upstream = await fetchImpl(upstreamUrl, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: form.toString(),
        redirect: 'follow',
        signal: controller.signal,
      });
      if (!upstream.ok || upstream.status >= 300) {
        return response(res, 502, { ok: false, error: 'The enquiry service did not accept the submission. Please try again later or contact the firm directly.' });
      }
      const text = await readLimitedText(upstream, UPSTREAM_BODY_LIMIT);
      let upstreamData;
      try { upstreamData = JSON.parse(text); }
      catch { return response(res, 502, { ok: false, error: 'The enquiry service returned an unreadable response. Please contact the firm before sending the enquiry again.' }); }
      if (upstreamData?.ok !== true) {
        return response(res, 502, { ok: false, error: 'The enquiry service did not confirm receipt. Please contact the firm before sending the enquiry again.' });
      }
      return response(res, 200, { ok: true, message: 'Enquiry received.' });
    } catch {
      const timedOut = controller.signal.aborted;
      return response(res, timedOut ? 504 : 502, {
        ok: false,
        error: timedOut
          ? 'We could not confirm whether the enquiry was received. Please contact the firm before sending it again.'
          : 'The enquiry service could not be reached. Please try again later or contact the firm directly.',
      });
    } finally {
      clearTimeout(timer);
    }
  };
}

export default function handler(req, res) {
  return createContactHandler()(req, res);
}
