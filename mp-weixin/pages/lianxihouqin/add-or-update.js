(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/lianxihouqin/add-or-update"],{"0a51":function(n,e,a){"use strict";(function(n){a("4a92");r(a("66fd"));var e=r(a("12d9"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},"12d9":function(n,e,a){"use strict";a.r(e);var r=a("3a92"),u=a("3323");for(var i in u)"default"!==i&&function(n){a.d(e,n,(function(){return u[n]}))}(i);a("f1fa");var t,o=a("f0c5"),s=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"66464911",null,!1,r["a"],t);e["default"]=s.exports},3323:function(n,e,a){"use strict";a.r(e);var r=a("ea6e"),u=a.n(r);for(var i in r)"default"!==i&&function(n){a.d(e,n,(function(){return r[n]}))}(i);e["default"]=u.a},"3a92":function(n,e,a){"use strict";var r;a.d(e,"b",(function(){return u})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return r}));var u=function(){var n=this,e=n.$createElement;n._self._c},i=[]},"4a2a":function(n,e,a){},ea6e:function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(a("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function i(n,e,a,r,u,i,t){try{var o=n[i](t),s=o.value}catch(c){return void a(c)}o.done?e(s):Promise.resolve(s).then(r,u)}function t(n){return function(){var e=this,a=arguments;return new Promise((function(r,u){var t=n.apply(e,a);function o(n){i(t,r,u,o,s,"next",n)}function s(n){i(t,r,u,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("5eea"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{baoxiubianhao:this.getUUID(),baoxiumingcheng:"",guzhangtupian:"",wentijianshu:"",baoxiuriqi:"",xuehao:"",xingming:"",shouji:"",sushehao:"",suguanzhanghao:"",suguanxingming:"",houqinzhanghao:"",houqinxingming:"",lianxidianhua:"",sfsh:"",shhf:"",userid:""},houqinzhanghaoOptions:[],houqinzhanghaoIndex:0,user:{},ro:{baoxiubianhao:!1,baoxiumingcheng:!1,guzhangtupian:!1,wentijianshu:!1,baoxiuriqi:!1,xuehao:!1,xingming:!1,shouji:!1,sushehao:!1,suguanzhanghao:!1,suguanxingming:!1,houqinzhanghao:!1,houqinxingming:!1,lianxidianhua:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var a=this;return t(r.default.mark((function u(){var i,t,o,s;return r.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return a.ruleForm.baoxiuriqi=a.$utils.getCurDate(),i=n.getStorageSync("nowTable"),u.next=4,a.$api.session(i);case 4:return t=u.sent,a.user=t.data,a.ruleForm.xuehao=a.user.xuehao,a.ro.xuehao=!0,a.ruleForm.xingming=a.user.xingming,a.ro.xingming=!0,a.ruleForm.shouji=a.user.shouji,a.ro.shouji=!0,a.ruleForm.sushehao=a.user.sushehao,a.ro.sushehao=!0,a.ruleForm.suguanzhanghao=a.user.suguanzhanghao,a.ro.suguanzhanghao=!0,a.ruleForm.suguanxingming=a.user.suguanxingming,a.ro.suguanxingming=!0,u.next=20,a.$api.option("houqinrenyuan","houqinzhanghao",{});case 20:if(t=u.sent,a.houqinzhanghaoOptions=t.data,a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){u.next=30;break}return a.ruleForm.id=e.id,u.next=28,a.$api.info("lianxihouqin",a.ruleForm.id);case 28:t=u.sent,a.ruleForm=t.data;case 30:if(a.cross=e.cross,!e.cross){u.next=98;break}o=n.getStorageSync("crossObj"),u.t0=r.default.keys(o);case 34:if((u.t1=u.t0()).done){u.next=98;break}if(s=u.t1.value,"baoxiubianhao"!=s){u.next=40;break}return a.ruleForm.baoxiubianhao=o[s],a.ro.baoxiubianhao=!0,u.abrupt("continue",34);case 40:if("baoxiumingcheng"!=s){u.next=44;break}return a.ruleForm.baoxiumingcheng=o[s],a.ro.baoxiumingcheng=!0,u.abrupt("continue",34);case 44:if("guzhangtupian"!=s){u.next=48;break}return a.ruleForm.guzhangtupian=o[s],a.ro.guzhangtupian=!0,u.abrupt("continue",34);case 48:if("wentijianshu"!=s){u.next=52;break}return a.ruleForm.wentijianshu=o[s],a.ro.wentijianshu=!0,u.abrupt("continue",34);case 52:if("baoxiuriqi"!=s){u.next=56;break}return a.ruleForm.baoxiuriqi=o[s],a.ro.baoxiuriqi=!0,u.abrupt("continue",34);case 56:if("xuehao"!=s){u.next=60;break}return a.ruleForm.xuehao=o[s],a.ro.xuehao=!0,u.abrupt("continue",34);case 60:if("xingming"!=s){u.next=64;break}return a.ruleForm.xingming=o[s],a.ro.xingming=!0,u.abrupt("continue",34);case 64:if("shouji"!=s){u.next=68;break}return a.ruleForm.shouji=o[s],a.ro.shouji=!0,u.abrupt("continue",34);case 68:if("sushehao"!=s){u.next=72;break}return a.ruleForm.sushehao=o[s],a.ro.sushehao=!0,u.abrupt("continue",34);case 72:if("suguanzhanghao"!=s){u.next=76;break}return a.ruleForm.suguanzhanghao=o[s],a.ro.suguanzhanghao=!0,u.abrupt("continue",34);case 76:if("suguanxingming"!=s){u.next=80;break}return a.ruleForm.suguanxingming=o[s],a.ro.suguanxingming=!0,u.abrupt("continue",34);case 80:if("houqinzhanghao"!=s){u.next=84;break}return a.ruleForm.houqinzhanghao=o[s],a.ro.houqinzhanghao=!0,u.abrupt("continue",34);case 84:if("houqinxingming"!=s){u.next=88;break}return a.ruleForm.houqinxingming=o[s],a.ro.houqinxingming=!0,u.abrupt("continue",34);case 88:if("lianxidianhua"!=s){u.next=92;break}return a.ruleForm.lianxidianhua=o[s],a.ro.lianxidianhua=!0,u.abrupt("continue",34);case 92:if("userid"!=s){u.next=96;break}return a.ruleForm.userid=o[s],a.ro.userid=!0,u.abrupt("continue",34);case 96:u.next=34;break;case 98:a.styleChange();case 99:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},houqinzhanghaoChange:function(n){var e=this;return t(r.default.mark((function a(){var u;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.houqinzhanghaoIndex=n.target.value,e.ruleForm.houqinzhanghao=e.houqinzhanghaoOptions[e.houqinzhanghaoIndex],a.next=4,e.$api.follow("houqinrenyuan","houqinzhanghao",{columnValue:e.ruleForm.houqinzhanghao});case 4:u=a.sent,u.data.houqinxingming&&(e.ruleForm.houqinxingming=u.data.houqinxingming),u.data.lianxidianhua&&(e.ruleForm.lianxidianhua=u.data.lianxidianhua);case 7:case"end":return a.stop()}}),a)})))()},baoxiuriqiChange:function(n){this.ruleForm.baoxiuriqi=n.target.value,this.$forceUpdate()},guzhangtupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.guzhangtupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return t(r.default.mark((function a(){var u,i,t,o,s,c,h,g,l,f;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.ruleForm.baoxiumingcheng){a.next=3;break}return e.$utils.msg("报修名称不能为空"),a.abrupt("return");case 3:if(!e.cross){a.next=19;break}if(o=n.getStorageSync("statusColumnName"),s=n.getStorageSync("statusColumnValue"),""==o){a.next=19;break}if(c=n.getStorageSync("crossObj"),o.startsWith("[")){a.next=15;break}for(h in c)h==o&&(c[h]=s);return g=n.getStorageSync("crossTable"),a.next=13,e.$api.update("".concat(g),c);case 13:a.next=19;break;case 15:u=Number(n.getStorageSync("userid")),i=c["id"],t=n.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 19:if(!i||!u){a.next=41;break}return e.ruleForm.crossuserid=u,e.ruleForm.crossrefid=i,l={page:1,limit:10,crossuserid:u,crossrefid:i},a.next=25,e.$api.list("lianxihouqin",l);case 25:if(f=a.sent,!(f.data.total>=t)){a.next=31;break}return e.$utils.msg(n.getStorageSync("tips")),a.abrupt("return",!1);case 31:if(!e.ruleForm.id){a.next=36;break}return a.next=34,e.$api.update("lianxihouqin",e.ruleForm);case 34:a.next=38;break;case 36:return a.next=38,e.$api.add("lianxihouqin",e.ruleForm);case 38:e.$utils.msgBack("提交成功");case 39:a.next=49;break;case 41:if(!e.ruleForm.id){a.next=46;break}return a.next=44,e.$api.update("lianxihouqin",e.ruleForm);case 44:a.next=48;break;case 46:return a.next=48,e.$api.add("lianxihouqin",e.ruleForm);case 48:e.$utils.msgBack("提交成功");case 49:case"end":return a.stop()}}),a)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),r=e.getMonth()+1,u=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),r=r>9?r:"0"+r,u=u>9?u:"0"+u,"".concat(a,"-").concat(r,"-").concat(u)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,a("543d")["default"])},f1fa:function(n,e,a){"use strict";var r=a("4a2a"),u=a.n(r);u.a}},[["0a51","common/runtime","common/vendor"]]]);