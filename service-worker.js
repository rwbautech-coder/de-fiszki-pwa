const CACHE_NAME = 'de-fiszki-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js'
];

// Instalacja Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// Aktywacja Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Obsługa fetch - cache-first strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - zwróć z cache
        if (response) {
          return response;
        }

        // Clone request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Sprawdź czy odpowiedź jest poprawna
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
});
