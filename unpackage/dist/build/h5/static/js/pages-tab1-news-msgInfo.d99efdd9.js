(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tab1-news-msgInfo"],{"1e24":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"PolicyInfo",attrs:{"data-v-62f27cb3":""}},[e("v-uni-rich-text",{attrs:{nodes:this.newsDetail.content}})],1)},r=[]},"24af":function(t,e,n){var a=n("2514");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("57d2c8f8",a,!0,{sourceMap:!1,shadowMode:!1})},2514:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".PolicyInfo[data-v-038538cb]{padding:1rem}p[data-v-038538cb]{padding:1rem 0}img[data-v-038538cb]{width:100%}",""]),t.exports=e},2651:function(t,e,n){"use strict";n.r(e);var a=n("1e24"),r=n("3806");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("2d7c");var u=n("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"038538cb",null,!1,a["a"],void 0);e["default"]=o.exports},"2d7c":function(t,e,n){"use strict";var a=n("24af"),r=n.n(a);r.a},3806:function(t,e,n){"use strict";n.r(e);var a=n("dfce"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},dfce:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("c7eb")),i=a(n("1da1")),u={data:function(){return{id:"",newsDetail:{}}},onLoad:function(t){var e=t.id;if(!e)return this.$textToast("暂无数据","none");this.getNewsInfo(e)},methods:{getNewsInfo:function(t){var e=this;return(0,i.default)((0,r.default)().mark((function n(){var a,i;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return uni.showLoading(),n.next=3,e.$API.readMsg({id:t});case 3:if(a=n.sent,i=a||{},e.newsDetail=i,!a||a.content){n.next=8;break}return n.abrupt("return",e.$textToast("暂无详情数据","none"));case 8:case"end":return n.stop()}}),n)})))()}}};e.default=u}}]);