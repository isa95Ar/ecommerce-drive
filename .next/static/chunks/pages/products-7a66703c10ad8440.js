(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{7153:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return n(8417)}])},8417:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return _},default:function(){return w}});var r=n(5893),c=n(3165),o=n(4040),a=n(7501),s=n(2553),i=n(6353),u=n(7690),l=n(7294),d=n(8773),f=n(9372),m=n(6979),p=n(5520),g=n(2814),x=n(9398),h=n(961);function j(t){var e=t.item,n=t.addProduct,c=(0,h.j)(),a=(0,l.useState)(1),i=a[0],j=a[1];return(0,l.useEffect)((function(){var t=c.getCartProductQty(e.code);j(t)}),[c.Cart]),(0,r.jsx)(s.ZP,{xs:12,sm:12,md:12,lg:12,xl:12,children:(0,r.jsx)(d.ZP,{css:{margin:0,letterSpacing:0},children:(0,r.jsxs)(d.ZP.Body,{className:"product-container",children:[(0,r.jsxs)(o.Z,{className:"text-container",children:[(0,r.jsx)(s.ZP,{sm:7,xs:7,lg:6,md:6,xl:6,justify:"center",children:(0,r.jsx)(f.ZP,{css:{width:100,height:100},className:"product-image",src:e.picture})}),(0,r.jsxs)(s.ZP,{className:"details-container",lg:6,md:6,xl:6,children:[(0,r.jsx)(m.Z,{className:"product-name",children:e.name}),(0,r.jsx)(m.Z,{className:"product-reference",children:e.minimum}),(0,r.jsxs)(m.Z,{className:"product-supplier",children:[(0,r.jsx)(g.G,{icon:x.Flz}),e.seller]}),(0,r.jsxs)(m.Z,{className:"product-price",children:["$",e.price]})]})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(s.ZP,{sm:7,xs:7,lg:6,md:6,xl:6,className:"product-quantity",justify:"center",children:[(0,r.jsx)(m.Z,{className:"quantity-border",onClick:function(){i>1&&j((function(t){return t-1}))},children:"-"}),(0,r.jsx)(m.Z,{className:"quantity",children:i}),(0,r.jsx)(m.Z,{className:"quantity-border",onClick:function(){j((function(t){return t+1}))},children:"+"})]}),(0,r.jsx)(s.ZP,{sm:3,xs:3,lg:6,md:6,xl:6,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(p.Z.Trigger,{children:(0,r.jsx)(u.ZP,{onClick:function(){return n(e,i)},className:"button-text",css:{backgroundColor:"#F29400",color:"black",fontWeight:400},auto:!0,flat:!0,children:"Agregar"})}),(0,r.jsx)(p.Z.Content,{children:(0,r.jsx)(m.Z,{css:{p:"$10"},children:"Agregado exitosamente!"})})]})})]})]})})})}var y=n(8754),Z=n(8277),P=n(3002),v=function(t){var e=t.categories,n=t.category,c=t.setCategory;return(0,r.jsx)("div",{className:"selector-container",children:e.length>1&&(0,r.jsxs)(P.ZP,{triggerType:"listbox",children:[(0,r.jsx)(P.ZP.Button,{className:"selector",children:n.name}),(0,r.jsx)(P.ZP.Menu,{"aria-label":"Dynamic Actions",items:e,selectedKeys:n.key,onAction:function(t){c(e.find((function(e){return e.key===t})))},children:e.map((function(t){return(0,r.jsx)(P.ZP.Item,{color:"delete"===t.key?"error":"default",children:t.name},t.key)}))})]})})},N=n(8662),C=n(1163),b=n(8366);function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function S(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=!0;function w(t){var e=(0,h.j)(t.cart),n=(0,C.useRouter)(),d=(0,l.useState)([]),f=d[0],m=d[1],p=(0,l.useState)([{key:"",name:"Todos"}]),g=p[0],x=p[1],P=(0,l.useState)({key:"",name:"Todos"}),k=P[0],_=P[1],w=(0,l.useState)(1),A=w[0],E=w[1],T=(0,l.useState)(1),q=T[0],I=T[1],O=(0,l.useState)(!0),X=O[0],F=O[1];(0,l.useEffect)((function(){(0,N.o)(),(0,y.Xp)().then((function(t){m(t.products),E(t.totalPages),F(!1)})),(0,y.CP)().then((function(t){var e=[];t.map((function(t){return e.push({key:t.slug,name:t.name})})),x([{key:"",name:"Todos"}].concat(S(e)))}))}),[]);var $=function(t,e){(0,y.Xp)(t,e.key).then((function(e){I(t),E(e.totalPages),m(e.products)}))};return(0,l.useEffect)((function(){I(1),$(1,k)}),[k]),(0,r.jsxs)(b.default,{children:[(0,r.jsx)(Z.Z,{title:"Eleg\xed el rubro y encontr\xe1 tus productos",user:t.user,cart:e.Cart}),(0,r.jsxs)(c.Z,{css:{backgroundColor:"#fff",maxWidth:"1260px"},children:[(0,r.jsx)(o.Z,{css:{backgroundColor:"#fff"},children:(0,r.jsx)(v,{categories:g,setCategory:function(t){return _(t)},category:k})}),X?(0,r.jsx)(a.ZP,{css:{margin:"auto",width:"100%",paddingTop:"10vh"},color:"warning",children:"Cargando..."}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.ZP.Container,{gap:1,css:{padding:0,backgroundColor:"#fff"},children:f.map((function(t){return(0,r.jsx)(s.ZP,{xs:12,sm:12,md:6,lg:4,xl:4,children:(0,r.jsx)(j,{addProduct:function(t,n){return function(t,n){e.addProduct(t,n)}(t,n)},item:t},t.code)},t.code)}))}),(0,r.jsx)(s.ZP.Container,{gap:2,css:{padding:0},children:(0,r.jsx)(s.ZP,{justify:"center",md:12,lg:12,xl:12,xs:12,sm:12,children:(0,r.jsx)(i.ZP,{className:"paginator",initialPage:1,total:A,onChange:function(t){return $(t,k)},color:"warning",page:q})})})]})]}),(0,r.jsx)("div",{className:"container-floating",children:(0,r.jsx)(u.ZP,{onClick:function(){return n.push("cart")},size:"xs",className:"button-floating",children:"Tu carrito"})})]})}},961:function(t,e,n){"use strict";n.d(e,{j:function(){return c}});var r=n(7294);function c(t){var e=(0,r.useState)({products:[],total:0}),n=e[0],c=e[1],o=function(t){var e=0;return t.map((function(t){return e+=t.total})),e},a=function(t,e){var r={code:t.code,name:t.name,qty:e,price:t.price,minimum:t.minimum,total:t.price*e,picture:t.picture},c=n.products;c.find((function(t){return t.code==r.code}))?c=c.map((function(t){return t.code==r.code?r:t})):c.push(r),s(c)},s=function(t){c({total:o(t),products:t}),localStorage.setItem("cart",JSON.stringify({total:o(t),products:t}))};return(0,r.useEffect)((function(){var e=localStorage.getItem("cart"),n=[];if(e){var r=JSON.parse(e);n=n.concat(r.products)}t&&t.products&&(n=n.concat(t.products)),n.map((function(t){return a(t,t.qty)}))}),[]),{Cart:n,addProduct:a,removeProduct:function(t){var e=n.products.filter((function(e){return e.code!==t.code}));s(e)},removeCart:function(){c({products:[],total:0}),localStorage.removeItem("cart")},updateProducts:s,getCartProductQty:function(t){var e=n.products.find((function(e){return e.code===t}));return e?e.qty:1}}}}},function(t){t.O(0,[523,139,710,218,671,73,774,888,179],(function(){return e=7153,t(t.s=e);var e}));var e=t.O();_N_E=e}]);