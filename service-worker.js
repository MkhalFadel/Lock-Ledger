const CACHE_NAME = "lockledger-cache-v1";
const ASSETS_TO_CACHE = [
   "./manifest.json",
   "./icons/manifest-icon-192.maskable.png",
   "./icons/manifest-icon-512.maskable.png",
];

// Install - cache assets
self.addEventListener("install", (event) => {
   event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)));
});

// Activate - clean old caches
self.addEventListener("activate", (event) => {
   event.waitUntil(
      caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
      )
   );
});

// Fetch - cache static assets, network-first for HTML
self.addEventListener("fetch", (event) => {
   const request = event.request;

  // Always fetch HTML from network
if (request.mode === "navigate") {
   event.respondWith(fetch(request).catch(() => caches.match("./index.html")));
   return;
}

  // For other assets, cache-first
event.respondWith(
   caches.match(request).then((cachedResponse) => cachedResponse || fetch(request))
);
});
