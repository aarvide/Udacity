// JavaScript Document

//FILE CREATED BY ALFREDO ARVIDE TO ADD A SERVICE WORKER TO CACHE THE FILES

console.log('WORKED - Service Worker Running');

//First we add the event listeners to INSTALL the worker and create the array of cached files.
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('Alfredos-Restaurants-Reviews-Cache').then(function(cache) {
			return cache.addAll([
				'./',
				'./css/styles.css',
				'./data/restaurants.json',
				'./index.html',
				'./restaurant.html',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./img/1.jpg',
				'./img/10.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg'
			]);
		})
	);
});

//Next we listen for the FETCH event
self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request)
		.then(function(response) {
			return response || fetch(e.request);
		})
	);
});

//Lastly, we work on activating
self.addEventListener('activate', function(e) {
	e.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(Name) {
					return Name.startsWith('restaurant-') &&
						   Name != 'Alfredos-Restaurants-Reviews-Cache';
				}).map(function(Name) {
					return caches.delete(Name);
				})
			);
		})
	);
})