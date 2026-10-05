const fs = require('node:fs');
const ws = new WebSocket('ws://127.0.0.1:9247/devtools/page/693CA2A77616C53869ABF107271B27AB');
const pending = new Map(); let nextId = 0;
ws.onmessage = (event) => { const m = JSON.parse(event.data); if (pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
function send(method, params = {}) { const id = ++nextId; return new Promise((resolve) => { pending.set(id, resolve); ws.send(JSON.stringify({ id, method, params })); }); }
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
(async () => {
  await new Promise((resolve) => (ws.onopen = resolve)); await send('Page.enable');
  const cases = [
    ['desktop-who-we-help', 1440, 1000, 'who-we-help', 'section'],
    ['desktop-our-people', 1440, 1000, 'attorneys', 'section'],
    ['desktop-cta', 1440, 1000, 'contact', 'section'],
    ['mobile-our-people-cards', 390, 844, 'attorneys', 'cards'],
    ['mobile-our-people-placeholders', 390, 844, 'attorneys', 'placeholders'],
  ];
  for (const [name, width, height, anchor, target] of cases) {
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width <= 800 });
    await send('Page.navigate', { url: `http://127.0.0.1:5178/#${anchor}` }); await wait(1200);
    const expression = target === 'cards'
      ? `window.scrollTo({top:document.querySelectorAll('.attorney-card')[1].getBoundingClientRect().top+scrollY-80,behavior:'instant'})`
      : target === 'placeholders'
        ? `window.scrollTo({top:document.querySelectorAll('.attorney-card')[2].getBoundingClientRect().top+scrollY-80,behavior:'instant'})`
        : `window.scrollTo({top:document.querySelector('#${anchor}')?.offsetTop||0,behavior:'instant'})`;
    await send('Runtime.evaluate', { expression }); await wait(900);
    const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false, fromSurface: true });
    fs.writeFileSync(`${__dirname}/${name}.png`, Buffer.from(shot.result.data, 'base64'));
  }
  ws.close();
})().catch((e) => { process.stderr.write(String(e)); process.exitCode = 1; });
