const cacheName = 'portfolio-cache-v1.0.2';

self.addEventListener('install', (e) => {
    // console.log('Service Worker: Installed');
});

self.addEventListener('activate', (e) => {
    // console.log('Service Worker: Activated');
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        // console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (e) => {
    // console.log('Service Worker: Fetching');
    e.respondWith(
        fetch(e.request)
            .then(res => {
                const resClone = res.clone();
                caches.open(cacheName).then(cache => {
                    cache.put(e.request, resClone);
                });
                return res;
            })
            .catch(() => caches.match(e.request))
   
        );
});