(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xunwuqishi/add-or-update"],{"032f":function(e,n,i){"use strict";i.r(n);var r=i("6a90"),t=i("c71c");for(var u in t)"default"!==u&&function(e){i.d(n,e,(function(){return t[e]}))}(u);i("04df");var a,o=i("f0c5"),s=Object(o["a"])(t["default"],r["b"],r["c"],!1,null,"08ba0c2c",null,!1,r["a"],a);n["default"]=s.exports},"04df":function(e,n,i){"use strict";var r=i("9a4e"),t=i.n(r);t.a},"41b3":function(e,n,i){"use strict";(function(e){i("4a92");r(i("66fd"));var n=r(i("032f"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},"6a90":function(e,n,i){"use strict";i.d(n,"b",(function(){return t})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"5eea"))}},t=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"7f13":function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(i("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function u(e,n,i,r,t,u,a){try{var o=e[u](a),s=o.value}catch(c){return void i(c)}o.done?n(s):Promise.resolve(s).then(r,t)}function a(e){return function(){var n=this,i=arguments;return new Promise((function(r,t){var a=e.apply(n,i);function o(e){u(a,r,t,o,s,"next",e)}function s(e){u(a,r,t,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("5eea"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{cross:"",ruleForm:{biaoti:"",wupinmingcheng:"",wupinleixing:"",wupintupian:"",diushididian:"",diushishijian:"",xiangguanmiaoshu:"",xiangxiqingkuang:"",fabushijian:"",xuehao:"",xingming:"",shouji:""},user:{},ro:{biaoti:!1,wupinmingcheng:!1,wupinleixing:!1,wupintupian:!1,diushididian:!1,diushishijian:!1,xiangguanmiaoshu:!1,xiangxiqingkuang:!1,fabushijian:!1,xuehao:!1,xingming:!1,shouji:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var i=this;return a(r.default.mark((function t(){var u,a,o,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i.ruleForm.diushishijian=i.$utils.getCurDateTime(),i.ruleForm.fabushijian=i.$utils.getCurDateTime(),u=e.getStorageSync("nowTable"),t.next=5,i.$api.session(u);case 5:if(a=t.sent,i.user=a.data,i.ruleForm.xuehao=i.user.xuehao,i.ro.xuehao=!0,i.ruleForm.xingming=i.user.xingming,i.ro.xingming=!0,i.ruleForm.shouji=i.user.shouji,i.ro.shouji=!0,i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=21;break}return i.ruleForm.id=n.id,t.next=19,i.$api.info("xunwuqishi",i.ruleForm.id);case 19:a=t.sent,i.ruleForm=a.data;case 21:if(i.cross=n.cross,!n.cross){t.next=85;break}o=e.getStorageSync("crossObj"),t.t0=r.default.keys(o);case 25:if((t.t1=t.t0()).done){t.next=85;break}if(s=t.t1.value,"biaoti"!=s){t.next=31;break}return i.ruleForm.biaoti=o[s],i.ro.biaoti=!0,t.abrupt("continue",25);case 31:if("wupinmingcheng"!=s){t.next=35;break}return i.ruleForm.wupinmingcheng=o[s],i.ro.wupinmingcheng=!0,t.abrupt("continue",25);case 35:if("wupinleixing"!=s){t.next=39;break}return i.ruleForm.wupinleixing=o[s],i.ro.wupinleixing=!0,t.abrupt("continue",25);case 39:if("wupintupian"!=s){t.next=43;break}return i.ruleForm.wupintupian=o[s],i.ro.wupintupian=!0,t.abrupt("continue",25);case 43:if("diushididian"!=s){t.next=47;break}return i.ruleForm.diushididian=o[s],i.ro.diushididian=!0,t.abrupt("continue",25);case 47:if("diushishijian"!=s){t.next=51;break}return i.ruleForm.diushishijian=o[s],i.ro.diushishijian=!0,t.abrupt("continue",25);case 51:if("xiangguanmiaoshu"!=s){t.next=55;break}return i.ruleForm.xiangguanmiaoshu=o[s],i.ro.xiangguanmiaoshu=!0,t.abrupt("continue",25);case 55:if("xiangxiqingkuang"!=s){t.next=59;break}return i.ruleForm.xiangxiqingkuang=o[s],i.ro.xiangxiqingkuang=!0,t.abrupt("continue",25);case 59:if("fabushijian"!=s){t.next=63;break}return i.ruleForm.fabushijian=o[s],i.ro.fabushijian=!0,t.abrupt("continue",25);case 63:if("xuehao"!=s){t.next=67;break}return i.ruleForm.xuehao=o[s],i.ro.xuehao=!0,t.abrupt("continue",25);case 67:if("xingming"!=s){t.next=71;break}return i.ruleForm.xingming=o[s],i.ro.xingming=!0,t.abrupt("continue",25);case 71:if("shouji"!=s){t.next=75;break}return i.ruleForm.shouji=o[s],i.ro.shouji=!0,t.abrupt("continue",25);case 75:if("clicktime"!=s){t.next=79;break}return i.ruleForm.clicktime=o[s],i.ro.clicktime=!0,t.abrupt("continue",25);case 79:if("clicknum"!=s){t.next=83;break}return i.ruleForm.clicknum=o[s],i.ro.clicknum=!0,t.abrupt("continue",25);case 83:t.next=25;break;case 85:i.styleChange();case 86:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},diushishijianConfirm:function(e){console.log(e),this.ruleForm.diushishijian=e.result,this.$forceUpdate()},fabushijianConfirm:function(e){console.log(e),this.ruleForm.fabushijian=e.result,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},wupintupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.wupintupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return a(r.default.mark((function i(){var t,u,a,o,s,c,l,f,m,d;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n.ruleForm.wupinmingcheng){i.next=3;break}return n.$utils.msg("物品名称不能为空"),i.abrupt("return");case 3:if(n.ruleForm.wupinleixing){i.next=6;break}return n.$utils.msg("物品类型不能为空"),i.abrupt("return");case 6:if(n.ruleForm.diushididian){i.next=9;break}return n.$utils.msg("丢失地点不能为空"),i.abrupt("return");case 9:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){i.next=12;break}return n.$utils.msg("点击次数应输入整数"),i.abrupt("return");case 12:if(!n.cross){i.next=28;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){i.next=28;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){i.next=24;break}for(l in c)l==o&&(c[l]=s);return f=e.getStorageSync("crossTable"),i.next=22,n.$api.update("".concat(f),c);case 22:i.next=28;break;case 24:t=Number(e.getStorageSync("userid")),u=c["id"],a=e.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 28:if(!u||!t){i.next=50;break}return n.ruleForm.crossuserid=t,n.ruleForm.crossrefid=u,m={page:1,limit:10,crossuserid:t,crossrefid:u},i.next=34,n.$api.list("xunwuqishi",m);case 34:if(d=i.sent,!(d.data.total>=a)){i.next=40;break}return n.$utils.msg(e.getStorageSync("tips")),i.abrupt("return",!1);case 40:if(!n.ruleForm.id){i.next=45;break}return i.next=43,n.$api.update("xunwuqishi",n.ruleForm);case 43:i.next=47;break;case 45:return i.next=47,n.$api.add("xunwuqishi",n.ruleForm);case 47:n.$utils.msgBack("提交成功");case 48:i.next=58;break;case 50:if(!n.ruleForm.id){i.next=55;break}return i.next=53,n.$api.update("xunwuqishi",n.ruleForm);case 53:i.next=57;break;case 55:return i.next=57,n.$api.add("xunwuqishi",n.ruleForm);case 57:n.$utils.msgBack("提交成功");case 58:case"end":return i.stop()}}),i)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),r=n.getMonth()+1,t=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(i,"-").concat(r,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,i("543d")["default"])},"9a4e":function(e,n,i){},c71c:function(e,n,i){"use strict";i.r(n);var r=i("7f13"),t=i.n(r);for(var u in r)"default"!==u&&function(e){i.d(n,e,(function(){return r[e]}))}(u);n["default"]=t.a}},[["41b3","common/runtime","common/vendor"]]]);