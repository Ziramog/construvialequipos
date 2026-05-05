const CACHE_NAME = 'construvialsapp-v1';
const urlsToCache = [
  './',
  './index2.html',
  './ficha-tecnica.html',
  './manifest.json',
  './logo-white.png'
];

// Install event
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});