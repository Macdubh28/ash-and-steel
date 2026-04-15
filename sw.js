const CACHE_NAME = 'ash-steel-v1';
const STATIC_ASSETS = ['/ash-and-steel/','/ash-and-steel/index.html','/ash-and-steel/style.css','/ash-and-steel/data.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.hostname.includes('youtube') || url.hostname.includes('ytimg')) return;
  if (url.pathname.startsWith('/ash-and-steel/')) {
    e.respondWith(caches.match(e.request).then(cached => { if (cached) return cached; return fetch(e.request).then(r => { if (!r || r.status !== 200) return r; caches.open(CACHE_NAME).then(c => c.put(e.request, r.clone())); return r; }); }));
  }
});
