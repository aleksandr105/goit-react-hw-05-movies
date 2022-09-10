"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[880],{978:function(n,t,e){e.d(t,{u:function(){return g}});var r,a,o,i,c=e(501),u=e(871),s=e(168),p=e(299),l=p.Z.li(r||(r=(0,s.Z)(["\n  :hover {\n    transform: scale(1.03);\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: zoom-in;\n  }\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  background-color: #b7b7b7;\n"]))),d=p.Z.img(a||(a=(0,s.Z)(["\n  width: 100%;\n  min-height: 550px;\n  object-fit: cover;\n"]))),f=p.Z.div(o||(o=(0,s.Z)(["\n  padding: 20px;\n  background-color: #b7b7b7;\n  text-align: center;\n"]))),x=p.Z.p(i||(i=(0,s.Z)(["\n  color: black;\n  font-weight: 700;\n  font-size: 20px;\n"]))),h=e(184),g=function(n){var t=n.original_title,e=n.poster_path,r=n.id,a=n.url,o="https://image.tmdb.org/t/p/original".concat(e),i=(0,u.TH)();return(0,h.jsx)(l,{children:(0,h.jsxs)(c.rU,{to:a?"".concat(a).concat(r):"".concat(r),state:{from:i},children:[(0,h.jsx)(d,{loading:"lazy",src:e?o:"https://wide-w.com/wp-content/uploads/2018/11/gerb-i-flag-ukrainy-1-1536x1024.jpg",alt:t}),(0,h.jsx)(f,{children:(0,h.jsx)(x,{children:t})})]})})}},631:function(n,t,e){e.d(t,{Dx:function(){return u},W2:function(){return p},eW:function(){return s}});var r,a,o,i=e(168),c=e(299),u=c.Z.h1(r||(r=(0,i.Z)(["\n  text-align: center;\n  padding: 30px 0px;\n  color: #4d4d4c;\n"]))),s=c.Z.ul(a||(a=(0,i.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-bottom: 50px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),p=c.Z.div(o||(o=(0,i.Z)(["\n  max-width: 1170px;\n  padding: 0 15px;\n  margin: 0 auto;\n"])))},880:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,o,i=e(885),c=e(705),u=e(0),s=e(168),p=e(299),l=(0,p.Z)(c.l0)(r||(r=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 420px;\n  height: 45px;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 2px solid black;\n  overflow: hidden;\n  margin: 30px auto 50px auto;\n"]))),d=p.Z.button(a||(a=(0,s.Z)(["\n  display: inline-block;\n  background-color: silver;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),f=(0,p.Z)(c.gN)(o||(o=(0,s.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),x=e(184),h={searchData:""},g=function(n){var t=n.onSearch;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c.J9,{initialValues:h,onSubmit:t,children:(0,x.jsxs)(l,{children:[(0,x.jsx)(d,{type:"submit",children:(0,x.jsx)(u.Vph,{style:{width:"25px",height:"25px"}})}),(0,x.jsx)(f,{name:"searchData",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,x.jsx)(c.Bc,{name:"searchData"})]})})})},m=e(791),b=e(43),v=e(978),w=e(501),k=e(631),y=function(){var n=(0,m.useState)(null),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,m.useState)(null),o=(0,i.Z)(a,2),c=o[0],u=o[1],s=(0,w.lr)(),p=(0,i.Z)(s,2),l=p[0],d=p[1];return(0,m.useEffect)((function(){(e||l.get("movieName"))&&(0,b.z1)(null!==e&&void 0!==e?e:l.get("movieName")).then((function(n){return 0===n.total_results?alert("no movie was found by request ".concat(e)):u(n.results)}))}),[e,l]),(0,x.jsxs)(k.W2,{children:[(0,x.jsx)(g,{onSearch:function(n,t){var e=n.searchData,a=t.resetForm;""!==e.trim()?(r(e),d({movieName:e}),a()):alert("Please enter a query keyword")}}),c&&(0,x.jsx)(k.eW,{children:c.map((function(n){var t=n.id,e=n.original_title,r=n.poster_path;return(0,x.jsx)(v.u,{id:t,original_title:e,poster_path:r},t)}))})]})}},43:function(n,t,e){e.d(t,{Cm:function(){return d},hG:function(){return p},jf:function(){return l},wW:function(){return u},z1:function(){return s}});var r=e(861),a=e(687),o=e.n(a),i="https://api.themoviedb.org",c="fd1285083725fb4593534aa358f84334",u=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/3/trending/movie/day?api_key=").concat(c));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/3/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/3/movie/").concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/3/movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/3/movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=880.b6232780.chunk.js.map