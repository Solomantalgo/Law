const ws = new WebSocket('ws://127.0.0.1:9247/devtools/page/693CA2A77616C53869ABF107271B27AB');
let id = 0; const waiting = new Map(); const exceptions = []; const consoleErrors = [];
ws.onmessage = (event) => { const m = JSON.parse(event.data); if (m.method === 'Runtime.exceptionThrown') exceptions.push(m.params.exceptionDetails.text); if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') consoleErrors.push(m.params.args.map((arg) => arg.value || arg.description).join(' ')); if (waiting.has(m.id)) { waiting.get(m.id)(m); waiting.delete(m.id); } };
function send(method, params = {}) { const n = ++id; return new Promise((resolve) => { waiting.set(n, resolve); ws.send(JSON.stringify({ id: n, method, params })); }); }
const pause = (ms) => new Promise((r) => setTimeout(r, ms));
async function evaluate(expression, awaitPromise = false) { const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise }); if (r.result.exceptionDetails) throw new Error(r.result.exceptionDetails.text); return r.result.result.value; }
(async () => {
  await new Promise((r) => (ws.onopen = r)); await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://127.0.0.1:5178/' }); await pause(900);
  const reveal = await evaluate(`(async()=>{const els=[...document.querySelectorAll('.reveal,.reveal-item')];for(const el of els){el.scrollIntoView({block:'center',behavior:'instant'});await new Promise(r=>setTimeout(r,40));}return {total:els.length,stillHidden:els.filter(e=>!e.classList.contains('is-visible')).length};})()`, true);
  await evaluate(`window.scrollTo({top:240,behavior:'instant'})`); await pause(120);
  const sticky = await evaluate(`document.querySelector('.site-header').classList.contains('is-scrolled')`);
  await evaluate(`document.querySelector('.site-header a[href="#practice"]').click()`); await pause(1200);
  const anchor = await evaluate(`Math.abs(document.querySelector('#practice').getBoundingClientRect().top)<180`);
  await evaluate(`document.querySelector('#attorneys .attorney-photo').click()`); await pause(400);
  const profile = await evaluate(`JSON.stringify({open:!!document.querySelector('.attorney-profile-page'),name:document.querySelector('.profile-hero-details h1')?.textContent,photo:document.querySelector('.profile-hero-photo img')?.getAttribute('src'),bio:document.body.innerText.includes('Robert Mackay is a Ugandan advocate')})`);
  await evaluate(`document.querySelector('.back-link').click()`); await pause(250);
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await send('Page.navigate', { url: 'http://127.0.0.1:5178/' }); await pause(700);
  await evaluate(`document.querySelector('.menu-button').click()`); await pause(80);
  const menuOpen = await evaluate(`document.querySelector('.site-header').classList.contains('menu-open')&&getComputedStyle(document.querySelector('.mobile-nav')).display!=='none'`);
  await evaluate(`document.querySelector('.mobile-nav a[href="#about"]').click()`); await pause(150);
  const mobileMenuClosed = await evaluate(`!document.querySelector('.site-header').classList.contains('menu-open')`);
  const mobileOverflow = await evaluate(`document.documentElement.scrollWidth>innerWidth`);
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  await send('Page.navigate', { url: 'http://127.0.0.1:5178/' }); await pause(800);
  const reduced = await evaluate(`JSON.stringify({hidden:[...document.querySelectorAll('.reveal,.reveal-item')].filter(e=>getComputedStyle(e).opacity==='0').length,transition:getComputedStyle(document.querySelector('.reveal-item')).transitionDuration})`);
  console.log(JSON.stringify({ reveal, sticky, anchor, profile: JSON.parse(profile), menuOpen, mobileMenuClosed, mobileOverflow, reduced: JSON.parse(reduced), exceptions, consoleErrors }));
  ws.close();
})().catch((e) => { console.error(e); process.exitCode = 1; ws.close(); });
