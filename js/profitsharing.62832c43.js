(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profitsharing"],{7196:function(t,e,n){"use strict";e["a"]=["北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区","台湾省","香港特别行政区","澳门特别行政区"]},"80bf":function(t,e,n){"use strict";n("96cf");var r=n("1da1"),s=(n("7f7f"),n("a3fb"));e["a"]=function(t){var e=t.name,n=t.components,i=t.map;return{name:e,components:n,data:function(){return{store:{}}},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["b"])();case 2:this.store=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),render:function(t){return t(i[this.store.kind])}}}},a277:function(t,e,n){"use strict";n.r(e);var r,s,i=n("80bf"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"110px",size:"small"},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[n("div",{staticClass:"container"},[n("el-switch",{attrs:{"active-text":"开启分销"},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}}),n("br"),n("br"),n("br"),n("el-form-item",{attrs:{label:"佣金比例"}},[n("el-row",{attrs:{tyle:"margin-bottom: 5px;"}},[n("el-col",{attrs:{span:"3"}},[n("el-input",{model:{value:t.store.brokeragerate,callback:function(e){t.$set(t.store,"brokeragerate",e)},expression:"store.brokeragerate"}},[n("template",{slot:"append"},[t._v("%")])],2)],1)],1),n("div",{staticStyle:{color:"#999","font-size":"10px"}},[n("i",{staticClass:"el-icon-warning-outline",staticStyle:{color:"#ff4f4f","font-size":"10px"}}),t._v("\n          分销佣金=(订单支付金额-配送费)*佣金比例\n        ")]),n("div",{staticStyle:{color:"#999","font-size":"10px"}},[n("i",{staticClass:"el-icon-warning-outline",staticStyle:{color:"#ff4f4f","font-size":"10px"}}),t._v("\n          会员下单将不视为分销订单, 既不会产生分销佣金\n        ")]),n("div",{staticStyle:{color:"#999","font-size":"10px"}},[n("i",{staticClass:"el-icon-warning-outline",staticStyle:{color:"#ff4f4f","font-size":"10px"}}),t._v("\n          分账订单会在订单确认收货7日后进行分账结算. 如果订单发生退货退款将认为无效不进行分账.\n        ")]),n("div",{staticStyle:{color:"#999","font-size":"10px"}},[n("i",{staticClass:"el-icon-warning-outline",staticStyle:{color:"#ff4f4f","font-size":"10px"}}),t._v("\n          微信允许的分账最大期限是订单支付后30天内, 请及时发货, 以免造成分账失败.\n        ")]),n("div",{staticStyle:{color:"#999","font-size":"10px"}},[n("i",{staticClass:"el-icon-warning-outline",staticStyle:{color:"#ff4f4f","font-size":"10px"}}),t._v("\n          请避免以上分账失败情况发生, 以保持您小程序品牌的良好信誉.\n        ")])],1),n("div",{staticClass:"button-wrap"}),n("div",{staticClass:"save-btn-container"},[n("el-button",{attrs:{type:"primary"},on:{click:t.updateStore}},[t._v("\n          保存\n        ")])],1)],1)])],1)},o=[],c=n("be94"),l=(n("96cf"),n("1da1")),f=n("8e44"),u=n("e8e1"),p=n("73cd"),b=(n("7196"),n("16de"),n("a3fb"),{data:function(){return{token:"",store:{},enable:!1}},created:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.token=Object(p["e"])(),t.next=3,Object(f["a"])("StoreAuthService.GetStore",Object(u["a"])("Token",{token:this.token}));case 3:e=t.sent,this.store=e,this.enable=2===e.enableprofitsharing;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{updateStore:function(){var t=this;this.store.enableprofitsharing=this.enable?2:1,this.store.brokeragerate=parseInt(this.store.brokeragerate),2===this.store.enableprofitsharing&&this.store.brokeragerate<=0?this.$message({message:"分账比例需为整数且大于0",type:"error"}):Object(f["a"])("StoreStoreService.UpdateProfitSharing",Object(u["a"])("StoreWithTokenRequest",{token:Object(u["a"])("Token",{token:this.token}),store:Object(u["a"])("Store",Object(c["a"])({},this.store,{businesshoursList:this.store.businesshoursList.map(function(t){return Object(u["a"])("BusinessHours",t)}),distancepricelistList:this.store.distancepricelistList.map(function(t){return Object(u["a"])("DistancePrice",t)})}))})).then(function(e){t.$message({message:"保存成功",type:"success"})})}}}),h=b,d=(n("c4eb"),n("2877")),m=Object(d["a"])(h,a,o,!1,null,"7145dd16",null),v=m.exports,g={_:v},k={0:"_",1:"_",2:"_",3:"_",4:"_",6:"_",7:"_"},x=Object(i["a"])({name:"profitsharing-entry",components:g,map:k}),w=x,S=Object(d["a"])(w,r,s,!1,null,null,null);e["default"]=S.exports},c4eb:function(t,e,n){"use strict";var r=n("d872"),s=n.n(r);s.a},d872:function(t,e,n){}}]);
//# sourceMappingURL=profitsharing.62832c43.js.map