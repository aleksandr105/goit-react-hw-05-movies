/*! For license information please see 151.0f32a4a6.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[151],{21:function(t,n,r){"use strict";r.d(n,{Cd:function(){return m},Dx:function(){return p},K_:function(){return y},PP:function(){return g},W2:function(){return d},dh:function(){return v},ds:function(){return h}});var e,o,i,a,c,u,s,f=r(168),l=r(299),p=l.Z.h2(e||(e=(0,f.Z)(["\n  text-align: center;\n  margin: 25px 0px;\n  color: tomato;\n  font-weight: 700;\n"]))),h=l.Z.ul(o||(o=(0,f.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-bottom: 50px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),d=l.Z.div(i||(i=(0,f.Z)(["\n  max-width: 1170px;\n  padding: 0 15px;\n  margin: 0 auto;\n"]))),v=l.Z.li(a||(a=(0,f.Z)(["\n  border-radius: 4px;\n  overflow: hidden;\n  background-color: #b7b7b7;\n"]))),y=l.Z.img(c||(c=(0,f.Z)(["\n  width: 100%;\n  min-height: 550px;\n  object-fit: cover;\n"]))),g=l.Z.div(u||(u=(0,f.Z)(["\n  padding: 20px;\n  background-color: #b7b7b7;\n  text-align: center;\n"]))),m=l.Z.p(s||(s=(0,f.Z)(["\n  color: black;\n  font-weight: 700;\n  font-size: 20px;\n"])))},455:function(t,n,r){"use strict";r.d(n,{GI:function(){return p},aD:function(){return f},jK:function(){return l},v_:function(){return h},x:function(){return d}});var e,o,i,a,c,u=r(168),s=r(299),f=s.Z.h3(e||(e=(0,u.Z)(["\n  text-align: center;\n  padding-bottom: 70px;\n  font-size: 25px;\n"]))),l=s.Z.ul(o||(o=(0,u.Z)(["\n  padding-bottom: 80px;\n  li:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),p=s.Z.li(i||(i=(0,u.Z)(["\n  background-color: silver;\n  border-radius: 10px;\n  padding: 20px;\n"]))),h=s.Z.h3(a||(a=(0,u.Z)(["\n  margin-bottom: 10px;\n  color: tomato;\n"]))),d=s.Z.p(c||(c=(0,u.Z)(["\n  color: black;\n  font-weight: 600;\n"])))},43:function(t,n,r){"use strict";r.d(n,{Cm:function(){return p},hG:function(){return f},jf:function(){return l},wW:function(){return u},z1:function(){return s}});var e=r(861),o=r(687),i=r.n(o),a="https://api.themoviedb.org",c="fd1285083725fb4593534aa358f84334",u=function(){var t=(0,e.Z)(i().mark((function t(){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/3/trending/movie/day?api_key=").concat(c));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/3/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return r=t.sent,t.next=5,r.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/3/movie/").concat(n,"?api_key=").concat(c,"&language=en-US"));case 2:return r=t.sent,t.next=5,r.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/3/movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return r=t.sent,t.next=5,r.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/3/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return r=t.sent,t.next=5,r.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},61:function(t,n,r){var e=r(698).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var n={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{f({},"")}catch(O){f=function(t,n,r){return t[n]=r}}function l(t,n,r,e){var o=n&&n.prototype instanceof d?n:d,i=Object.create(o.prototype),a=new E(e||[]);return i._invoke=function(t,n,r){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=Z(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===e)throw e="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e="executing";var u=p(t,n,r);if("normal"===u.type){if(e=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(e="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function p(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(O){return{type:"throw",arg:O}}}n.wrap=l;var h={};function d(){}function v(){}function y(){}var g={};f(g,c,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(j([])));x&&x!==r&&i.call(x,c)&&(g=x);var w=y.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(n){f(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function r(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==e(l)&&i.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;this._invoke=function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}}function Z(t,n){var r=t.iterator[n.method];if(void 0===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,Z(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var e=p(r,t.iterator,n.arg);if("throw"===e.type)return n.method="throw",n.arg=e.arg,n.delegate=null,h;var o=e.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function k(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,e=function n(){for(;++r<t.length;)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return e.next=e}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=y,f(w,"constructor",y),f(y,"constructor",v),v.displayName=f(y,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}},b(_.prototype),f(_.prototype,u,(function(){return this})),n.AsyncIterator=_,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new _(l(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),f(w,s,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},n.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,e){return a.type="throw",a.arg=t,n.next=r,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&i.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:function(t){function n(r){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,n(r)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},687:function(t,n,r){var e=r(61)();t.exports=e;try{regeneratorRuntime=e}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},861:function(t,n,r){"use strict";function e(t,n,r,e,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?n(u):Promise.resolve(u).then(e,o)}function o(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(n,{Z:function(){return o}})}}]);
//# sourceMappingURL=151.0f32a4a6.chunk.js.map