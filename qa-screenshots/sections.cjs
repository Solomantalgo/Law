const fs = require('node:fs');
const ws = new WebSocket('ws://127.0.0.1:9247/devtools/page/693CA2A77616C53869ABF107271B27AB');
let id = 0; const waiting = new Map();
ws.onmessage = (e) => { const m=JSON.parse(e.data); if(waiting.has(m.id)){waiting.get(m.id)(m);waiting.delete(m.id);} };
function send(method,params={}){const n=++id;return new Promise(r=>{waiting.set(n,r);ws.send(JSON.stringify({id:n,method,params}));});}
const pause=(ms)=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 await new Promise(r=>ws.onopen=r); await send('Page.enable');
 const cases=[
  ['desktop-practice',1440,1000,'#practice'],['desktop-approach',1440,1000,'.why-section'],
  ['desktop-philosophy',1440,1000,'.quote-section'],['desktop-insights',1440,1000,'#insights'],
  ['mobile-practice',390,844,'#practice'],['mobile-wider-view',390,844,'#corporate'],
  ['mobile-approach',390,844,'.why-section'],['mobile-insights',390,844,'#insights'],
 ];
 for(const [name,width,height,selector] of cases){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<=800});
  await send('Page.navigate',{url:'http://127.0.0.1:5178/'});await pause(950);
  await send('Runtime.evaluate',{expression:`window.scrollTo({top:(document.querySelector('${selector}')?.getBoundingClientRect().top||0)+scrollY,behavior:'instant'})`});await pause(800);
  const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false,fromSurface:true});fs.writeFileSync(`${__dirname}/${name}.png`,Buffer.from(shot.result.data,'base64'));
 }
 ws.close();
})().catch(e=>{console.error(e);process.exitCode=1;ws.close();});
