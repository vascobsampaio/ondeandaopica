const CACHE_NAME = 'oapica-v4';
const STATIC_ASSETS = ['/', '/index.html', '/manifest.json', '/preview.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request))
    );
  }
});

// Fired when a push message arrives from the Edge Function, even if the tab is closed.
// The payload contains the report details.
self.addEventListener('push', event => {
  // If for some reason the push has no data, show a generic message
  if (!event.data) {
    self.registration.showNotification('Onde anda o pica?', {
      body: 'Novo avistamento reportado.',
      icon: '/preview.png'
    });
    return;
  }

  // Parse the JSON payload sent by the Edge Function
  const data = event.data.json();

  // waitUntil keeps the SW alive until the notification is shown
  event.waitUntil(
    self.registration.showNotification('🚨 Pica avistado!', {
      body: `Linha ${data.line} → ${data.direction}`,
      icon: '/preview.png',
      badge: '/preview.png',
      tag: `pica-${data.line}-${data.direction}`, // prevents duplicate notifications for the same line/direction
      data: { url: 'https://ondeandaopica.pt' }
    })
  );
});

// When the user taps the notification, open the app
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
