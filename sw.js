// ASH & STEEL — Service Worker v2
// Cache-first pour assets statiques, network-first pour le HTML (updates fraîches)

const CACHE_NAME = 'ash-steel-v2';
const BASE = '/ash-and-steel/';

const STATIC_ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'ka.html',
  BASE + 'holden.html',
  BASE + 'marciano.html',
  BASE + 'stylesp.html',
  BASE + 'style.css',
  BASE + 'data.js',
  BASE + 'manifest.json',
  BASE + 'icons/icon-192.png',
  BASE + 'icons/icon-512.png'
];

// Install : pré-cache tous les assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => c.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate : purge les anciens caches (v1, etc.)
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch : stratégie différenciée
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // YouTube / ytimg : jamais cachés (le player gère)
  if (url.hostname.includes('youtube') || url.hostname.includes('ytimg') || url.hostname.includes('ggpht')) {
    return;
  }

  // Seulement notre domaine
  if (!url.pathname.startsWith(BASE)) return;

  // HTML : network-first (pour avoir les updates fraîches sans attendre un redéploiement SW)
  if (e.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === BASE) {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          if (r && r.status === 200) {
            const clone = r.clone();
            caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
          }
          return r;
        })
        .catch(() => caches.match(e.request).then(cached => cached || caches.match(BASE + 'index.html')))
    );
    return;
  }

  // CSS / JS / images / JSON : cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(r => {
        if (!r || r.status !== 200) return r;
        const clone = r.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        return r;
      });
    })
  );
});
