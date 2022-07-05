/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0582bbc6dd0b767f29d42868c4b8fe6b"
  },
  {
    "url": "assets/css/0.styles.88407d95.css",
    "revision": "10d337458c0e8bede3b5a72da7065e9b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f41b963e.js",
    "revision": "3a2963fd857f51ccfb4f30280bf3ed1a"
  },
  {
    "url": "assets/js/11.c3d79761.js",
    "revision": "ab0d7b66e0af5510fb3ee56029a3feac"
  },
  {
    "url": "assets/js/12.832e104a.js",
    "revision": "ae583644e0c44d938be45d6f5e99bbf7"
  },
  {
    "url": "assets/js/13.fee40460.js",
    "revision": "efd38e240465a2c2818a9392117e9c32"
  },
  {
    "url": "assets/js/14.df098b95.js",
    "revision": "e832082fe6a33068bc8cbdb64897066c"
  },
  {
    "url": "assets/js/15.fa506bd8.js",
    "revision": "23be46f234affcf1f492d154916e4dfd"
  },
  {
    "url": "assets/js/16.3dff9c3d.js",
    "revision": "554a0e17fa0b3c559e5c43851f413f43"
  },
  {
    "url": "assets/js/17.ed42fbc3.js",
    "revision": "e2304361de6ecea162f5a845a009f3f1"
  },
  {
    "url": "assets/js/18.3e6c5688.js",
    "revision": "b28aab015af0e257316b16fdc2b5e2df"
  },
  {
    "url": "assets/js/19.4b276581.js",
    "revision": "de1e11952d5e792a2d789cc8e063fe7d"
  },
  {
    "url": "assets/js/20.dd16fed9.js",
    "revision": "8b887425baee12135e62437d1d14008d"
  },
  {
    "url": "assets/js/21.705a3c82.js",
    "revision": "3d447a979a7f086b65590cd961b35730"
  },
  {
    "url": "assets/js/22.5192fecc.js",
    "revision": "0fae9ff6fad8b18e6a89e6ed2b166ba8"
  },
  {
    "url": "assets/js/23.a73f93a7.js",
    "revision": "37d3f508cb123dd76bdd22fb938fc3c3"
  },
  {
    "url": "assets/js/24.2429fdad.js",
    "revision": "d3384ff693473852b46e24de3917614c"
  },
  {
    "url": "assets/js/25.9940097c.js",
    "revision": "00fa3d8a67ef67de54f1ca7296d83c97"
  },
  {
    "url": "assets/js/26.853250b6.js",
    "revision": "f430f9c88657e69b17925edf04ec28af"
  },
  {
    "url": "assets/js/27.3da759f2.js",
    "revision": "f149dae8701e34d46d232432f2e9196e"
  },
  {
    "url": "assets/js/28.65c14443.js",
    "revision": "d0bb468c2057b56dff49a985dfa1b11d"
  },
  {
    "url": "assets/js/29.4d5842c8.js",
    "revision": "dce66aec3092247c904ca24f6240eac2"
  },
  {
    "url": "assets/js/3.6bba5f4c.js",
    "revision": "6d94231481f86aa271637addd4123b0e"
  },
  {
    "url": "assets/js/30.fe49ad46.js",
    "revision": "cd3f679f4216267a92d1cb6ae2c02c59"
  },
  {
    "url": "assets/js/31.1c57d363.js",
    "revision": "85e5c1f4dd4be67da60392d466541751"
  },
  {
    "url": "assets/js/32.16c72124.js",
    "revision": "95e81abbc992b8e42fa3df3150ca9ed1"
  },
  {
    "url": "assets/js/33.6ff1f794.js",
    "revision": "aa3d13ca6e0b07d672b94fa0ca144d19"
  },
  {
    "url": "assets/js/34.55e50da8.js",
    "revision": "be2564dc7408ac38edfa3b73b1d6ecef"
  },
  {
    "url": "assets/js/35.257b2d15.js",
    "revision": "7d837e9af9b010ca3c7f32a269365c71"
  },
  {
    "url": "assets/js/36.dcb4ee51.js",
    "revision": "9d6e31ff67b40ef193038c3daaf85642"
  },
  {
    "url": "assets/js/37.cb8211ae.js",
    "revision": "9892d32a5385b31b7302120efdc3be8e"
  },
  {
    "url": "assets/js/38.0ff3f1fc.js",
    "revision": "ff4bd08e2545ebaa5c526a568b70776b"
  },
  {
    "url": "assets/js/39.148bd895.js",
    "revision": "9351a7a13e2bb3bd8e01efac8dc3b823"
  },
  {
    "url": "assets/js/4.c4a7fb73.js",
    "revision": "35b98c9a35ab0f4941a0fe27e8372624"
  },
  {
    "url": "assets/js/40.5353d5ec.js",
    "revision": "fade641a6e06b562a041ee53942d073a"
  },
  {
    "url": "assets/js/41.1bb19868.js",
    "revision": "32297bd290f607ee452a25d3d5593913"
  },
  {
    "url": "assets/js/5.e69124ca.js",
    "revision": "5420e4e559ff4017c10b22754b8caeb0"
  },
  {
    "url": "assets/js/6.8b321392.js",
    "revision": "cbbd31ed7970a352fcde9a8f5c8e820c"
  },
  {
    "url": "assets/js/7.bd0cf2fe.js",
    "revision": "a1084b1e8d80c0e777a359e2560b9012"
  },
  {
    "url": "assets/js/8.779c4fb2.js",
    "revision": "ccb790f332a0388e6d5f6d0b7b046dd1"
  },
  {
    "url": "assets/js/9.a515aa62.js",
    "revision": "240d9ed955a45feca0e1cf9e6314e840"
  },
  {
    "url": "assets/js/app.1ca68c67.js",
    "revision": "e0e4765e8384718fe0a9da2701659c99"
  },
  {
    "url": "assets/js/vendors~docsearch.38a78678.js",
    "revision": "d484d8fe3dd84f364dd556407fc2a5b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "1833d23ec8ec469551923859320f4f31"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c7aff9360cb391ceece9f4cb401cdc0d"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0fd3be03b7d635fe5e04d9dcd430657e"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "7316170926046f835f4f7e90d7c80450"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "22c30791de9d72a455aae618040b6874"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fa82c6ce0866b4d9d649d0527dddb728"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "2aba6e76548c4337b6af87aa4a0eb04e"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "18f17551efe1df3d1c18bd7781e19265"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "72c3395a1d11ff91f5c9495237182afd"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "0f6423707f44cc09d7ca716d5b9346a1"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "d2714117d27a3461cac083e2be79994c"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7a9a788a25cdd736f6984d3505dca9cc"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a319fd4c45d2eb5ea8e1f12c08c94ce6"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "6c85aab5026b828f2d54649c87e8b1de"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "fc26207c01c113b877062501dced67c2"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "e6171ee399ac2d105cef5756ab4913df"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "13d9c4c19512d7f01225aedb07186443"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "7b97d5948c7213862a31f418077f2bc8"
  },
  {
    "url": "resources/books.html",
    "revision": "ee78015d95437fdce4790ec022d0ea4e"
  },
  {
    "url": "resources/community.html",
    "revision": "8d0e018ea8c1ff99edbaf92b2e740f70"
  },
  {
    "url": "resources/conferences.html",
    "revision": "421b46e39bce133853ad4fb3d569d1d9"
  },
  {
    "url": "resources/courses.html",
    "revision": "068a7dbb8771a267e695fad7d9108528"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "e4cd711a103b282ed4b4c692f9976df8"
  },
  {
    "url": "resources/examples.html",
    "revision": "30cce6d094d70a99241b949f6c564af5"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "35ad9571f44c0ad9e33de919737e344c"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "d8f9b8afbff9a90904acae99f44dcec7"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "0d36620c230d0e729de46530021a733c"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "9d2313d397ab1dc5b651c13e9fb582e3"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "2f810f38682002dc7878be6c5e35b2e8"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "6565fa018cc336912e5b8147463882d9"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "f81ba52d45a13ef7c98497df0370b816"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
