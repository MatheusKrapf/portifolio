if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise(async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()})),i.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},i=(i,s)=>{Promise.all(i.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(i)};self.define=(i,a,c)=>{s[i]||(s[i]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+i.slice(1)};return Promise.all(a.map(i=>{switch(i){case"exports":return s;case"module":return r;default:return e(i)}})).then(e=>{const i=c(...e);return s.default||(s.default=i),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.9ab6fb30ca450bb78c2e.js",revision:"94f8941d538a3879f56393e0da87680e"},{url:"/_next/static/chunks/commons.8dd95e2c8a426fce4243.js",revision:"9074df1a5e6a5470908dd78394f6693a"},{url:"/_next/static/chunks/ea88be26.e13f33d22eb2b845d2a5.js",revision:"fc1b8a39bd7612f7baaac6749abfdc40"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.c090881ce9beea3b976a.js",revision:"8fb05c7b571768eb36de70ddace666c1"},{url:"/_next/static/chunks/framework.9707fddd9ae5927c17c3.js",revision:"493773db7ca4f531e862834fccf9d157"},{url:"/_next/static/chunks/main-0e719b06a335935dc77a.js",revision:"a1c46503ce34dc606c2b3d6296f40228"},{url:"/_next/static/chunks/pages/_app-c3948f0acf182d161b1f.js",revision:"c6842fc40381966339ae571e84353bef"},{url:"/_next/static/chunks/pages/_error-3534b0ffba4db0d838cd.js",revision:"5209d54e147c1832583e65eec27d7f24"},{url:"/_next/static/chunks/pages/index-e15438ceb5d50d15ede5.js",revision:"29fd4e98b3e9a8af5fafcb7b5a647fc1"},{url:"/_next/static/chunks/polyfills-81831f39f624bb56f97c.js",revision:"8f72e8f22b0f4dfa7714f426a44f2c30"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/gF7xy2nZ_gRTqVaC4tZP3/_buildManifest.js",revision:"efab8d2226a1d533711bfb6322047cf8"},{url:"/_next/static/gF7xy2nZ_gRTqVaC4tZP3/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/img/about/foto.png",revision:"ad0fdbbd17124209b09854d2d0a5816d"},{url:"/img/contact/email.svg",revision:"80b9a7c2e284f51e13c6a523127ccb72"},{url:"/img/contact/email2.svg",revision:"c66ee6f637138ab9d58d2e17d58c0aa7"},{url:"/img/contact/github-original-wordmark.svg",revision:"6fef2dc1709a2dc76ce1ec5dad2e73bd"},{url:"/img/contact/github-original.svg",revision:"4b8a4845e3c03b05cc92e2b3199889d5"},{url:"/img/contact/iconmonstr-coffee-20.svg",revision:"eb3e0317394b7c4678d5affcb40ad904"},{url:"/img/contact/iconmonstr-coffee-7.svg",revision:"2acf02f0881ce5e40a43a12f9837ca16"},{url:"/img/contact/linkedin-original.svg",revision:"15b4281ebd93cc246c81200bc3c1fd94"},{url:"/img/contact/linkedin-plain.svg",revision:"78c2e4ea192c45118bf3ef6a73c00ea1"},{url:"/img/contact/rainbow-cat-remix.json",revision:"7ac4288bfedd8d5db9cfc5b0fb1bc5fb"},{url:"/img/contact/whatsapp.svg",revision:"c45df616ed13f1df0839e87c3704555d"},{url:"/img/hero-illustration.svg",revision:"9fccf4491e7a96c5d0e3b4a7851e04a5"},{url:"/img/hero/Vector.png",revision:"3e1f335375a3196e11a50fcf9d152b7f"},{url:"/img/icon-site.png",revision:"2c2d6c5957f057339dea81203ded861d"},{url:"/img/logo-gh.svg",revision:"23a2363ecf2979b48ec506aca545b574"},{url:"/img/logo.svg",revision:"dd1d47fda1d52219e1b9b0556f3f24e6"},{url:"/img/portfolio/logo-rafaela.svg",revision:"0d65deaf244e52f4a25f7665a30a9f42"},{url:"/img/portfolio/siteNetflix.png",revision:"a5d7a82ab6b026a96cbc380c6bad482f"},{url:"/img/portfolio/siteRafaela.png",revision:"494dc67e045dcc5f1fd3bd0fef658bfb"},{url:"/img/portfolio/siteTomeSorte.png",revision:"a5d0f940af814c11bf152f6b32d055a3"},{url:"/img/skills/css3-plain.svg",revision:"7c6a6b602f10297741009c4a4ede317c"},{url:"/img/skills/git-plain.svg",revision:"2c592fa0585ec59189473375420be20e"},{url:"/img/skills/html5-original.svg",revision:"16d07e8682a531f3bc1e9fb01bd59740"},{url:"/img/skills/html5-plain.svg",revision:"377e176bd0afd4e02e2d71ca580c56db"},{url:"/img/skills/javascript-plain.svg",revision:"b3901c8e8919e5151ed229af648420cd"},{url:"/img/skills/react-original.svg",revision:"4f81f37c8c72270f6c343b8814c10ea8"},{url:"/img/skills/sass-original.svg",revision:"73682a7d388de609573d1df94de83b8b"},{url:"/img/skills/typescript-plain.svg",revision:"e7ef5555cb9dc676ebeb3972cd8db3cf"},{url:"/img/skills/yarn-original.svg",revision:"3a8f697d78da478246c65d1a755c311b"},{url:"/manifest.json",revision:"42c60adf0b47a0d56a16b51ed22bc954"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
