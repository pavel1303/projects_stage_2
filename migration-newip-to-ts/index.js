(()=>{"use strict";var e={669:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n",""]);const i=o},501:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,".sources {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    max-height: 200px;\r\n    overflow: auto;\r\n    overflow-x: hidden;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.source__item {\r\n    width: fit-content;\r\n    background: none;\r\n    border: 2px solid #30c5ff;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: #70d6ff;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #3fcc59;\r\n    color: #69db7e;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n\r\n.sources__category {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.category__item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 5px;\r\n    width: 10%;\r\n    min-width: 100px;\r\n    height: 50px;\r\n    border: 2px solid #ff306e;\r\n    border-radius: 20px;\r\n    box-shadow: inset 0px 0px 30px #ff306e;\r\n    transition: all ease 0.5s;\r\n}\r\n.category__item:hover {\r\n    background-color: #ff306e;\r\n    transform: scale(1.1);\r\n}\r\n\r\n.category__item-name {\r\n    font-size: 16px;\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.category__title {\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n",""]);const i=o},767:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,"body {\r\n    color: #fff;\r\n    background: #17181c;\r\n    font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n    padding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 40px;\r\n    font-weight: 800;\r\n}\r\n\r\nfooter {\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nfooter .copyright {\r\n    font-size: 14px;\r\n    color: #333;\r\n    text-align: center;\r\n}\r\nfooter .copyright a {\r\n    color: #444;\r\n}\r\nfooter .copyright a:hover {\r\n    color: #555;\r\n}\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\n.container {\r\n    width: 98%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.hidden-source {\r\n    display: none;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 15px; /* ширина для вертикального скролла */\r\n    height: 8px; /* высота для горизонтального скролла */\r\n    background-color: #30c5ff;\r\n    border-radius: 10px;\r\n}\r\n\r\n/* ползунок скроллбара */\r\n::-webkit-scrollbar-thumb {\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    box-shadow: inset 0px 0px 5px #30c5ff; \r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background-color: #0c9928;\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);t&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),r.push(c))}},r}},379:(e,r,n)=>{var t,o=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}(),i=[];function s(e){for(var r=-1,n=0;n<i.length;n++)if(i[n].identifier===e){r=n;break}return r}function a(e,r){for(var n={},t=[],o=0;o<e.length;o++){var a=e[o],c=r.base?a[0]+r.base:a[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=s(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:h(f,r),references:1}),t.push(l)}return t}function c(e){var r=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=n.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(r);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(r)}return r}var d,l=(d=[],function(e,r){return d[e]=r,d.filter(Boolean).join("\n")});function u(e,r,n,t){var o=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),s=e.childNodes;s[r]&&e.removeChild(s[r]),s.length?e.insertBefore(i,s[r]):e.appendChild(i)}}function f(e,r,n){var t=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,m=0;function h(e,r){var n,t,o;if(r.singleton){var i=m++;n=p||(p=c(r)),t=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=c(r),t=f.bind(null,n,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var n=a(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var o=s(n[t]);i[o].references--}for(var c=a(e,r),d=0;d<n.length;d++){var l=s(n[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=c}}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return e[t](i,i.exports,n),i.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;!function(e){e[e.Unauthorized=401]="Unauthorized",e[e.NotFound=404]="NotFound"}(e||(e={}));var r=n(379),t=n.n(r),o=n(669);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var i=n(501);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;class s{constructor(){this.news=new class{draw(e){const r=e.length>=10?e.filter(((e,r)=>r<10)):e,n=document.createDocumentFragment(),t=document.querySelector("#newsItemTemp"),o=document.querySelector(".news");r.forEach(((e,r)=>{const{urlToImage:o,author:i,source:{name:s},publishedAt:a,title:c,description:d,url:l}=e,u=t.content.cloneNode(!0),f=u.querySelector(".news__meta-photo"),p=u.querySelector(".news__meta-author"),m=u.querySelector(".news__meta-date"),h=u.querySelector(".news__description-title"),_=u.querySelector(".news__description-source"),g=u.querySelector(".news__description-content"),w=u.querySelector(".news__read-more a");r%2&&u.querySelector(".news__item").classList.add("alt"),f.style.backgroundImage=`url(${o||"https://cdn-play.tv2i.dk/ab6b028c-72fc-43ac-8ead-e817e0df3f1b.png"})`,p.textContent=i||s,m.textContent=a.slice(0,10).split("-").reverse().join("-"),h.textContent=c,_.textContent=s,g.textContent=d,w.setAttribute("href",l),n.append(u)})),o.innerHTML="",o.appendChild(n)}},this.sources=new class{draw(e){const r=document.createDocumentFragment(),n=document.querySelector("#sourceItemTemp"),t=document.querySelector(".sources");e.forEach((e=>{const{name:t,id:o,category:i}=e,s=n.content.cloneNode(!0),a=s.querySelector(".source__item-name"),c=s.querySelector(".source__item");a.textContent=t,c.setAttribute("data-source-id",o),c.setAttribute("data-category",i),r.append(s)})),t.append(r)}drawCategory(e){const r=document.createDocumentFragment(),n=document.querySelector("#sourceCategory"),t=document.querySelector(".sources__category"),o=[];e.forEach((e=>{const{category:t}=e;if(!o.includes(t)){o.push(t);const e=n.content.cloneNode(!0),i=e.querySelector(".category__item");e.querySelector(".category__item-name").textContent=t,i.setAttribute("data-category",t),r.append(e)}})),t.append(r)}}}drawNews(e){const r=(null==e?void 0:e.articles)||[];this.news.draw(r)}drawSources(e){const r=(null==e?void 0:e.sources)||[];r.length>1&&(this.sources.draw(r),this.sources.drawCategory(r))}}var a=n(767);t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,(new class{constructor(){this.controller=new class extends class extends class{constructor(e,r){this.baseLink=e,this.options=r}getResp({endpoint:e,options:r={}},n=(()=>{console.error("No callback for GET response")})){this.load("GET",e,n,r)}errorHandler(r){if(!r.ok)throw r.status!==e.Unauthorized&&r.status!==e.NotFound||console.log(`Sorry, but there is ${r.status} error: ${r.statusText}`),Error(r.statusText);return r}makeUrl(e,r){const n=Object.assign(Object.assign({},this.options),e);let t=`${this.baseLink}${r}?`;return Object.keys(n).forEach((e=>{t+=`${e}=${n[e]}&`})),t.slice(0,-1)}load(e,r,n,t={}){fetch(this.makeUrl(t,r),{method:e}).then(this.errorHandler).then((e=>e.json())).then((e=>n(e))).catch((e=>console.error(e)))}}{constructor(){super("https://nodenews.herokuapp.com/",{apiKey:"34d3cd8c06d04e41b20b131cd6935ae0"})}}{getSources(e){super.getResp({endpoint:"sources"},e)}getNews(e,r){let n=e.target;const t=e.currentTarget;for(;n!==t;){if(n.classList.contains("source__item")){const e=n.getAttribute("data-source-id");return void(t.getAttribute("data-source")!==e&&e&&(t.setAttribute("data-source",e),super.getResp({endpoint:"everything",options:{sources:e}},r)))}n.parentNode&&(n=n.parentNode)}}},this.view=new s}start(){const e=document.querySelector(".sources");document.querySelector(".sources__category").addEventListener("click",(e=>this.sortCategory(e))),e.addEventListener("click",(e=>this.controller.getNews(e,(e=>this.view.drawNews(e))))),this.controller.getSources((e=>this.view.drawSources(e)))}sortCategory(e){let r=e.target;const n=e.currentTarget;for(;r!==n;){if(r.classList.contains("category__item")){const e=document.querySelectorAll(".source__item"),n=r.getAttribute("data-category");e.forEach((e=>{e.classList.remove("hidden-source")})),e.forEach((e=>{e.getAttribute("data-category")!==n&&e.classList.add("hidden-source")}))}r.parentNode&&(r=r.parentNode)}}}).start()})()})();