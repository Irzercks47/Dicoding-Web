!function(t){function n(n){for(var e,o,i=n[0],a=n[1],c=0,s=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);for(l&&l(n);s.length;)s.shift()()}var e={},r={0:0};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var n=[],e=r[t];if(0!==e)if(e)n.push(e[2]);else{var i=new Promise((function(n,o){e=r[t]=[n,o]}));n.push(e[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(t){return o.p+""+t+".bundle.js"}(t);var l=new Error;a=function(n){c.onerror=c.onload=null,clearTimeout(s);var e=r[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,e[1](l)}r[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},o.m=t,o.c=e,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var l=a;o(o.s=0)}([function(t,n,e){"use strict";e.r(n);e(1),e(3);var r=document.getElementsByClassName("toggle-button")[0],o=document.getElementsByClassName("nav-links")[0];r.addEventListener("click",(function(){o.classList.toggle("active")})),document.querySelector("main").addEventListener("click",(function(){o.classList.remove("active")})),e.e(1).then(e.t.bind(null,7,3)).then((function(t){var n=t.default;console.log(n);var e=n.restaurants,r="";e.forEach((function(t){r+='\n        <div class="list_item">\n            <img class="list_item_thumb" src="'.concat(t.pictureId,'" alt="').concat(t.name,'">\n            <div class="city">').concat(t.city,'</div>\n            <div class="list_item_content">\n                <p class="list_item_rating">\n                    Rating : \n                    <p class="list_item_rating_value">').concat(t.rating,'</p>\n                </p>\n                <h1 class="list_item_title"><a href="#">').concat(t.name,'</a></h1>\n                <div class="list_item_desc">').concat(t.description.slice(0,120),"...</div>\n            </div>\n        </div>\n        ")})),document.querySelector("#restaurantlist").innerHTML=r}))},function(t,n,e){(function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var e=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function s(t,n,e,r){var o=n&&n.prototype instanceof p?n:p,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=w(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var l=u(t,n,e);if("normal"===l.type){if(r=e.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r="completed",e.method="throw",e.arg=l.arg)}}}(t,e,a),i}function u(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function p(){}function d(){}function h(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(j([])));v&&v!==e&&r.call(v,i)&&(m=v);var y=h.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function x(t,e){var o;this._invoke=function(i,a){function c(){return new e((function(o,c){!function o(i,a,c,l){var s=u(t[i],t,a);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===n(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,c,l)}),(function(t){o("throw",t,c,l)})):e.resolve(p).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,l)}))}l(s.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function w(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,w(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=u(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function j(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=h,l(y,"constructor",h),l(h,"constructor",d),d.displayName=l(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new x(s(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(y),l(y,c,"Generator"),l(y,i,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:j(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}("object"===n(t)?t.exports:{});try{regeneratorRuntime=e}catch(t){"object"===("undefined"==typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}).call(this,e(2)(t))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n,e){var r=e(4),o=e(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,n,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function c(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function l(t,n){for(var e={},r=[],o=0;o<t.length;o++){var i=t[o],l=n.base?i[0]+n.base:i[0],s=e[l]||0,u="".concat(l," ").concat(s);e[l]=s+1;var f=c(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:u,updater:g(p,n),references:1}),r.push(u)}return r}function s(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,f=(u=[],function(t,n){return u[t]=n,u.filter(Boolean).join("\n")});function p(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function d(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(t,n){var e,r,o;if(n.singleton){var i=m++;e=h||(h=s(n)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=s(n),r=d.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=l(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=l(t,n),s=0;s<e.length;s++){var u=c(e[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=i}}}},function(t,n,e){(n=e(6)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Gelasio&family=Merriweather+Sans:ital,wght@1,300&family=Merriweather:wght@900&family=Open+Sans+Condensed:wght@300&family=Oswald:wght@300&family=Playfair+Display:ital@0;1&family=Poppins:wght@300;400&family=Roboto+Slab:wght@300;600&family=Rubik:wght@500&family=Titillium+Web:ital,wght@0,200;0,300;1,200&display=swap);"]),n.push([t.i,"* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: 'Gelasio', serif;\n}\n\n/* Navbar */\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #446A46;\n    color: white;\n}\n\n.nav-tittle {\n    padding-left: 6rem;\n    font-size: 1.8em;\n    margin: .5rem;\n}\n\n.nav-links {\n    padding-right: 6rem;\n}\n.nav-links ul {\n    margin: 0;\n    padding: 0;\n    display: flex;\n}\n\n.nav-links li {\n    list-style: none;\n}\n\n.nav-links li a {\n    text-decoration: none;\n    color: white;\n    padding: 1rem;\n    display: block;\n}\n\n.nav-links li:hover {\n    background-color: #82A284;\n}\n\n.toggle-button {\n    position: absolute;\n    top: .75rem;\n    right: 1rem;\n    display: none;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 30px;\n    height: 21px;\n}\n\n.toggle-button .bar {\n    height: 3px;\n    width: 100%;\n    background-color: white;\n    border-radius: 10px;\n}\n\n/* Hero */\n.hero {\n\tdisplay: flex;\n\talign-items: center;\n\tmin-height: 600px;\n\twidth: 100%;\n\ttext-align: center;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n}\n.body {\n\tmargin: 0 auto;\n\tmax-width: 800px;\n}\n.title {\n\tcolor: #fff;\n\tfont-weight: 600;\n\tfont-size: 36px;\n\ttext-shadow: 1px 1px #141414;\n}\n.text {\n\tcolor: #fff;\n\tmargin-top: 16px;\n\tfont-size: 18px;\n\tfont-weight: 600;\n\ttext-shadow: 1px 1px #141414;\n}\n\n/* Content */\n.content {\n\tpadding: 3px;\n}\n\n.latest {\n\twidth: 100%;\n\tmargin-top: 30px;\n\tmargin-bottom: 50px;\n\ttext-align: center;\n}\n\n.latest h1 {\n\tfont-weight: 700;\n\tfont-size: 2em;\n\tmargin-bottom: 50px;\n}\n\n.restaurantlist {\n\tmargin: 32px auto auto;\n\ttext-align: left;\n\tdisplay: grid;\n\tgrid-row-gap: 16px;\n}\n\n.list_item {\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\twidth: 100%;\n\tborder-radius: 10px;\n\toverflow: hidden;\n\tposition: relative;\n}\n\n.city {\n\tposition: absolute;\n\ttop: 10rem;\n\tleft: 16px;\n\tborder-radius: 5px;\n\tbackground-color: #446A46;\n\tpadding: 5px 10px 5px;\n\tcolor: white;\n\tfont-weight: 500;\n}\n.list_item_content {\n\tpadding: 16px;\n}\n\n.list_item_thumb {\n\twidth: 100%;\n\tmax-height: 200px;\n}\n\n.list_item_rating {\n\tfont-size: 17px;\n\ttext-transform: uppercase;\n\tcolor: #999;\n\tfont-weight: 500;\n\tfont-weight: bold;\n\n}\n\n.list_item_rating_value {\n\tcolor: #82A284;\n\ttext-decoration: none;\n    font-weight: 800;\n}\n\n.list_item_title {\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tmargin-top: 10px;\n\ttransition: 0.3s opacity;\n}\n\n.list_item:hover {\n\tcolor: #5F7161;\n\ttransform: translateY(-5px);\n}\n\n.list_item_title a {\n\ttext-decoration: none;\n\tcolor: inherit;\n}\n\n.list_item_desc {\n\tmargin-top: -30px;\n\tfont-size: 12px;\n\tline-height: 1.5em;\n}\n\n/* footer */\nfooter {\n\tbackground-color: #446A46;\n\tcolor: white;\n\tfont-size: 25px;\n\tpadding: 10px;\n\twidth: 100%;\n\ttext-align: center;\n}\n\n.skip-link {\n\tposition: absolute;\n\ttop: -100px;\n\tleft: 0;\n\tbackground-color: #82A284;\n\tcolor: white;\n\tpadding: 10px;\n\tfont-size: 20px;\n\tz-index: 100;\n\ttext-decoration: none;\n}\n\n.skip-link:focus {\n\ttop: 0;\n}\n\n/* Responsive */\n@media (max-width: 600px) {\n    .toggle-button {\n        display: flex;\n    }\n\n    .nav-tittle {\n        padding-left: 0;\n    }\n\n    .nav-links {\n        display: none;\n        width: 100%;\n    }\n\n    .navbar {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n\n    .nav-links ul {\n        width: 100%;\n        flex-direction: column;\n    }\n\n    .nav-links li {\n        text-align: center;\n    }\n\n    .nav-links li a {\n        padding: .5rem 1rem;\n    }\n\n    .nav-links.active {\n        display: flex;\n    }\n}\n\n@media screen and (min-width: 700px) {\n\t.restaurantlist {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-column-gap: 10px;\n\t\tgrid-row-gap: 16px;\n\t}\n}\n@media screen and (min-width: 1000px) {\n\t.restaurantlist {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1.5fr);\n\t}\n}\n@media screen and (min-width: 1200px) {\n\tmain {\n\t\tpadding:0 100px;\n\t}\n\n\t.restaurantlist {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(4, 1.5fr);\n\t\tgrid-column-gap: 50px;\n\t\tgrid-row-gap: 16px;\n\t}\n}",""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,l;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);r&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}}]);