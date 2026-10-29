// FE Civil Drill service worker: caches the app so it works offline.
// Bump VERSION whenever index.html changes so installed copies update.
const VERSION = 'fe-drill-v897-1793232470';
const FILES = [
  './', './index.html', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './favicon.png',
    "./fonts/barlow-condensed-latin-500-normal.woff2",   "./fonts/barlow-condensed-latin-600-normal.woff2",   "./fonts/barlow-condensed-latin-700-normal.woff2",   "./fonts/ibm-plex-mono-latin-400-normal.woff2",   "./fonts/ibm-plex-mono-latin-500-normal.woff2",   "./fonts/ibm-plex-sans-latin-400-normal.woff2",   "./fonts/ibm-plex-sans-latin-500-normal.woff2",   "./fonts/ibm-plex-sans-latin-600-normal.woff2", 
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  // Pages: try the network first (to pick up updates), fall back to the cached copy offline.
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put('./index.html', c)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // Everything else: cache first.
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
