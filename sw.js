//importScripts(
//  "webpack.mix.js"
//);

// キャッシュファイルの指定
var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
	'/0.0.0.0/',
//    '/poster-keisuke.github.io/',
//    '/',
'/favicon.ico',
'/index.html',
'/styles.css',
'/data.zip',
'/html',
'/html/20669F9F65B6FA3282BD43745BA550EB.cache.js',
'/html/gwt',
'/html/gwt/chrome',
'/html/gwt/chrome/images',
'/html/gwt/chrome/images/hborder.png',
'/html/gwt/chrome/images/splitPanelThumb.png',
'/html/gwt/chrome/images/vborder_ie6.png',
'/html/gwt/chrome/images/vborder.png',
'/html/gwt/chrome/images/ie6',
'/html/gwt/chrome/images/ie6/corner_dialog_topright.png',
'/html/gwt/chrome/images/ie6/hborder_blue_shadow.png',
'/html/gwt/chrome/images/ie6/corner_dialog_topleft.png',
'/html/gwt/chrome/images/ie6/hborder_gray_shadow.png',
'/html/gwt/chrome/images/ie6/vborder_gray_shadow.png',
'/html/gwt/chrome/images/ie6/vborder_blue_shadow.png',
'/html/gwt/chrome/images/corner_ie6.png',
'/html/gwt/chrome/images/corner.png',
'/html/gwt/chrome/images/hborder_ie6.png',
'/html/gwt/chrome/chrome_rtl.css',
'/html/gwt/chrome/chrome.css',
'/html/html.nocache.js',
'/html/soundmanager2_flash9_debug.swf',
'/html/93C25384D06CEAFE7B6BE2C36CF1BBDB.cache.js',
'/html/soundmanager2-nodebug-jsmin.js',
'/html/soundmanager2-jsmin.js',
'/html/logo.png',
'/html/html.devmode.js',
'/html/soundmanager2.swf',
'/html/soundmanager2-setup.js',
'/html/soundmanager2_flash9.swf',
'/html/soundmanager2_debug.swf',
'/html/compilation-mappings.txt',
'/html/clear.cache.gif',
'/html/sw.js',
'/html/freetype.js',
'/html/F8B2FF73B5FC51B8F120EDF88ACA1E9D.cache.js',
'/soundmanager2-jsmin.js',
'/WEB-INF',
'/WEB-INF/deploy',
'/WEB-INF/deploy/html',
'/WEB-INF/deploy/html/symbolMaps',
'/WEB-INF/deploy/html/symbolMaps/20669F9F65B6FA3282BD43745BA550EB.symbolMap',
'/WEB-INF/deploy/html/symbolMaps/93C25384D06CEAFE7B6BE2C36CF1BBDB.symbolMap',
'/WEB-INF/deploy/html/symbolMaps/F8B2FF73B5FC51B8F120EDF88ACA1E9D.symbolMap',
'/WEB-INF/deploy/html/rpcPolicyManifest',
'/WEB-INF/deploy/html/rpcPolicyManifest/manifest.txt',
'/WEB-INF/web.xml',
'/manifest.json',
'/soundmanager2-setup.js',
'/assets',
'/assets/generated-fonts',
'/assets/generated-fonts/exo-large',
'/assets/generated-fonts/exo-large/exo-large_1.png',
'/assets/generated-fonts/exo-large/exo-large_0.png',
'/assets/generated-fonts/exo-small',
'/assets/generated-fonts/exo-small/exo-small.png',
'/assets/generated-fonts/exo-medium',
'/assets/generated-fonts/exo-medium/exo-medium.png',
'/assets/generated-fonts/exo-large.fnt',
'/assets/generated-fonts/exo-medium.fnt',
'/assets/generated-fonts/exo-small.fnt',
'/assets/skin.json',
'/assets/png',
'/assets/png/spritesheet.atlas',
'/assets/png/spritesheet.png',
'/assets/font.png',
'/assets/font.fnt',
'/assets/assets.txt',
'/assets/skin.png',
'/assets/myfile.txt',
'/assets/default.fnt',
'/assets/font',
'/assets/font/output',
'/assets/font/output/spritesheet2.png',
'/assets/font/output/spritesheet.atlas',
'/assets/font/output/spritesheet.png',
'/assets/font/output/spritesheet.cim',
'/assets/font/NotoSansCJKjp-Medium.otf',
'/assets/skin.atlas',
'/assets/com',
'/assets/com/badlogic',
'/assets/com/badlogic/gdx',
'/assets/com/badlogic/gdx/utils',
'/assets/com/badlogic/gdx/utils/arial-15.png',
'/assets/com/badlogic/gdx/utils/arial-15.fnt',
'/assets/com/badlogic/gdx/graphics',
'/assets/com/badlogic/gdx/graphics/g3d',
'/assets/com/badlogic/gdx/graphics/g3d/particles',
'/assets/com/badlogic/gdx/graphics/g3d/particles/particles.vertex.glsl',
'/assets/com/badlogic/gdx/graphics/g3d/particles/particles.fragment.glsl',
'/assets/com/badlogic/gdx/graphics/g3d/shaders',
'/assets/com/badlogic/gdx/graphics/g3d/shaders/default.vertex.glsl',
'/assets/com/badlogic/gdx/graphics/g3d/shaders/depth.fragment.glsl',
'/assets/com/badlogic/gdx/graphics/g3d/shaders/default.fragment.glsl',
'/assets/com/badlogic/gdx/graphics/g3d/shaders/depth.vertex.glsl',
'/assets/spritesheet.cim',
'/assets/tama1_sound.wav',
'/icon_192x192.jpg',
'/service_worker.js',
'/app.js',
'/refresh.png'//,
];

// インストール処理
//self.addEventListener('install', function(event) {
//    event.waitUntil(
//        caches
//            .open(CACHE_NAME)
//            .then(function(cache) {
//                return cache.addAll(urlsToCache);
//            })
//    );
//});

self.addEventListener('install', function(event) {
  // 繧､繝ｳ繧ｹ繝医�繝ｫ蜃ｦ逅�
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('PWA cache opened');
      return cache.addAll(urlsToCache);
    })
  );
});


//  self.addEventListener('activate', function(e) {
//    console.log('[ServiceWorker] Activate');
//  });

// Activate
self.addEventListener('activate', function(e) {
	console.log('PWA service worker activation');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if ( key !== CACHE_NAME ) {
					console.log('PWA old cache removed', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});



// リソースフェッチ時のキャッシュロード処理
//self.addEventListener('fetch', function(event) {
//    event.respondWith(
//        caches
//            .match(event.request)
//            .then(function(response) {
//                return response ? response : fetch(event.request);
//            })
//    );
//});

// Fetch
self.addEventListener('fetch', function(e) {

  // 邂｡逅�判髱｢縺ｯ繧ｭ繝｣繝�す繝･繧剃ｽｿ逕ｨ縺励↑縺�
  if (/\/wp-admin|\/wp-login|preview=true/.test(e.request.url)) {
    return;
  }

  // POST縺ｮ蝣ｴ蜷医�繧ｭ繝｣繝�す繝･繧剃ｽｿ逕ｨ縺励↑縺�
  if ('POST' === e.request.method) {
    return;
  }

	// URL繝励Ο繝医さ繝ｫ縺敬ttp繧ゅ＠縺上�HTTPS縺ｧ縺ｪ縺�→縺阪�繧ｭ繝｣繝�す繝･繧剃ｽｿ逕ｨ縺励↑縺�
	if ( ! e.request.url.match(/^(http|https):\/\//i) )
		return;

  // 繝ｪ繧ｯ繧ｨ繧ｹ繝�URL縺悟､夜Κ繝峨Γ繧､繝ｳ縺�縺｣縺溘→縺阪�繧ｭ繝｣繝�す繝･繧剃ｽｿ逕ｨ縺励↑縺�
	if ( new URL(e.request.url).origin !== location.origin )
		return;

    // POST繝ｪ繧ｯ繧ｨ繧ｹ繝医�縺ｨ縺阪，ache繧剃ｽｿ逕ｨ縺励↑縺�→縺阪が繝輔Λ繧､繝ｳ繧ｭ繝｣繝�す繝･繧定ｿ斐☆�井ｸ翫↓POST逕ｨ縺ｮ蜃ｦ逅�′縺ゅｋ縺ｮ縺ｧ荳崎ｦ√°繧ゑｼ�
	if ( e.request.method !== 'GET' ) {
		e.respondWith(
			fetch(e.request).catch( function() {
				return caches.match('https://iphone-lab.net/');
			})
		);
		return;
	}

	// Revving strategy
	if ( e.request.mode === 'navigate' && navigator.onLine ) {
		e.respondWith(
			fetch(e.request).then(function(response) {
				return caches.open(CACHE_NAME).then(function(cache) {
					cache.put(e.request, response.clone());
					return response;
				});
			})
		);
		return;
	}

	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request).then(function(response) {
				return caches.open(CACHE_NAME).then(function(cache) {
					cache.put(e.request, response.clone());
					return response;
				});
			});
		}).catch(function() {
			return caches.match('https://iphone-lab.net/');
		})
	);
});
