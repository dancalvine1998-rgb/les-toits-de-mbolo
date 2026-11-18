// Les Toits de Mbolo : mise en cache pour jouer hors connexion
const CACHE='mbolo-v18',FICHIERS=['index.html','manifest.webmanifest','icones/icone-192.png','icones/icone-512.png','icones/icone-masquable-512.png','icones/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FICHIERS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(L=>Promise.all(L.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(r.mode==='navigate'){e.respondWith(caches.match('index.html').then(m=>m||fetch(r)));return}
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(rep=>{if(rep.ok){const c=rep.clone();caches.open(CACHE).then(k=>k.put(r,c))}return rep})))});
