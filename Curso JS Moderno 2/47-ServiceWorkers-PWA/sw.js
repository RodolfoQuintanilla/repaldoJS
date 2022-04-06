const cacheName = 'apv-v7'
const offlinePage = '/offline.html'
const files = [
    '/',
    '/index.html',
    offlinePage,
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js',
    '/manifest.json',
]

self.addEventListener('install', e => {
    console.log('Service Worker installed', e)

    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => cache.addAll(files))
        .catch(console.error)
    )
})
self.addEventListener('activate', e => {
    console.log('Service Worker active', e)

    e.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);

            return Promise.all(
                keys.filter(key => key !== cacheName).map(key => caches.delete(key)) // Borra los demas
            )
        })
    )
})
self.addEventListener('fetch', e => {
    console.log('Fetch', e)

    e.respondWith(
        caches
        .match(e.request)
        .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match(offlinePage)))
        // .catch(() => window.location.replace(errorPage))
    )
})