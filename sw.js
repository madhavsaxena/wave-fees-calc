self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('wave-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/main.css',
        '/main.html',
        '/manifest.json',
        '/card-input.html',
        '/bank-input.html',
        '/about.html',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});