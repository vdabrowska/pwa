var cacheName = "podyplomowe";
var filesToCache = ["./", "./index.html", "./css/style.css", "./js/main.js"];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (event) {
// Perform install steps
event.waitUntil(
    caches.open(cacheName).then(function (cache) {
    console.log("Opened cache");
    return cache.addAll(filesToCache);
    })
);
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (event) {
event.respondWith(
    caches.match(event.request).then(function (response) {
    // Cache hit - return response
    if (response) {
        return response;
    }
    return fetch(event.request);
    })
);
});