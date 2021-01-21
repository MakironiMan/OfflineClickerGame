self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        // Main page
        '/',
        // Font css
        'https://fonts.googleapis.com/css?family=Raleway:300&display=swap',
        // Font font
        'https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVuEorCIPrE.woff2',
        // tinycolor2
        'https://cdn.jsdelivr.net/npm/tinycolor2'
      ])
    })
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      // Real fetch if cache doesn't have it
      .then(async response => response || await fetch(e.request))
    )
})
