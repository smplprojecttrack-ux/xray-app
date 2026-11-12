// X-RAY JVS: makes the app installable ("Add to Home screen"). Nothing is cached — data always comes live.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
