# Consultation API setup

The contact form posts to `/api/contact`, a Vercel Node.js Function. The function forwards URL-encoded form fields to Google Apps Script. The Apps Script deployment URL is read only by the server from `GOOGLE_APPS_SCRIPT_URL` and is not included in the Vite client bundle.

## Environment

Configure these variables in Vercel Project Settings for Preview and Production, and in a local `.env.local` file when using `vercel dev`:

- `GOOGLE_APPS_SCRIPT_URL`: the deployed HTTPS Apps Script `/exec` URL.
- `UPSTASH_REDIS_REST_URL`: HTTPS REST endpoint for a dedicated Upstash Redis database.
- `UPSTASH_REDIS_REST_TOKEN`: server-side Upstash write token. Never use a read-only or public client token for this function.
- `CONTACT_RATE_LIMIT_HASH_SECRET`: at least 32 random characters. It HMACs source addresses before they are used as Redis keys.

The function fails closed with a safe 503 response when the shared limiter is missing or unavailable. It allows up to five valid submissions per source address per rolling hour. It uses an atomic Redis Lua operation so concurrent Vercel instances share the limit. A honeypot is also checked. These measures reduce abuse; they do not make a public form immune to distributed spam.

The form sends only the specified fields: `fullName`, `email`, `telephone`, `matterCategory`, `preferredContact`, `message`, `privacyAcknowledged` and `website`. The acknowledgement currently uses the value `acknowledged`, matching the existing browser checkbox. The deployed Apps Script source is not in this repository, so confirm that its validation expects that exact value before relying on production delivery.

## Local development and tests

The Vite server does not execute files under `/api`. Use Vercel's local runtime after linking the project and pulling or setting the required local variables:

```powershell
npx vercel link
npx vercel env pull .env.local
npx vercel dev
```

Then open the local site and submit only synthetic data against a test Apps Script deployment. Do not use the production `/exec` URL for test enquiries without approval. The automated handler tests stub both the limiter and the Apps Script response:

```powershell
npm test
```

`npm run build` builds the Vite frontend but does not execute or validate the Vercel Function. The Node tests cover input rejection, request method, field contract, explicit Apps Script acceptance, malformed/negative responses, timeouts and limiter failure.

## Apps Script follow-up

The deployed Apps Script implementation was not supplied here, so its duplicate cache ordering and exact response contract could not be independently inspected. The current implementation description says its duplicate marker is written before email delivery. Before production use, update and redeploy it so the marker is written only after the email send call succeeds. A failed send must not leave a marker that blocks a legitimate retry. Use a script lock around the duplicate check and send to reduce concurrent duplicates. This still cannot guarantee exactly-once email delivery if Apps Script or Gmail reports an ambiguous failure after accepting a message; the client therefore receives an error asking them to contact the firm before resubmitting after an uncertain timeout.

The script must return JSON with an explicit boolean `{ "ok": true }` only after it considers delivery accepted. Return `{ "ok": false }` for validation, permission, quota or mail errors. Google Apps Script quotas vary by account and can change. The web app's access setting must allow the server to call it without visitor sign-in, and it runs with the authority selected in the Apps Script deployment. Review that access and authority carefully because the app may send email under the deploying account. Redeploy the Apps Script after changing its code or access settings, then set the matching URL in Vercel.

The endpoint does not log enquiry contents and does not retry upstream requests after a timeout. A timeout can be ambiguous: an email may already have been sent. No automatic Formspree fallback is used. Formspree's existing form ID and React hook remain in `src/contact/formspree.js` until this path is verified.

This workflow is not production-verified until the required Vercel and Upstash secrets are configured, the Apps Script acknowledgement value and `ok` response are confirmed, spam controls are reviewed, and an approved end-to-end test is completed. No such live test has been sent as part of this change.
