"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[124],{368:function(t,e,n){n.d(e,{O:function(){return c}});var r=n(689),u=n(87),a=n(184),c=function(t){var e=t.movies,n=(0,r.TH)();return(0,a.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.title;return(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{to:"/movies/".concat(e),state:{from:n},children:r})},e)}))})}},124:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(439),u=n(87),a=n(368),c=n(234),o=n(791),i=n(596),s=n(184),f=function(t){var e=t.onSubmitInput,n=(0,o.useState)(""),u=(0,r.Z)(n,2),a=u[0],c=u[1];return(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==a.trim()?(e(a),c("")):i.Am.error("Please write something!",{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"colored"})},children:[(0,s.jsx)("input",{type:"text",placeholder:"Search films",value:a,autoFocus:!0,onChange:function(t){var e=t.currentTarget.value;c(e)},autoComplete:"off"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})},p=function(){var t,e=(0,o.useState)([]),n=(0,r.Z)(e,2),i=n[0],p=n[1],l=(0,u.lr)(),v=(0,r.Z)(l,2),d=v[0],h=v[1],m=null!==(t=d.get("query"))&&void 0!==t?t:"";return(0,o.useEffect)((function(){if(m)try{(0,c.z1)(m).then((function(t){return p(t)}))}catch(t){console.log(t)}}),[m]),(0,s.jsxs)("div",{children:[(0,s.jsx)(f,{onSubmitInput:function(t){h(""!==t?{query:t}:{})}}),0===i.length&&""!==m&&(0,s.jsxs)("p",{children:["There is no movies matching your search: '",m,"'"]}),0!==i.length&&(0,s.jsx)(a.O,{movies:i})]})},l=function(){return(0,s.jsx)(p,{})}},234:function(t,e,n){n.d(e,{Hg:function(){return i},TP:function(){return f},tx:function(){return l},z1:function(){return s},zv:function(){return p}});var r=n(861),u=n(757),a=n.n(u),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="?api_key=158ad78a017acca92c1d8a0f66634ca7",i=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day".concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e).concat(o,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits").concat(o,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews").concat(o,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=124.ecd99522.chunk.js.map