(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xueshengbaoxiu/add-or-update"],{"070b":function(e,n,a){},"50da":function(e,n,a){"use strict";a.r(n);var u=a("7411"),r=a("eff5");for(var t in r)"default"!==t&&function(e){a.d(n,e,(function(){return r[e]}))}(t);a("937e");var i,o=a("f0c5"),s=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"fabba4d2",null,!1,u["a"],i);n["default"]=s.exports},6693:function(e,n,a){"use strict";(function(e){a("4a92");u(a("66fd"));var n=u(a("50da"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},7411:function(e,n,a){"use strict";var u;a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return t})),a.d(n,"a",(function(){return u}));var r=function(){var e=this,n=e.$createElement;e._self._c},t=[]},"937e":function(e,n,a){"use strict";var u=a("070b"),r=a.n(u);r.a},eff5:function(e,n,a){"use strict";a.r(n);var u=a("f0de"),r=a.n(u);for(var t in u)"default"!==t&&function(e){a.d(n,e,(function(){return u[e]}))}(t);n["default"]=r.a},f0de:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(a("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function t(e,n,a,u,r,t,i){try{var o=e[t](i),s=o.value}catch(c){return void a(c)}o.done?n(s):Promise.resolve(s).then(u,r)}function i(e){return function(){var n=this,a=arguments;return new Promise((function(u,r){var i=e.apply(n,a);function o(e){t(i,u,r,o,s,"next",e)}function s(e){t(i,u,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("5eea"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{baoxiubianhao:this.getUUID(),baoxiumingcheng:"",guzhangtupian:"",wentijianshu:"",baoxiuriqi:"",xuehao:"",xingming:"",shouji:"",sushehao:"",suguanzhanghao:"",suguanxingming:"",sfsh:"",shhf:"",userid:""},suguanzhanghaoOptions:[],suguanzhanghaoIndex:0,user:{},ro:{baoxiubianhao:!1,baoxiumingcheng:!1,guzhangtupian:!1,wentijianshu:!1,baoxiuriqi:!1,xuehao:!1,xingming:!1,shouji:!1,sushehao:!1,suguanzhanghao:!1,suguanxingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return i(u.default.mark((function r(){var t,i,o,s;return u.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.ruleForm.baoxiuriqi=a.$utils.getCurDate(),t=e.getStorageSync("nowTable"),r.next=4,a.$api.session(t);case 4:return i=r.sent,a.user=i.data,a.ruleForm.xuehao=a.user.xuehao,a.ro.xuehao=!0,a.ruleForm.xingming=a.user.xingming,a.ro.xingming=!0,a.ruleForm.shouji=a.user.shouji,a.ro.shouji=!0,a.ruleForm.sushehao=a.user.sushehao,a.ro.sushehao=!0,a.ruleForm.suguanzhanghao=a.user.suguanzhanghao,a.ro.suguanzhanghao=!0,a.ruleForm.suguanxingming=a.user.suguanxingming,a.ro.suguanxingming=!0,r.next=20,a.$api.option("suguan","suguanzhanghao",{});case 20:if(i=r.sent,a.suguanzhanghaoOptions=i.data,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=30;break}return a.ruleForm.id=n.id,r.next=28,a.$api.info("xueshengbaoxiu",a.ruleForm.id);case 28:i=r.sent,a.ruleForm=i.data;case 30:if(a.cross=n.cross,!n.cross){r.next=86;break}o=e.getStorageSync("crossObj"),r.t0=u.default.keys(o);case 34:if((r.t1=r.t0()).done){r.next=86;break}if(s=r.t1.value,"baoxiubianhao"!=s){r.next=40;break}return a.ruleForm.baoxiubianhao=o[s],a.ro.baoxiubianhao=!0,r.abrupt("continue",34);case 40:if("baoxiumingcheng"!=s){r.next=44;break}return a.ruleForm.baoxiumingcheng=o[s],a.ro.baoxiumingcheng=!0,r.abrupt("continue",34);case 44:if("guzhangtupian"!=s){r.next=48;break}return a.ruleForm.guzhangtupian=o[s],a.ro.guzhangtupian=!0,r.abrupt("continue",34);case 48:if("wentijianshu"!=s){r.next=52;break}return a.ruleForm.wentijianshu=o[s],a.ro.wentijianshu=!0,r.abrupt("continue",34);case 52:if("baoxiuriqi"!=s){r.next=56;break}return a.ruleForm.baoxiuriqi=o[s],a.ro.baoxiuriqi=!0,r.abrupt("continue",34);case 56:if("xuehao"!=s){r.next=60;break}return a.ruleForm.xuehao=o[s],a.ro.xuehao=!0,r.abrupt("continue",34);case 60:if("xingming"!=s){r.next=64;break}return a.ruleForm.xingming=o[s],a.ro.xingming=!0,r.abrupt("continue",34);case 64:if("shouji"!=s){r.next=68;break}return a.ruleForm.shouji=o[s],a.ro.shouji=!0,r.abrupt("continue",34);case 68:if("sushehao"!=s){r.next=72;break}return a.ruleForm.sushehao=o[s],a.ro.sushehao=!0,r.abrupt("continue",34);case 72:if("suguanzhanghao"!=s){r.next=76;break}return a.ruleForm.suguanzhanghao=o[s],a.ro.suguanzhanghao=!0,r.abrupt("continue",34);case 76:if("suguanxingming"!=s){r.next=80;break}return a.ruleForm.suguanxingming=o[s],a.ro.suguanxingming=!0,r.abrupt("continue",34);case 80:if("userid"!=s){r.next=84;break}return a.ruleForm.userid=o[s],a.ro.userid=!0,r.abrupt("continue",34);case 84:r.next=34;break;case 86:a.styleChange();case 87:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},suguanzhanghaoChange:function(e){var n=this;return i(u.default.mark((function a(){var r;return u.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.suguanzhanghaoIndex=e.target.value,n.ruleForm.suguanzhanghao=n.suguanzhanghaoOptions[n.suguanzhanghaoIndex],a.next=4,n.$api.follow("suguan","suguanzhanghao",{columnValue:n.ruleForm.suguanzhanghao});case 4:r=a.sent,r.data.suguanxingming&&(n.ruleForm.suguanxingming=r.data.suguanxingming);case 6:case"end":return a.stop()}}),a)})))()},baoxiuriqiChange:function(e){this.ruleForm.baoxiuriqi=e.target.value,this.$forceUpdate()},guzhangtupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.guzhangtupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(u.default.mark((function a(){var r,t,i,o,s,c,g,h,l,f;return u.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.ruleForm.baoxiumingcheng){a.next=3;break}return n.$utils.msg("报修名称不能为空"),a.abrupt("return");case 3:if(!n.cross){a.next=19;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){a.next=19;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){a.next=15;break}for(g in c)g==o&&(c[g]=s);return h=e.getStorageSync("crossTable"),a.next=13,n.$api.update("".concat(h),c);case 13:a.next=19;break;case 15:r=Number(e.getStorageSync("userid")),t=c["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 19:if(!t||!r){a.next=41;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=t,l={page:1,limit:10,crossuserid:r,crossrefid:t},a.next=25,n.$api.list("xueshengbaoxiu",l);case 25:if(f=a.sent,!(f.data.total>=i)){a.next=31;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 31:if(!n.ruleForm.id){a.next=36;break}return a.next=34,n.$api.update("xueshengbaoxiu",n.ruleForm);case 34:a.next=38;break;case 36:return a.next=38,n.$api.add("xueshengbaoxiu",n.ruleForm);case 38:n.$utils.msgBack("提交成功");case 39:a.next=49;break;case 41:if(!n.ruleForm.id){a.next=46;break}return a.next=44,n.$api.update("xueshengbaoxiu",n.ruleForm);case 44:a.next=48;break;case 46:return a.next=48,n.$api.add("xueshengbaoxiu",n.ruleForm);case 48:n.$utils.msgBack("提交成功");case 49:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),u=n.getMonth()+1,r=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),u=u>9?u:"0"+u,r=r>9?r:"0"+r,"".concat(a,"-").concat(u,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,a("543d")["default"])}},[["6693","common/runtime","common/vendor"]]]);