(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-reply/forum-reply"],{"003c":function(n,e,t){"use strict";var u;t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return u}));var r=function(){var n=this,e=n.$createElement;n._self._c},a=[]},"009c":function(n,e,t){"use strict";t.r(e);var u=t("4b3c"),r=t.n(u);for(var a in u)"default"!==a&&function(n){t.d(e,n,(function(){return u[n]}))}(a);e["default"]=r.a},"173d":function(n,e,t){},3766:function(n,e,t){"use strict";var u=t("173d"),r=t.n(u);r.a},"4b3c":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,u,r,a,o){try{var c=n[a](o),i=c.value}catch(s){return void t(s)}c.done?e(i):Promise.resolve(i).then(u,r)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(u,r){var o=n.apply(e,t);function c(n){a(o,u,r,c,i,"next",n)}function i(n){a(o,u,r,c,i,"throw",n)}c(void 0)}))}}var c={data:function(){return{pid:"",content:"",username:"",user:{}}},onLoad:function(e){var t=this;return o(u.default.mark((function r(){var a,o;return u.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return t.pid=e.pid,a=n.getStorageSync("nowTable"),u.next=4,t.$api.session(a);case 4:o=u.sent,t.user=o.data,"xuesheng"==a&&(t.username=t.user.xuehao),"suguan"==a&&(t.username=t.user.suguanzhanghao),"houqinrenyuan"==a&&(t.username=t.user.houqinzhanghao);case 9:case"end":return u.stop()}}),r)})))()},methods:{onReplyTap:function(){var n=this;return o(u.default.mark((function e(){return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$api.save("forum",{parentid:n.pid,content:n.content,username:n.username});case 2:n.$utils.msgBack("回复成功");case 3:case"end":return e.stop()}}),e)})))()}}};e.default=c}).call(this,t("543d")["default"])},7503:function(n,e,t){"use strict";t.r(e);var u=t("003c"),r=t("009c");for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);t("3766");var o,c=t("f0c5"),i=Object(c["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);e["default"]=i.exports},"8fa0":function(n,e,t){"use strict";(function(n){t("4a92");u(t("66fd"));var e=u(t("7503"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])}},[["8fa0","common/runtime","common/vendor"]]]);