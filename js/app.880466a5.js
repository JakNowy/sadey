(function(t){function e(e){for(var o,r,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},s=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/sadey/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("b3c3"),a=n.n(o);a.a},"3c61":function(t,e,n){"use strict";var o=n("db46"),a=n.n(o);a.a},4599:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Home",{staticStyle:{"border-bottom":"2px solid #8cca3b"}}),n("About",{staticStyle:{"border-bottom":"2px solid #8cca3b",padding:"100px 0 300px 0"}}),n("Contact")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar",{staticStyle:{background:"#8cca3b"}},[n("a",{attrs:{slot:"logo",href:"https://www.facebook.com/StudioNoClaims/"},slot:"logo"}),n("nav",{staticClass:"row",attrs:{slot:"navbar"},slot:"navbar"},[n("router-link",{staticClass:"router-link",attrs:{to:"/"}},[t._v("O nas")]),n("router-link",{staticClass:"router-link",attrs:{to:"/about"}},[t._v("Jak to działa")]),n("router-link",{staticClass:"router-link",attrs:{to:"/about"}},[t._v("Zamów")]),n("router-link",{staticClass:"router-link",attrs:{to:"/about"}},[t._v("Dobierz dietę")]),n("router-link",{staticClass:"router-link",attrs:{to:"/about"}},[t._v("Blog")]),n("router-link",{staticClass:"router-link",attrs:{to:"/about"}},[t._v("Kontakt")]),n("q-btn",{staticClass:"q-mx-sm",staticStyle:{"font-size":"8px",width:"24px",height:"24px"},attrs:{round:"",color:"#8cca3b",icon:"shopping_cart"}}),n("q-btn",{staticClass:"q-mx-sm",staticStyle:{"font-size":"8px",width:"24px",height:"24px"},attrs:{round:"",color:"#8cca3b",icon:"account_circle"}})],1)]),n("Banner",{attrs:{id:"banner"}},[n("p",{staticClass:"text-center",staticStyle:{color:"#8cca3b","padding-top":"280px","font-size":"96px"},attrs:{slot:"title"},slot:"title"},[t._v(" Podnóż ")]),n("p"),n("p",{staticClass:"text-center",staticStyle:{color:"#8cca3b","font-size":"24px"},attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(" Jedzenie skrojone na miarę ")]),n("p"),n("div",{staticClass:"text-center",staticStyle:{color:"#8cca3b","font-size":"24px"},attrs:{slot:"buttons"},slot:"buttons"},[n("q-btn",{staticClass:"q-mx-md",staticStyle:{"background-color":"#8cca3b",color:"whitesmoke"}},[t._v("Zamów")]),n("q-btn",{staticClass:"q-mx-md"},[t._v("Jak to działa?")])],1)])],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[t._t("logo"),t._t("navbar")],2)},l=[],u={data:function(){}},d=u,p=(n("5dfc"),n("2877")),f=Object(p["a"])(d,c,l,!1,null,null,null),m=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._t("title"),t._t("subtitle"),t._t("buttons")],2)},v=[],h={props:{backgroundURL:{type:String,required:!0}},data:function(){return{}}},y=h,g=(n("f230"),Object(p["a"])(y,b,v,!1,null,null,null)),_=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{mode:"out-in",name:t.name}},[n("p",{key:t.counter},[t._v(" "+t._s(t.headers[t.counter]))])])},q=[],w=(n("a9e3"),{props:{headers:{type:Array,required:!0},interval:{type:Number,required:!1,default:4500},delay:{type:Number,default:500,required:!1},name:{type:String,required:!1}},data:function(){return{counter:-1}},mounted:function(){var t=this;setTimeout((function(){t.nextText(),setInterval(t.nextText,t.interval)}),this.delay)},methods:{nextText:function(){this.counter===this.headers.length-1?this.counter=0:this.counter++}}}),C=w,S=Object(p["a"])(C,x,q,!1,null,null,null),j=S.exports,z={components:{Toggler:j,Banner:_,Navbar:m},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{}},k=z,O=(n("cccb"),n("fe09")),L=Object(p["a"])(k,r,i,!1,null,null,null),E=L.exports;L.options.components=Object.assign({QBtn:O["a"]},L.options.components||{});var U=n("f820"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"row justify-between",staticStyle:{margin:"0 5% 5% 5%","line-height":"28px"}},[n("h2",{staticClass:"text-center",staticStyle:{width:"100%"}},[t._v("Znajdź nas!")]),n("Leaflet",{staticClass:"col-lg-6",attrs:{url:t.url,bounds:t.bounds,center:t.center,zoom:t.zoom}})],1)},A=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-card",{class:t.classCSS+" q-pa-lg",staticStyle:{width:"100%"}},[n("l-map",{staticStyle:{height:"80%",width:"100%"},attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,"update:bounds":t.boundsUpdated}},[n("l-tile-layer",{attrs:{url:t.url}})],1)],1)},P=[],B=n("2699"),M=n("a40a"),N={mounted:function(){console.log(this.$attrs)},components:{LMap:B["a"],LTileLayer:M["a"]},props:{url:{type:String},zoom:{type:Number},center:{type:Array},classCSS:{type:String},bounds:Object},methods:{zoomUpdated:function(t){this.zoom=t},centerUpdated:function(t){this.center=t},boundsUpdated:function(t){this.bounds=t}}},Q=N,J=Object(p["a"])(Q,T,P,!1,null,null,null),Z=J.exports;J.options.components=Object.assign({QCard:O["b"]},J.options.components||{});var I={components:{Leaflet:Z},data:function(){return{center:[53.012772,18.609531],url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:16,bounds:{_southWest:{lat:53.00554367051275,lng:18.588527690328547},_northEast:{lat:53.01798893925695,lng:18.631443034566825}}}}},D=I,H=(n("3c61"),Object(p["a"])(D,$,A,!1,null,null,null)),K=H.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"350px"}},[n("div",{staticClass:"info",staticStyle:{height:"15%"}},[n("span",[t._v("Center: "+t._s(t.center))]),n("span",[t._v("Zoom: "+t._s(t.zoom))]),n("span",[t._v("Bounds: "+t._s(t.bounds))])]),n("l-map",{staticStyle:{height:"80%",width:"100%"},attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,"update:bounds":t.boundsUpdated}},[n("l-tile-layer",{attrs:{url:t.url}})],1)],1)},F=[],R={components:{LMap:B["a"],LTileLayer:M["a"]},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:3,center:[47.41322,-1.219482],bounds:null}},methods:{zoomUpdated:function(t){this.zoom=t},centerUpdated:function(t){this.center=t},boundsUpdated:function(t){this.bounds=t}}},G=R,V=Object(p["a"])(G,W,F,!1,null,null,null),X=V.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"row justify-evenly",staticStyle:{margin:"0 5% 5% 5%","line-height":"28px",color:"#8cca3b",height:"auto"}},[n("q-card",{staticClass:"row justify-evenly",staticStyle:{width:"80%","border-color":"#8cca3b"}},[n("div",{staticStyle:{margin:"100px"}},[n("p",{staticClass:"text-h3 q-my-xl text-center col-12"},[t._v("Zarejestruj się!")]),n("q-input",{staticClass:"q-pa-lg col-md-8",attrs:{outlined:"",label:"Imię"},model:{value:t.imie,callback:function(e){t.imie=e},expression:"imie"}}),n("q-input",{staticClass:"q-pa-lg col-md-8",attrs:{outlined:"",label:"Nazwisko"},model:{value:t.nazwisko,callback:function(e){t.nazwisko=e},expression:"nazwisko"}}),n("div",{staticClass:"row justify-around q-mt-lg"},[n("q-btn",{attrs:{label:"Wyślij",outline:""}})],1)],1)])],1)},tt=[],et={components:{},data:function(){return{imie:"",nazwisko:"",text:""}}},nt=et,ot=(n("7c9f"),Object(p["a"])(nt,Y,tt,!1,null,null,null)),at=ot.exports;ot.options.components=Object.assign({QCard:O["b"],QInput:O["c"],QBtn:O["a"]},ot.options.components||{});var st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"row q-ma-xl q-pa-xl justify-evenly"},[n("h3",{staticClass:"col-12 text-center"},[t._v("Kontakt")]),n("q-card",{staticClass:"col-2 q-pa-lg"},[n("p",[t._v(" Telefon: ")]),n("p",[t._v(" 123467890 ")])]),n("q-card",{staticClass:"col-2 q-pa-lg"},[n("p",[t._v(" Email: ")]),n("p",[t._v(" gajtek@podnoz.pl ")])]),n("q-card",{staticClass:"col-2 q-pa-lg"},[n("p",[t._v(" Adress: ")]),n("p",[t._v(" agrestowa ")]),n("p",[t._v(" porzeczkowa ")]),n("p",[t._v(" party ")])])],1)},rt=[],it={components:{},data:function(){return{x:5}}},ct=it,lt=(n("c370"),Object(p["a"])(ct,st,rt,!1,null,"307fcf75",null)),ut=lt.exports;lt.options.components=Object.assign({QCard:O["b"]},lt.options.components||{});var dt={components:{Home:E,About:U["default"],Map:K,Form:at,Leaflet:X,Contact:ut},data:function(){return{}}},pt=dt,ft=(n("034f"),Object(p["a"])(pt,a,s,!1,null,null,null)),mt=ft.exports,bt=(n("d3b7"),n("8c4f"));o["a"].use(bt["a"]);var vt=[{path:"/",name:"Banner",component:mt},{path:"/about",name:"About",component:function(){return Promise.resolve().then(n.bind(null,"f820"))}}],ht=new bt["a"]({mode:"history",base:"/sadey/",routes:vt}),yt=ht,gt=(n("0ca9"),n("e54f"),n("b05d"));o["a"].use(gt["a"],{config:{brand:{primary:"#e82c77",secondary:"#403434",accent:"#f2f0f2"}},components:{},directives:{},plugins:{}});var _t=n("98c9");n("6cc5");o["a"].use(_t["a"]),o["a"].config.productionTip=!1,new o["a"]({router:yt,render:function(t){return t(mt)}}).$mount("#app")},"5dfc":function(t,e,n){"use strict";var o=n("4599"),a=n.n(o);a.a},"5eb3":function(t,e,n){},"7c9f":function(t,e,n){"use strict";var o=n("a2ed"),a=n.n(o);a.a},"909f":function(t,e,n){},a2ed:function(t,e,n){},b3c3:function(t,e,n){},ba69:function(t,e,n){},c370:function(t,e,n){"use strict";var o=n("ba69"),a=n.n(o);a.a},cccb:function(t,e,n){"use strict";var o=n("909f"),a=n.n(o);a.a},db46:function(t,e,n){},f230:function(t,e,n){"use strict";var o=n("5eb3"),a=n.n(o);a.a},f820:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-between",staticStyle:{margin:"0 5% 5% 5%","line-height":"28px"}},[n("h2",{staticClass:"text-center",staticStyle:{width:"100%"}},[t._v("Dlaczego my?")]),n("q-card",{staticClass:"q-pa-lg",staticStyle:{width:"40%"}},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dolorum officia quae quia quibusdam quod ut veritatis voluptas voluptatibus! ")]),n("q-card",{staticClass:"q-pa-lg",staticStyle:{width:"55%"}},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dolorum officia quae quia quibusdam quod ut veritatis voluptas voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dolorum officia quae quia quibusdam quod ut veritatis voluptas voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dolorum officia quae quia quibusdam quod ut veritatis voluptas voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dolorum officia quae quia quibusdam quod ut veritatis voluptas voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dolorum officia quae quia quibusdam quod ut veritatis voluptas voluptatibus! ")])],1)},a=[],s={components:{}},r=s,i=n("2877"),c=n("fe09"),l=Object(i["a"])(r,o,a,!1,null,"d4c98326",null);e["default"]=l.exports;l.options.components=Object.assign({QCard:c["b"]},l.options.components||{})}});
//# sourceMappingURL=app.880466a5.js.map