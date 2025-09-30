// public/service-worker.js

const CACHE_NAME = "lockledger-cache-v1";
const ASSETS_TO_CACHE = [
   "/",
   "/index.html",
   "/manifest.json",
   "/icons/manifest-icon-192.maskable.png",
   "/icons/manifest-icon-512.maskable.png",
];

// Install event - cache files
self.addEventListener("install", (event) => {
   event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
      })
   );
   self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener("activate", (event) => {
   event.waitUntil(
      caches.keys().then((keys) =>
      Promise.all(
         keys.map((key) => {
            if (key !== CACHE_NAME) {
            return caches.delete(key);
            }
         })
      )
      )
   );
   self.clients.claim();
});

// Fetch event - serve from cache first, then network
self.addEventListener("fetch", (event) => {
   event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
      })
   );
});
