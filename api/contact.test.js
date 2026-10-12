import test from 'node:test';
import assert from 'node:assert/strict';
import { createContactHandler } from './contact.js';

const env = {
  GOOGLE_APPS_SCRIPT_URL: 'https://script.google.com/macros/s/test/exec',
  UPSTASH_REDIS_REST_URL: 'https://example.upstash.io',
  UPSTASH_REDIS_REST_TOKEN: 'test-token',
  CONTACT_RATE_LIMIT_HASH_SECRET: 'a-test-secret-that-is-at-least-thirty-two-characters',
};
const goodForm = () => ({
  fullName: 'Amina N.',
  email: 'amina@example.org',
  telephone: '',
  matterCategory: 'tax',
  preferredContact: 'email',
  message: 'Please contact me about an initial enquiry.',
  privacyAcknowledged: 'acknowledged',
  website: '',
});

function makeResponse() {
  return {
    headers: {}, statusCode: 200, payload: null,
    setHeader(key, value) { this.headers[key] = value; },
    status(code) { this.statusCode = code; return this; },
    json(payload) { this.payload = payload; return this; },
  };
}

async function run({ body = goodForm(), method = 'POST', headers = {}, fetchImpl = async () => new Response(JSON.stringify({ ok: true }), { status: 200 }), rateLimit, ...options } = {}) {
  const req = {
    method,
    headers: { 'content-type': 'application/json', 'x-forwarded-for': '203.0.113.7', 'content-length': String(Buffer.byteLength(JSON.stringify(body))), ...headers },
    body,
  };
  const res = makeResponse();
  const handler = createContactHandler({ env, fetchImpl, rateLimit: rateLimit || (async () => ({ configured: true, available: true, allowed: true })), ...options });
  await handler(req, res);
  return { req, res };
}

test('rejects non-POST methods', async () => {
  const { res } = await run({ method: 'GET' });
  assert.equal(res.statusCode, 405);
  assert.equal(res.headers.Allow, 'POST');
});

test('rejects invalid required fields without contacting Apps Script', async () => {
  const body = goodForm();
  body.email = 'invalid';
  let called = false;
  const { res } = await run({ body, fetchImpl: async () => { called = true; } });
  assert.equal(res.statusCode, 400);
  assert.equal(res.payload.field, 'email');
  assert.equal(called, false);
});

test('rejects oversized bodies and unexpected fields', async () => {
  const body = goodForm();
  body.extra = 'unexpected';
  const { res } = await run({ body });
  assert.equal(res.statusCode, 400);

  const oversized = goodForm();
  oversized.message = 'x'.repeat(2001);
  const tooLong = await run({ body: oversized });
  assert.equal(tooLong.res.statusCode, 400);

  const tooLarge = await run({ body: goodForm(), headers: { 'content-length': String(9 * 1024) } });
  assert.equal(tooLarge.res.statusCode, 413);
});

test('rejects unlisted practice areas and filled honeypots', async () => {
  const invalidArea = goodForm();
  invalidArea.matterCategory = 'not-a-practice-area';
  const areaResult = await run({ body: invalidArea });
  assert.equal(areaResult.res.statusCode, 400);
  assert.equal(areaResult.res.payload.field, 'matterCategory');

  const bot = goodForm();
  bot.website = 'spam';
  const botResult = await run({ body: bot });
  assert.equal(botResult.res.statusCode, 400);
});

test('forwards URL-encoded contract and accepts only explicit ok true', async () => {
  let submitted;
  const { res } = await run({ fetchImpl: async (url, options) => {
    submitted = { url: String(url), options };
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'content-type': 'application/json' } });
  } });
  assert.equal(res.statusCode, 200);
  assert.equal(res.payload.ok, true);
  assert.match(submitted.options.headers['Content-Type'], /application\/x-www-form-urlencoded/);
  const data = new URLSearchParams(submitted.options.body);
  assert.equal(data.get('privacyAcknowledged'), 'acknowledged');
  assert.equal(data.get('website'), '');
  assert.deepEqual([...data.keys()], ['fullName', 'email', 'telephone', 'matterCategory', 'preferredContact', 'message', 'privacyAcknowledged', 'website']);
});

test('treats malformed and negative Apps Script responses as failures', async () => {
  const malformed = await run({ fetchImpl: async () => new Response('not-json', { status: 200 }) });
  assert.equal(malformed.res.statusCode, 502);
  const negative = await run({ fetchImpl: async () => new Response(JSON.stringify({ ok: false }), { status: 200 }) });
  assert.equal(negative.res.statusCode, 502);
});

test('returns a timeout response without retrying an ambiguous upstream request', async () => {
  let calls = 0;
  const { res } = await run({
    upstreamTimeoutMs: 5,
    fetchImpl: (_url, { signal }) => {
      calls += 1;
      return new Promise((resolve, reject) => signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true }));
    },
  });
  assert.equal(res.statusCode, 504);
  assert.match(res.payload.error, /before sending it again/);
  assert.equal(calls, 1);
});

test('fails closed when shared rate limiting is unavailable', async () => {
  const { res } = await run({ rateLimit: async () => ({ configured: true, available: false }) });
  assert.equal(res.statusCode, 503);
});
