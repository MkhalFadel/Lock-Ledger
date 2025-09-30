const CACHE_NAME = "lockledger-cache-v1";
const ASSETS_TO_CACHE = [
   "/Lock-Ledger/manifest.json",
   "/Lock-Ledger/icons/manifest-icon-192.maskable.png",
   "/Lock-Ledger/icons/manifest-icon-512.maskable.png",
];

self.addEventListener('install', (event) => self.skipWaiting());
self.addEventListener('activate', (event) => self.clients.claim());

// Fetch event
self.addEventListener("fetch", (event) => {
   if (event.request.mode === "navigate") return; // always fetch index.html from network

event.respondWith(
   caches.match(event.request).then((res) => res || fetch(event.request))
);
});