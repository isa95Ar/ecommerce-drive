(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4284)}])},5141:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(5893),c=(t(7294),t(7690)),s=t(189),i=t(6979),o=t(1163);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}function u(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var d=function(e){var n=e.fill,t=void 0===n?"currentColor":n,c=e.size,s=e.height,i=e.width,o=u(e,["fill","size","height","width"]);return(0,r.jsx)("div",{style:{cursor:"pointer"},children:(0,r.jsxs)("svg",l({width:c||i||24,height:c||s||24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{children:[(0,r.jsx)("path",{d:"M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z",fill:t}),(0,r.jsx)("path",{d:"M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z",fill:t}),(0,r.jsx)("path",{d:"M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.93 21.55 6.51C21.68 4.74 20.33 3.3 18.56 3.3H6.27C6.17 2.86 5.97 2.44 5.66 2.09C5.16 1.56 4.46 1.25 3.74 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74C4.05 2.75 4.34 2.88 4.55 3.1C4.76 3.33 4.86 3.63 4.84 3.94Z",fill:t}),(0,r.jsx)("path",{d:"M20.5101 8.75H5.17005C4.75005 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.54 5.21005 17 6.92005 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.6C21.3401 9.14 20.9801 8.75 20.5101 8.75Z",fill:t})]}))})},f=function(e){var n=e.title,t=e.user,a=e.cart,l=(0,o.useRouter)();return(0,r.jsxs)("div",{className:"header",children:[t.logged&&(0,r.jsxs)("div",{className:"logout-button",children:[(0,r.jsxs)(c.ZP,{className:"logout-button",onClick:function(){return l.push("/api/logout")},children:["Cerrar Session (",t.name,")"]}),a&&(0,r.jsx)(s.ZP,{css:{cursor:"pointer"},color:"warning",content:a.products.length,shape:"circle",children:(0,r.jsx)(d,{fill:"white",size:30,width:24,height:24,onClick:function(){return l.push("/cart")}})})]}),(0,r.jsx)(i.Z,{className:"header-text",children:n})]})}},4284:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return M},default:function(){return B}});var r=t(5893),c=t(1713),s=t(2553),i=t(5328),o=t(7690);function a(){return(0,r.jsx)(s.ZP,{className:"login",children:(0,r.jsxs)(s.ZP.Container,{justify:"center",alignContent:"center",children:[(0,r.jsx)(s.ZP,{xs:12,xl:12,children:(0,r.jsx)(i.ZP,{src:"/img/logoCoop.png",alt:"Default Image"})}),(0,r.jsx)(s.ZP,{xs:12,xl:3,sm:6,md:3,lg:3,children:(0,r.jsx)(o.ZP,{className:"google-button",onClick:function(){return location.href="/api/login"},children:"  Ingres\xe1 con Google"})})]})})}var l=t(3165),u=t(4040),d=t(7501),f=t(6353),h=t(7294),g=t(8773),x=t(9372),p=t(6979),m=t(5520),j=t(2814),v=t(9398);function y(e){var n=e.item,t=e.addProduct,c=(0,h.useState)(1),i=c[0],a=c[1];return(0,r.jsx)(s.ZP,{xs:12,sm:12,md:12,lg:12,xl:12,children:(0,r.jsx)(g.ZP,{css:{margin:0},children:(0,r.jsxs)(g.ZP.Body,{className:"product-container",children:[(0,r.jsxs)(u.Z,{className:"text-container",children:[(0,r.jsx)(s.ZP,{sm:7,xs:7,lg:6,md:6,xl:6,justify:"center",children:(0,r.jsx)(x.ZP,{css:{width:100,height:100},className:"product-image",src:"https://s3-alpha-sig.figma.com/img/1a50/6114/accaeeb408d6dfb78fad323b25d00302?Expires=1662940800&Signature=Z8l8tNl7-LjlkbXM79cDGZGhKjLUw49mS3yn~iuOANWb-CewZF6E0Eo3U3lqLtRsk2V4I5y74~pXTiw-P88HPP2cUf3BUCfm3LGUnk0TsZ9kQflS0BaP2lldIA174tZpUo82eHnIPZENYjeT7dcXj7siOGMAEYS26JVT7WbrHZZcmteXs01Fpy4xU-NYQjnxEIsUEd0BZftl-yiAZgjWNU8uJU71eIiJqc5HhsxBj0izH-AKkI5OIi7454TRm-CsOgB93WgACpWxCATgU2m0lR5G1qYkGJfr5kA97De-Wgm6khozCXc1BlfSbFIJxvgFsHGoCRVAwHzEMIMDrnf6IA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"})}),(0,r.jsxs)(s.ZP,{className:"details-container",lg:6,md:6,xl:6,children:[(0,r.jsx)(p.Z,{className:"product-name",children:n.name}),(0,r.jsx)(p.Z,{className:"product-reference",children:n.minium}),(0,r.jsxs)(p.Z,{className:"product-supplier",children:[(0,r.jsx)(j.G,{icon:v.Flz}),n.seller]}),(0,r.jsxs)(p.Z,{className:"product-price",children:["$",n.price]})]})]}),(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(s.ZP,{sm:7,xs:7,lg:6,md:6,xl:6,className:"product-quantity",justify:"center",children:[(0,r.jsx)(p.Z,{className:"quantity-border",onClick:function(){i>1&&a((function(e){return e-1}))},children:"-"}),(0,r.jsx)(p.Z,{className:"quantity",children:i}),(0,r.jsx)(p.Z,{className:"quantity-border",onClick:function(){a((function(e){return e+1}))},children:"+"})]}),(0,r.jsx)(s.ZP,{sm:3,xs:3,lg:6,md:6,xl:6,children:(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(m.Z.Trigger,{children:(0,r.jsx)(o.ZP,{onClick:function(){return t(n,i)},className:"button-text",color:"warning",auto:!0,flat:!0,children:"Agregar"})}),(0,r.jsx)(m.Z.Content,{children:(0,r.jsx)(p.Z,{css:{p:"$10"},children:"Agregado exitosamente!"})})]})})]})]})})})}var Z=t(4051),b=t.n(Z);function P(e,n,t,r,c,s,i){try{var o=e[s](i),a=o.value}catch(l){return void t(l)}o.done?n(a):Promise.resolve(a).then(r,c)}function w(e){return function(){var n=this,t=arguments;return new Promise((function(r,c){var s=e.apply(n,t);function i(e){P(s,r,c,i,o,"next",e)}function o(e){P(s,r,c,i,o,"throw",e)}i(void 0)}))}}var C=function(){var e=w(b().mark((function e(){var n,t,r,c,s=arguments;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:1,t=s.length>1&&void 0!==s[1]?s[1]:null,r="/api/products",t&&(r+="/"+t),e.next=5,fetch("".concat(r,"?page=").concat(n)).then((function(e){return e.json()}));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=w(b().mark((function e(){var n;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/categories").then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=w(b().mark((function e(){var n;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/cart/status").then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=t(5141),O=t(3002),A=function(e){var n=e.categories,t=e.category,c=e.setCategory;return(0,r.jsx)("div",{className:"selector-container",children:n.length>1&&(0,r.jsxs)(O.ZP,{triggerType:"listbox",children:[(0,r.jsx)(O.ZP.Button,{className:"selector",children:t.name}),(0,r.jsx)(O.ZP.Menu,{"aria-label":"Dynamic Actions",items:n,selectedKeys:t.key,onAction:function(e){c(n.find((function(n){return n.key===e})))},children:n.map((function(e){return(0,r.jsx)(O.ZP.Item,{color:"delete"===e.key?"error":"default",children:e.name},e.key)}))})]})})},E=t(961);function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e){var n=(0,E.j)(),t=(0,h.useState)([]),c=t[0],i=t[1],o=(0,h.useState)([{key:"",name:"Todos"}]),a=o[0],g=o[1],x=(0,h.useState)({key:"",name:"Todos"}),p=x[0],m=x[1],j=(0,h.useState)(1),v=j[0],Z=j[1],b=(0,h.useState)(1),P=b[0],w=b[1],S=(0,h.useState)(!0),O=S[0],I=S[1];(0,h.useEffect)((function(){C().then((function(e){i(e.products),Z(e.totalPages),I(!1)})),k().then((function(e){var n=[];e.map((function(e){return n.push({key:e.slug,name:e.name})})),g([{key:"",name:"Todos"}].concat(_(n)))}))}),[]);var T=function(e,n){C(e,n.key).then((function(n){w(e),Z(n.totalPages),i(n.products)}))};return(0,h.useEffect)((function(){w(1),T(1,p)}),[p]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N.Z,{title:"Eleg\xed el rubro y encontr\xe1 tus productos",user:e.user,cart:n.Cart}),(0,r.jsxs)(l.Z,{css:{backgroundColor:"#fff"},children:[(0,r.jsx)(u.Z,{css:{backgroundColor:"#fff"},children:(0,r.jsx)(A,{categories:a,setCategory:function(e){return m(e)},category:p})}),O?(0,r.jsx)(d.ZP,{css:{margin:"auto",width:"100%",paddingTop:"10vh"},color:"warning",children:"Cargando..."}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.ZP.Container,{gap:2,css:{padding:0,backgroundColor:"#fff"},children:c.map((function(e){return(0,r.jsx)(s.ZP,{xs:12,sm:12,md:6,lg:4,xl:4,children:(0,r.jsx)(y,{addProduct:function(e,t){return function(e,t){n.addProduct(e,t)}(e,t)},item:e},e.code)},e.code)}))}),(0,r.jsx)(s.ZP.Container,{gap:2,css:{padding:0},children:(0,r.jsx)(s.ZP,{justify:"center",md:12,lg:12,xl:12,xs:12,sm:12,children:(0,r.jsx)(f.ZP,{initialPage:1,total:v,onChange:function(e){return T(e,p)},color:"warning",page:P})})})]})]})]})}var U=t(7087);function H(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,r.jsx)(j.G,{icon:v.eFW,color:"white",style:{alignSelf:"center"}}),(0,r.jsxs)(U.ZP,{block:!0,href:"#",className:"link-container",underline:!0,children:[" ","Visit\xe1 Nuestra p\xe1gina"]})]}),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,r.jsx)(j.G,{icon:v.eFW,color:"white",style:{alignSelf:"center"}}),(0,r.jsxs)(U.ZP,{block:!0,href:"#",className:"link-container",underline:!0,children:[" ","Unite a la comunidad"]})]})]})}var D="/_next/static/media/BgImgAviso.a3213864.jpg";function G(e){var n,t=e.status,c=t.openDate,s="white",i={imgStyle:{backgroundImage:"url(".concat(D,")"),height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover"},linkStyle:{color:"white"},avisoStyle:{color:"white"}};"url(".concat(D,")");return n=i,(0,r.jsx)("div",{style:n.imgStyle,children:(0,r.jsxs)(l.Z,{fluid:!0,children:[(0,r.jsx)(g.ZP,{css:{height:"40vh",background:"none"},children:" "}),"open"===t.status?(0,r.jsx)("div",{children:(0,r.jsx)(p.Z,{children:(0,r.jsxs)(p.Z,{h1:!0,css:{color:s},children:["\xbfYa hiciste tu pedido de este mes?"," "]})})}):"toOpen"===t.status?(0,r.jsx)("div",{children:(0,r.jsx)(p.Z,{children:(0,r.jsxs)(p.Z,{h1:!0,css:{color:s},children:["El carrito abre el"," ",c]})})}):(0,r.jsx)("div",{children:(0,r.jsxs)(p.Z,{children:[(0,r.jsxs)(p.Z,{h1:!0,css:{color:s},children:["El carrito ya est\xe1 cerrado."," "]}),(0,r.jsxs)(p.Z,{h4:!0,css:{color:s},children:["Nos vemos la pr\xf3xima semana."," "]})]})}),(0,r.jsx)(H,{})]})})}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var M=!0;function B(e){var n=(0,h.useState)({status:"closed"}),t=n[0],s=n[1],i=(0,h.useState)(!0),o=i[0],l=i[1];return(0,h.useEffect)((function(){S().then((function(e){s(e),l(!1)}))}),[]),(0,r.jsxs)(c.default,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){F(e,n,t[n])}))}return e}({},e,{children:[!e.user.logged&&"open"===t.status&&(0,r.jsx)(a,{}),o?(0,r.jsx)(d.ZP,{css:{margin:"auto",width:"100%",paddingTop:"50vh"},color:"warning",children:"Cargando..."}):e.user.logged&&"open"===t.status?(0,r.jsx)(T,{user:e.user}):(0,r.jsx)(G,{status:t})]}))}},1713:function(e,n,t){"use strict";t.r(n);var r=t(5893),c=t(9008),s=t.n(c);n.default=function(e){var n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"AlMargen | Del otro lado de tu mesa"}),(0,r.jsx)("meta",{content:"width=device-width, initial-scale=1.0",name:"viewport"})]}),(0,r.jsx)("div",{children:n})]})}},961:function(e,n,t){"use strict";t.d(n,{j:function(){return c}});var r=t(7294);function c(){var e=(0,r.useState)({products:[],total:0}),n=e[0],t=e[1],c=function(e){var n=0;return e.map((function(e){return n+=e.total})),n},s=function(e){t({total:c(e),products:e}),localStorage.setItem("cart",JSON.stringify({total:c(e),products:e}))};return(0,r.useEffect)((function(){var e=localStorage.getItem("cart");e&&t(JSON.parse(e))}),[]),{Cart:n,addProduct:function(e,t){var r={code:e.code,name:e.name,qty:t,price:e.price,total:e.price*t},c=n.products;c.find((function(e){return e.code==r.code}))?c=c.map((function(e){return e.code==r.code?r:e})):c.push(r),s(c)},removeProduct:function(e){var t=n.products.filter((function(n){return n.code!==e.code}));s(t)},removeCart:function(){t({products:[],total:0}),localStorage.removeItem("cart")}}}}},function(e){e.O(0,[523,258,814,187,529,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);