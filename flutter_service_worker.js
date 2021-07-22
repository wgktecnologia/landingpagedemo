'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ff5598754525c35ed7f8e9f81abf9692",
".git/config": "8594ef23eb84945ff507d259ad510f06",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c7d574fd8225fd13b2ff197e83a77c01",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "573f8feef403010046bb0658c624e6cf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1090c773dc1f6e9aa9c90867b7c6bbcd",
".git/logs/refs/heads/master": "1090c773dc1f6e9aa9c90867b7c6bbcd",
".git/objects/02/72801237f35f4c8e600b5a38ebb63def170ac1": "3404b441a4e4955cc15d8634907bf91b",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/40/a0ae131be019938fdbb1b92a6111e66c482417": "290ef4623cd433092b688569c54d93bb",
".git/objects/40/b5d33183bb4a958d5b00a247b74351a76518da": "280aa363d9b75ca3a003b5faf55178f3",
".git/objects/41/44ed2a964445db2c2fe87170d0693b8b2397ae": "926a5c655eccc7dcbbd94c641a1756af",
".git/objects/43/a8c570c08595aaade8e30f2969d3fc181fd050": "f04a757d77e8320b0f99fe85b5db56a9",
".git/objects/46/5cb833a3f40a6103cb7fdb8814ea5e74e9bdb2": "d770b56e7ede8c094bd62f9d4693c1fa",
".git/objects/53/82333cb1c57c8f32f8ab0e254b6add8e2f4830": "036718196d321b4158adc5bbd2b7f9d6",
".git/objects/5c/8b64043a669b04016b61fef0888b771f0ccdf4": "754d0610f714af1b1a6345139a6a7316",
".git/objects/5e/d9fae32ef22aa2f3faf50e7d7db381a0d8345a": "a7ae16b77e068a8b721608aa7e82afe4",
".git/objects/65/8b5c915890335e830ae10c65af1e17974c2dd6": "030c7c846df25fd9f68d95ce1d9e7360",
".git/objects/69/837ef151820b6be5f4209298f266893718f6b8": "989c079d1391ced689f631117792bd6e",
".git/objects/6d/20f288612ca0df14c3be6dafb1893b639552b5": "a704174fc9a34eb6ca68bc65c8ac57db",
".git/objects/77/6f528afa0dd691213b4b353ba1cb0766c65e2f": "46ffdf5df527ac7a3d040301e4fcf27f",
".git/objects/77/ec60adf6b30fe82392b3d67092d68491d67c77": "cd0f7fedbc94edb9a55d7ef8aef39744",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/230c3a01ee35731ffa6f48d40978d94a48ad68": "4be5e5b4c49fe4815f783b214a57efd5",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/bb579d7408b06a447a0989dc7db9d35971794c": "18e3e2ca465a444d4f8bb7d915b7204d",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/9a/e9a2378780bbbd3113753e327d3fccca726f20": "bd4e01889a4587adc4cd5246377eee28",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b1/55ee54c69e181074ad6ab5671cd31c7bdd7e9e": "72887b59473abf0a1a2a4f5ce0c566ed",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b8/c1669beb6841218545ac06403698a15bef9d69": "18cd950acbebef7be823aa8fb6acdfdd",
".git/objects/be/86bcafaafc4194e926349d4d451d3ce3c90605": "84f42bf32023d80ed9e643ddb5ec8d8e",
".git/objects/c0/a4bd98cc295d0c9ad30eba2bc130a735c1f738": "cecebe282ac6d99296f04461a132a5d2",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/d2/2fac4a9f8e8197fe2f707ba23fbde656f487a4": "2384e92f16ad33aed2e46e42acd83edd",
".git/objects/d9/3357da7d53901ba9f513beadf1692ec3322084": "d48e201f8d28f71862f5c70c8ee3620b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/3b68263aab19bf14c3d21117a8555448140dd3": "6872f51cfadcf7df56d829847231579a",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/ORIG_HEAD": "16481dd2597ae90b5258c8c28d593edc",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "6d87305632a726c88bedf3bd400ce147",
"assets/AssetManifest.json": "f5393dd1c29dd08be00541d44b962649",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/anvisa.png": "ead4eac3001183ae9b02c45e38c00430",
"assets/images/avatar1.jpg": "b0d2cce26b4afff0180a952381c4af31",
"assets/images/avatar2.png": "fc6ff2208b3fadca1782a771a3ba436e",
"assets/images/avatar3.jpg": "fa134bf5a91cd9c745541bfcb55d27b7",
"assets/images/ciclismo-capa.jpg": "590598d6acb6b8413bfefd9830a10e27",
"assets/images/hand-3.png": "24140304a19151aa05a1f8a79b5d3692",
"assets/images/triade-da-seguranca-branco.png": "c4fc1f787936988c55d523de62a86c60",
"assets/NOTICES": "2682180b36052278846e2eba1b7d904b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e83eb053b6d0e1a6925e2f1f808ad0f4",
"/": "e83eb053b6d0e1a6925e2f1f808ad0f4",
"main.dart.js": "0c51ff01d1176163931e82f40bbfc5f1",
"manifest.json": "d71aed0f4e101954e85fd04e344edc90",
"version.json": "380b6509adf5444c1260baaa0967ec37",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
