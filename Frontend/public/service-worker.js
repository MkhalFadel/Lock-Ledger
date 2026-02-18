const CACHE_NAME = 'lockledger-cache-v1';
const ASSETS_TO_CACHE = [
   './manifest.json',
   './icons/manifest-icon-192.maskable.png',
   './icons/manifest-icon-512.maskable.png',
];

self.addEventListener('install', event => {
   event.waitUntil(
      caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
   );
});

self.addEventListener('activate', event => {
   event.waitUntil(
      caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))
   )
);
});

self.addEventListener('fetch', event => {
const req = event.request;

// Skip caching for navigation (index.html) to prevent auto-refresh
if (req.mode === 'navigate') return;

event.respondWith(
   caches.match(req).then(res => res || fetch(req))
);
});
