# cPanel contact form

The static site posts to `/api/contact`, which Apache rewrites to
`public/api/contact.php`. The PHP endpoint validates the form, applies a
file-backed limit of five accepted attempts per source address per hour, and
hands the message to the server's PHP `mail()` transport. It sends enquiries
to the configured firm mailbox and test mailbox. The sender is the firm's
address; replies go to the visitor's validated email address.

## cPanel setup

1. In cPanel, use **MultiPHP Manager** (or **Select PHP Version**) to enable a
   currently supported PHP version for the domain. PHP 7.4 or newer is
   required.
2. In **Email Accounts**, confirm the sender mailbox
   `rmackay@rmackayadvocates.com` exists and can receive mail.
3. In **Email Deliverability**, check that SPF and DKIM are valid for
   `rmackayadvocates.com`. Ask the host whether PHP `mail()` is enabled if
   the endpoint returns a delivery error.
4. Deploy the site through the configured GitHub Actions workflow. Verify
   that both `api/contact.php` and `.htaccess` exist under `public_html`.
5. Submit one approved test enquiry using an address you control. Confirm
   receipt at both configured inboxes, then remove the test recipient from
   `RECIPIENTS` in `public/api/contact.php` and deploy again if testing is
   complete.

The endpoint returns success only when PHP reports that the local mail
transport accepted the message; this does not prove final inbox delivery.
Review cPanel mail delivery reports and spam folders when confirming setup.
The rate-limit data and its generated key are stored outside `public_html`.
If the host prevents PHP from writing there, the endpoint fails closed with
HTTP 503 and the host must enable safe writable storage for the account.

Do not use the test form for confidential, urgent, or time-sensitive
information.
