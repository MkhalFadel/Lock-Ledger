const CACHE_NAME = "lockledger-cache-v1";
const ASSETS_TO_CACHE = [
   "/Lock-Ledger/manifest.json",
   "/Lock-Ledger/icons/manifest-icon-192.maskable.png",
   "/Lock-Ledger/icons/manifest-icon-512.maskable.png",
];

// Install event
self.addEventListener("install", (event) => {
event.waitUntil(
   caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
);
});

// Activate event
self.addEventListener("activate", (event) => {
   event.waitUntil(
      caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
      )
);
});

// Fetch event
self.addEventListener("fetch", (event) => {
   if (event.request.mode === "navigate") return; // always fetch index.html from network

event.respondWith(
   caches.match(event.request).then((res) => res || fetch(event.request))
);
});