(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tab5-zhuanzhang"],{"241c4":function(t,e,a){"use strict";a.r(e);var n=a("5159"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"35a6":function(t,e,a){var n=a("770d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("d7fc0b32",n,!0,{sourceMap:!1,shadowMode:!1})},5159:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c7eb")),o=n(a("1da1")),r={data:function(){return{userInfo:{},moneyList:[{money_type:"recharge_money",name:"充值现金",key:"recharge_money"},{money_type:"cash_money",name:"可提现金",key:"cash_money"},{money_type:"fund_money",name:"圆梦基金",key:"fund_money"},{money_type:"figure_money",name:"数字人民币",key:"figure_money"}],selectType:"",FormData:{money:"",mobile:""}}},onLoad:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var a;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading(),e.next=3,t.$API.findUserInfo();case 3:a=e.sent,t.userInfo=a||{};case 5:case"end":return e.stop()}}),e)})))()},transfer:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var a;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.FormData.money){e.next=2;break}return e.abrupt("return",t.$textToast("请输入转账金额"));case 2:if(t.FormData.mobile){e.next=4;break}return e.abrupt("return",t.$textToast("请输入手机号码"));case 4:if(t.selectType){e.next=6;break}return e.abrupt("return",t.$textToast("当前可转金额为0"));case 6:return uni.showLoading(),e.next=9,t.$API.transfer(Object.assign(t.FormData,{money_type:t.selectType}));case 9:a=e.sent,a&&t.$textToast("转账成功");case 11:case"end":return e.stop()}}),e)})))()}}};e.default=r},"74ee":function(t,e,a){"use strict";var n=a("35a6"),i=a.n(n);i.a},"770d":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* @import url('/static/tab5/zhuanzhang/style/29.7e543061.css'); */[data-v-0bc031e4]::-webkit-scrollbar{display:none}bady[data-v-0bc031e4]{height:100%;width:100%;position:fixed;top:0;left:0}html[data-v-0bc031e4]{overflow:auto}*[data-v-0bc031e4]{text-align:left;scrollbar-width:none;-ms-overflow-style:none}.flex-line[data-v-0bc031e4],\n.flex-line-between[data-v-0bc031e4],\n.my-top .my-top-content[data-v-0bc031e4],\n.my-top .my-top-money[data-v-0bc031e4],\n.my-top .my-top-title[data-v-0bc031e4]{display:flex;align-items:center;justify-content:flex-start}.flex-line-between[data-v-0bc031e4]{justify-content:space-between}.mt15[data-v-0bc031e4]{margin-top:15px!important}.mt10[data-v-0bc031e4]{margin-top:10px!important}.ml15[data-v-0bc031e4]{margin-left:15px!important}.bgcolor209[data-v-0bc031e4]{background:#d1d1d1}.flex-row[data-v-0bc031e4],\n.flex-row-between[data-v-0bc031e4]{display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.flex-row-between[data-v-0bc031e4]{justify-content:space-between}.van-tabbar[data-v-0bc031e4]{height:60px!important}.s-font[data-v-0bc031e4]{font-size:16px;font-weight:400}.m-font[data-v-0bc031e4],\n.s-font[data-v-0bc031e4]{padding-left:8px}.m-font[data-v-0bc031e4]{width:58%;font-size:18px;font-weight:600}.fl[data-v-0bc031e4]{text-align:left}.logo-img[data-v-0bc031e4]{width:80%;height:70px}.level[data-v-0bc031e4]{font-size:15px;font-weight:600;line-height:30px;padding:0 5px;color:#2b2d3c}.cell-title[data-v-0bc031e4]{font-size:16px;font-weight:500}.home-top[data-v-0bc031e4]{width:100%;height:92vw;overflow:hidden;background:url(/static/index/kh.c1297b02.jpg) no-repeat;background-size:100% 100%;border-bottom-left-radius:70% 10%;border-bottom-right-radius:70% 10%}.home-top-msg[data-v-0bc031e4]{width:100%;margin:10px auto;color:#fff}.van-notice-bar[data-v-0bc031e4]{height:35px!important}.vjs-poster[data-v-0bc031e4]{background-size:100% 100%!important}.grid[data-v-0bc031e4]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:18px}.home-items[data-v-0bc031e4]{overflow:hidden;width:90vw;margin:8px auto 0}.home-item[data-v-0bc031e4]{height:80px;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:14px;font-weight:600;border-radius:5px}.home-item .home-item-img[data-v-0bc031e4]{width:65px;height:65px}.label-title[data-v-0bc031e4]{margin-top:40px;display:flex;align-items:center;margin-left:20px;color:#2b2d3c;font-size:18px;font-weight:500}.title-left[data-v-0bc031e4]{width:8px;height:20px;background:#ff1e0f;display:inline-block;border-radius:10px;vertical-align:top;margin-right:5px}.h100[data-v-0bc031e4]{height:100vh}.mb10[data-v-0bc031e4]{margin-bottom:10px}.xieyi[data-v-0bc031e4]{font-size:15px;color:#838383;font-weight:600;text-decoration:underline}.s-upstream[data-v-0bc031e4],\n.upstream[data-v-0bc031e4]{color:#2ecc71;font-weight:500;font-size:14px}.ex-people[data-v-0bc031e4]{color:#ff1e0f;font-weight:500;font-size:18px}.s-upstream[data-v-0bc031e4]{font-size:12px}.time-item[data-v-0bc031e4],\n.time-item-uint[data-v-0bc031e4]{font-weight:600;color:#ff1e0f;font-size:18px;letter-spacing:3px}.time-item-uint[data-v-0bc031e4]{font-size:12px}.kf-bottom[data-v-0bc031e4]{position:fixed;bottom:10px;text-align:center;left:35%}.kf-text[data-v-0bc031e4]{font-size:16px!important;font-weight:600!important;color:#57585a!important}.my[data-v-0bc031e4]{background-color:#f2f2f2;min-height:calc($app-height)}.my-top[data-v-0bc031e4]{background:url(/static/index/kh.c1297b02.jpg) no-repeat;background-size:100% 100%;color:#fff;height:200px}.my-top .my-top-content[data-v-0bc031e4]{width:90vw;justify-content:space-between;margin-top:42px}.my-top .my-top-money[data-v-0bc031e4]{justify-content:space-around;width:90vw;line-height:40px;border-radius:10px;position:relative;top:28px;z-index:99;background-color:#d36870}.money-list[data-v-0bc031e4]{overflow:hidden;width:100%;margin:0 auto;background-color:#f2f2f2}.money-list-items[data-v-0bc031e4]{overflow:hidden;white-space:nowrap;width:95%;margin:0 auto;text-align:center}.money-list-items .money-list-item[data-v-0bc031e4]{display:inline-block;width:30%;height:80px;margin:5px;border-radius:5px;background-size:200% 200%;color:#fff;text-align:center}.money-list-items .money-list-item .money[data-v-0bc031e4]{text-align:center;font-size:18px;font-weight:600;margin-top:18px}.money-list-items .money-list-item .money-label[data-v-0bc031e4]{text-align:center;font-size:16px;font-weight:600}.van-tag[data-v-de1b3d0e][data-v-0bc031e4]{display:block}.level[data-v-de1b3d0e][data-v-0bc031e4]{background-color:#e4d846}.upload-content-img[data-v-de1b3d0e][data-v-0bc031e4]{margin:0 20px;margin-bottom:30px}.van-image--round[data-v-de1b3d0e][data-v-0bc031e4]{vertical-align:middle}.s-font[data-v-de1b3d0e][data-v-0bc031e4]{padding-top:4px;padding-bottom:4px}.my-top-money .m-font[data-v-de1b3d0e][data-v-0bc031e4]{padding-left:28px}.m-font[data-v-de1b3d0e][data-v-0bc031e4]{display:inline-block;text-align:center}.money-list-items-2[data-v-de1b3d0e][data-v-0bc031e4]{display:flex;justify-content:space-between;margin:0 auto;box-sizing:border-box;overflow-x:auto}.money-list-items .money-list-item-2[data-v-de1b3d0e][data-v-0bc031e4]{width:auto;min-width:30%;padding:0 10px;box-sizing:border-box;flex-shrink:0}.pay-type[data-v-efef8222][data-v-0bc031e4]{width:90vw;margin:2rem auto;margin-bottom:7rem}.money-label[data-v-efef8222][data-v-0bc031e4]{font-size:34px!important;font-weight:600;line-height:38px;width:10%!important;text-align:right;border-bottom:1px solid #ebedf0}[data-v-efef8222] .van-button--normal[data-v-0bc031e4]{font-size:16px}[data-v-efef8222] .van-dialog__content .van-field__control[data-v-0bc031e4]{text-align:center}.Zhuanzhang uni-input[data-v-0bc031e4]{font-size:24px!important;border-bottom:1px solid rgba(169,37,50,.4);padding-bottom:12px}\n\n/* @import url('/static/tab5/zhuanzhang//style/664.423cda40.css'); */",""]),t.exports=e},"7a24":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"Zhuanzhang",attrs:{"data-v-efef8222":""}},[a("v-uni-view",{staticClass:"mt15",staticStyle:{width:"90%",margin:"0px auto"},attrs:{"data-v-efef8222":""}},[a("v-uni-view",{staticClass:"van-cell van-field",attrs:{"data-v-efef8222":""}},[a("v-uni-view",{staticClass:"van-cell__value van-cell__value--alone van-field__value"},[a("v-uni-view",{staticClass:"van-field__body"},[a("v-uni-input",{staticClass:"van-field__control",attrs:{type:"digit",inputmode:"decimal","placeholder-style":"font-size: 42rpx;",placeholder:"请输入转账金额"},model:{value:t.FormData.money,callback:function(e){t.$set(t.FormData,"money",e)},expression:"FormData.money"}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"mt15",staticStyle:{width:"90%",margin:"0px auto"},attrs:{"data-v-efef8222":""}},[a("v-uni-view",{staticClass:"van-cell van-field",attrs:{"data-v-efef8222":""}},[a("v-uni-view",{staticClass:"van-cell__value van-cell__value--alone van-field__value"},[a("v-uni-view",{staticClass:"van-field__body"},[a("v-uni-input",{staticClass:"van-field__control",attrs:{type:"text","placeholder-style":"font-size: 42rpx;",placeholder:"请输入对方手机号"},model:{value:t.FormData.mobile,callback:function(e){t.$set(t.FormData,"mobile",e)},expression:"FormData.mobile"}})],1)],1)],1),a("v-uni-view",{staticClass:"van-cell",attrs:{"data-v-efef8222":""}},[a("v-uni-view",{staticClass:"van-cell__title",attrs:{"data-v-efef8222":""}},[a("span",{attrs:{"data-v-efef8222":""}},[t._v("收款人姓名:")])]),a("v-uni-view",{staticClass:"van-cell__value",attrs:{"data-v-efef8222":""}},[a("span",{attrs:{"data-v-efef8222":""}})])],1)],1),a("v-uni-view",{staticClass:"pay-type",attrs:{"data-v-efef8222":""}},[a("span",{staticStyle:{color:"rgb(157, 165, 173)","font-size":"20px","font-weight":"600"},attrs:{"data-v-efef8222":""}},[t._v("请选择转账种类")]),a("v-uni-view",{staticClass:"van-radio-group",attrs:{"data-v-efef8222":"",role:"radiogroup"}},t._l(t.moneyList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"van-cell van-cell--large",attrs:{"data-v-efef8222":""}},[a("v-uni-view",{staticClass:"van-cell__title",attrs:{"data-v-efef8222":""}},[a("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"},attrs:{"data-v-efef8222":""}},[a("v-uni-view",{staticStyle:{display:"flex","align-items":"center"},attrs:{"data-v-efef8222":""}},[a("span",{staticStyle:{color:"rgb(169, 37, 50)","font-size":"28px"},attrs:{"data-v-efef8222":""}},[a("i",{staticClass:"van-icon van-icon-gold-coin",attrs:{"data-v-efef8222":""}})]),a("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","font-size":"15px","margin-left":"1rem"},attrs:{"data-v-efef8222":""}},[a("span",{attrs:{"data-v-efef8222":""}},[t._v(t._s(e.name))])])],1),a("v-uni-view",{staticClass:"flex-line",attrs:{"data-v-efef8222":""}},[a("span",{staticStyle:{"text-align":"left","padding-right":"8px",color:"red"},attrs:{"data-v-efef8222":""}},[t._v("可转\n\t\t\t\t\t\t\t\t"+t._s(t.userInfo[e.key]||"0.00"))]),a("v-uni-view",{staticClass:"van-radio",attrs:{"data-v-efef8222":"",role:"radio",tabindex:"0","aria-checked":"true"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectType=e.money_type}}},[a("v-uni-view",{class:["van-radio__icon van-radio__icon--round",t.selectType===e.money_type?"van-radio__icon--checked":""]},[a("i",{staticClass:"van-icon van-icon-success"})])],1)],1)],1)],1)],1)})),1)],1),a("v-uni-view",{staticClass:"van-submit-bar",attrs:{"data-v-efef8222":""}},[a("v-uni-view",{staticClass:"van-submit-bar__bar",attrs:{"data-v-efef8222":""}},[a("v-uni-button",{staticClass:"van-button van-button--primary van-button--normal van-button--block",staticStyle:{color:"white",background:"linear-gradient(to right, rgb(238, 10, 36), rgb(169, 37, 50))",border:"0px"},attrs:{"data-v-efef8222":""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.transfer.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"van-button__content",attrs:{"data-v-efef8222":""}},[a("span",{staticClass:"van-button__text",attrs:{"data-v-efef8222":""}},[t._v("立即转账")])])],1)],1)],1)],1)},i=[]},"91d9":function(t,e,a){"use strict";a.r(e);var n=a("7a24"),i=a("241c4");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("74ee");var r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"0bc031e4",null,!1,n["a"],void 0);e["default"]=s.exports}}]);