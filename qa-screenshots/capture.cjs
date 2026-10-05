const fs = require('node:fs');
const pages = [
  ['desktop-hero', 1440, 1000, 'home'],
  ['desktop-about', 1440, 1000, 'about'],
  ['desktop-who-we-help', 1440, 1000, 'who-we-help'],
  ['desktop-wider-view', 1440, 1000, 'corporate'],
  ['desktop-our-people', 1440, 1000, 'attorneys'],
  ['desktop-cta', 1440, 1000, 'contact'],
  ['mobile-hero', 390, 844, 'home'],
  ['mobile-about', 390, 844, 'about'],
  ['mobile-who-we-help', 390, 844, 'who-we-help'],
  ['mobile-our-people', 390, 844, 'attorneys'],
  ['mobile-cta', 390, 844, 'contact'],
  ['viewport-375', 375, 844, 'home'],
  ['viewport-390', 390, 844, 'home'],
  ['viewport-430', 430, 932, 'home'],
  ['viewport-768', 768, 1024, 'home'],
  ['viewport-1366', 1366, 950, 'home'],
  ['viewport-1440', 1440, 1000, 'home'],
  ['viewport-1920', 1920, 1080, 'home'],
];
const ws = new WebSocket('ws://127.0.0.1:9247/devtools/page/693CA2A77616C53869ABF107271B27AB');
let nextId = 0;
const pending = new Map();
ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    pending.get(message.id)(message);
    pending.delete(message.id);
  }
};
function send(method, params = {}) {
  const id = ++nextId;
  return new Promise((resolve) => {
    pending.set(id, resolve);
    ws.send(JSON.stringify({ id, method, params }));
  });
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
(async () => {
  await new Promise((resolve) => (ws.onopen = resolve));
  await send('Page.enable');
  await send('Runtime.enable');
  for (const [name, width, height, anchor] of pages) {
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width <= 800 });
    const url = `http://127.0.0.1:5178/#${anchor}`;
    await send('Page.navigate', { url });
    await delay(1300);
    await send('Runtime.evaluate', { expression: `window.scrollTo({top: (document.querySelector('#${anchor}')?.getBoundingClientRect().top || 0) + scrollY, behavior: 'instant'})` });
    await delay(900);
    const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false, fromSurface: true });
    fs.writeFileSync(`${__dirname}/${name}.png`, Buffer.from(shot.result.data, 'base64'));
    const check = await send('Runtime.evaluate', { expression: `JSON.stringify({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,height:innerHeight,hash:location.hash})`, returnByValue: true });
    process.stdout.write(`${name}: ${check.result.result.value}\n`);
  }
  ws.close();
})().catch((error) => { process.stderr.write(String(error)); process.exitCode = 1; });
