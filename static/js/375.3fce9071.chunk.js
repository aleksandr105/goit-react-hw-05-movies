/*! For license information please see 375.3fce9071.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[375],{375:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return G}});var r,o,i,a,c,u,s,l,f,p=e(885),h=e(871),d=e(43),v=e(791),x=e(631),g=e(168),y=e(299),m=e(501),w=(0,y.Z)(m.rU)(r||(r=(0,g.Z)(["\n  color: white;\n  text-align: center;\n  display: block;\n  margin: 30px 0;\n  font-weight: 600;\n  background-color: blue;\n  border-radius: 5px;\n  padding: 8px 10px;\n  width: 110px;\n  :hover {\n    color: tomato;\n  }\n"]))),b=y.Z.h2(o||(o=(0,g.Z)(["\n  text-align: center;\n  margin-bottom: 30px;\n  font-size: 30px;\n  color: tomato;\n"]))),j=y.Z.div(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),_=y.Z.img(a||(a=(0,g.Z)(["\n  width: 350px;\n  border-radius: 10px;\n"]))),k=y.Z.ul(c||(c=(0,g.Z)(["\n  padding: 30px;\n  max-width: 500px;\n  li:not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]))),Z=y.Z.h3(u||(u=(0,g.Z)(["\n  margin-bottom: 10px;\n  color: tomato;\n"]))),L=y.Z.p(s||(s=(0,g.Z)(["\n  font-weight: 500;\n  color: black;\n"]))),E=y.Z.ul(l||(l=(0,g.Z)(["\n  display: flex;\n  padding: 25px 100px;\n  background-color: silver;\n  width: 350px;\n  border-radius: 10px;\n  margin-top: 15px;\n  li:not(:last-child) {\n    margin-right: 40px;\n  }\n"]))),S=(0,y.Z)(m.OL)(f||(f=(0,g.Z)(["\n  color: yellow;\n  padding: 15px 5px;\n  font-weight: 700;\n\n  &.active {\n    color: blue;\n  }\n"]))),O=e(184),G=function(){var t,n,e=(0,h.UO)().movieId,r=(0,v.useState)(null),o=(0,p.Z)(r,2),i=o[0],a=o[1],c=(0,h.TH)();(0,v.useEffect)((function(){(0,d.hG)(e).then((function(t){return a(t)}))}),[e]);var u=null!==(t=null===(n=c.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/";return(0,O.jsxs)(x.W2,{children:[(0,O.jsx)(w,{to:u,children:"To back"}),i&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(b,{children:i.original_title}),(0,O.jsxs)(j,{children:[(0,O.jsx)(_,{loading:"lazy",src:i.poster_path?"https://image.tmdb.org/t/p/original".concat(i.poster_path):"https://wide-w.com/wp-content/uploads/2018/11/gerb-i-flag-ukrainy-1-1536x1024.jpg",alt:i.original_title}),(0,O.jsxs)(k,{children:[(0,O.jsxs)("li",{children:[(0,O.jsx)(Z,{children:"Overview:"}),(0,O.jsx)(L,{children:i.overview})]}),(0,O.jsxs)("li",{children:[(0,O.jsx)(Z,{children:"Release date:"}),(0,O.jsx)(L,{children:i.release_date})]}),(0,O.jsxs)("li",{children:[(0,O.jsx)(Z,{children:"Vote average:"}),(0,O.jsx)(L,{children:i.vote_average})]})]})]})]}),(0,O.jsxs)(E,{children:[(0,O.jsx)("li",{children:(0,O.jsx)(S,{to:"cast",state:{from:u},children:"Cast"})}),(0,O.jsx)("li",{children:(0,O.jsx)(S,{to:"reviews",state:{from:u},children:"Reviews"})})]}),(0,O.jsx)(v.Suspense,{fallback:(0,O.jsx)("div",{children:"Loading..."}),children:(0,O.jsx)(h.j3,{})})]})}},631:function(t,n,e){"use strict";e.d(n,{Dx:function(){return u},W2:function(){return l},eW:function(){return s}});var r,o,i,a=e(168),c=e(299),u=c.Z.h1(r||(r=(0,a.Z)(["\n  text-align: center;\n  padding: 30px 0px;\n  color: #4d4d4c;\n"]))),s=c.Z.ul(o||(o=(0,a.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-bottom: 50px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),l=c.Z.div(i||(i=(0,a.Z)(["\n  max-width: 1170px;\n  padding: 0 15px;\n  margin: 0 auto;\n"])))},43:function(t,n,e){"use strict";e.d(n,{Cm:function(){return p},hG:function(){return l},jf:function(){return f},wW:function(){return u},z1:function(){return s}});var r=e(861),o=e(687),i=e.n(o),a="https://api.themoviedb.org",c="fd1285083725fb4593534aa358f84334",u=function(){var t=(0,r.Z)(i().mark((function t(){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/3/trending/movie/day?api_key=").concat(c));case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/3/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/3/movie/").concat(n,"?api_key=").concat(c,"&language=en-US"));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/3/movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/3/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},61:function(t,n,e){var r=e(698).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var n={},e=Object.prototype,i=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(O){l=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof d?n:d,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=p(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(O){return{type:"throw",arg:O}}}n.wrap=f;var h={};function d(){}function v(){}function x(){}var g={};l(g,c,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(E([])));m&&m!==e&&i.call(m,c)&&(g=m);var w=x.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function j(t,n){function e(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;this._invoke=function(t,r){function i(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(i,i):i()}}function _(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,_(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=p(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,h;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function k(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function Z(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(i.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=x,l(w,"constructor",x),l(x,"constructor",v),v.displayName=l(x,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}},b(j.prototype),l(j.prototype,u,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new j(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,s,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;Z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:function(t){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},687:function(t,n,e){var r=e(61)();t.exports=r;try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},861:function(t,n,e){"use strict";function r(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var a=t.apply(n,e);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.d(n,{Z:function(){return o}})}}]);
//# sourceMappingURL=375.3fce9071.chunk.js.map