(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{7153:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return n(8417)}])},8417:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return A},default:function(){return E}});var r=n(5893),c=n(3165),o=n(4040),a=n(7501),s=n(2553),i=n(6353),u=n(7690),l=n(189),d=n(7294),f=n(8773),m=n(9372),p=n(6979),h=n(2814),g=n(9398),x=n(961),j=n(5678),y=n(428);function P(t){var e=t.item,n=t.addProduct,c=(0,x.j)(),a=(0,d.useState)(1),i=a[0],l=a[1];return(0,d.useEffect)((function(){var t=c.getCartProductQty(e.code);l(t)}),[c.Cart]),(0,r.jsx)(s.ZP,{xs:12,sm:12,md:12,lg:12,xl:12,children:(0,r.jsx)(f.ZP,{css:{margin:0,letterSpacing:0},children:(0,r.jsxs)(f.ZP.Body,{className:"product-container",children:[(0,r.jsxs)(o.Z,{className:"text-container",children:[(0,r.jsx)(s.ZP,{sm:7,xs:7,lg:6,md:6,xl:6,justify:"center",children:(0,r.jsx)(m.ZP,{css:{width:100,height:100},className:"product-image",src:e.picture})}),(0,r.jsxs)(s.ZP,{className:"details-container",lg:6,md:6,xl:6,children:[(0,r.jsx)(p.Z,{className:"product-name",children:e.name}),(0,r.jsx)(p.Z,{className:"product-reference",children:e.minimum}),(0,r.jsxs)(p.Z,{className:"product-supplier",children:[(0,r.jsx)(h.G,{icon:g.Flz}),e.seller]}),(0,r.jsxs)(p.Z,{className:"product-price",children:["$",e.price]})]})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(s.ZP,{sm:7,xs:7,lg:6,md:6,xl:6,className:"product-quantity",justify:"center",children:[(0,r.jsx)(p.Z,{className:"quantity-border",onClick:function(){i>1&&l((function(t){return t-1}))},children:"-"}),(0,r.jsx)(p.Z,{className:"quantity",children:i}),(0,r.jsx)(p.Z,{className:"quantity-border",onClick:function(){l((function(t){return t+1}))},children:"+"})]}),(0,r.jsx)(s.ZP,{sm:3,xs:3,lg:6,md:6,xl:6,children:(0,r.jsx)(u.ZP,{onClick:function(){n(e,i),j.Am.warn("Agregado exitosamente",{autoClose:1500,icon:(0,r.jsx)(y.w,{fill:"#EA903C",size:24,width:16,height:16})})},className:"button-text",css:{backgroundColor:"#F29400",color:"black",fontWeight:400},auto:!0,flat:!0,children:"Agregar"})})]})]})})})}var Z=n(8754),v=n(3883),C=n(7021),N=function(t){var e=t.categories,n=t.category,c=t.setCategory;return(0,r.jsx)("div",{className:"selector-container",children:e.length>1&&(0,r.jsxs)(C.ZP,{triggerType:"listbox",children:[(0,r.jsx)(C.ZP.Button,{className:"selector",children:n.name}),(0,r.jsx)(C.ZP.Menu,{"aria-label":"Dynamic Actions",items:e,selectedKeys:n.key,onAction:function(t){c(e.find((function(e){return e.key===t})))},children:e.map((function(t){return(0,r.jsx)(C.ZP.Item,{color:"delete"===t.key?"error":"default",children:t.name},t.key)}))})]})})},b=n(8662),k=n(1163),S=n(8366);function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A=!0;function E(t){var e=(0,x.j)(t.cart),n=(0,k.useRouter)(),f=(0,d.useState)([]),m=f[0],p=f[1],h=(0,d.useState)([{key:"",name:"Todos"}]),g=h[0],j=h[1],C=(0,d.useState)({key:"",name:"Todos"}),w=C[0],A=C[1],E=(0,d.useState)(1),T=E[0],q=E[1],I=(0,d.useState)(1),O=I[0],z=I[1],F=(0,d.useState)(!0),X=F[0],$=F[1];(0,d.useEffect)((function(){(0,b.o)(),(0,Z.Xp)().then((function(t){p(t.products),q(t.totalPages),$(!1)})),(0,Z.CP)().then((function(t){var e=[];t.map((function(t){return e.push({key:t.slug,name:t.name})})),j([{key:"",name:"Todos"}].concat(_(e)))}))}),[]);var B=function(t,e){(0,Z.Xp)(t,e.key).then((function(e){z(t),q(e.totalPages),p(e.products)}))};return(0,d.useEffect)((function(){z(1),B(1,w)}),[w]),(0,r.jsxs)(S.default,{children:[(0,r.jsx)(v.Z,{title:"Eleg\xed el rubro y encontr\xe1 tus productos",user:t.user,cart:e.Cart}),(0,r.jsxs)(c.Z,{css:{backgroundColor:"#fff",maxWidth:"1260px"},children:[(0,r.jsx)(o.Z,{css:{backgroundColor:"#fff"},children:(0,r.jsx)(N,{categories:g,setCategory:function(t){return A(t)},category:w})}),X?(0,r.jsx)(a.ZP,{css:{margin:"auto",width:"100%",paddingTop:"10vh"},color:"warning",children:"Cargando..."}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.ZP.Container,{gap:1,css:{padding:0,backgroundColor:"#fff"},children:m.map((function(t){return(0,r.jsx)(s.ZP,{xs:12,sm:12,md:6,lg:4,xl:4,children:(0,r.jsx)(P,{addProduct:function(t,n){return function(t,n){e.addProduct(t,n)}(t,n)},item:t},t.code)},t.code)}))}),(0,r.jsx)(s.ZP.Container,{gap:2,css:{padding:0},children:(0,r.jsx)(s.ZP,{justify:"center",md:12,lg:12,xl:12,xs:12,sm:12,children:(0,r.jsx)(i.ZP,{className:"paginator",initialPage:1,total:T,onChange:function(t){return B(t,w)},color:"warning",page:O})})})]})]}),e.Cart.products.length&&(0,r.jsx)("div",{className:"container-floating",children:(0,r.jsx)(u.ZP,{onClick:function(){return n.push("cart")},size:"xs",className:"button-floating",children:(0,r.jsxs)("div",{className:"button-content",children:[(0,r.jsxs)("div",{className:"cart-total",children:["$ ",e.Cart.total]}),(0,r.jsx)(l.ZP,{color:"warning",size:"sm",content:e.Cart.products.length,shape:"circle",onClick:function(){return n.push("/cart")},children:(0,r.jsx)(y.w,{fill:"white",size:24,width:24,height:24,onClick:function(){return n.push("/cart")}})})]})})})]})}},961:function(t,e,n){"use strict";n.d(e,{j:function(){return c}});var r=n(7294);function c(t){var e=(0,r.useState)({products:[],total:0}),n=e[0],c=e[1],o=function(t){var e=0;return t.map((function(t){return e=Number((e+t.total).toFixed(2))})),e},a=function(t,e){var r={code:t.code,name:t.name,qty:e,price:t.price,minimum:t.minimum,total:t.price*e,picture:t.picture},c=n.products;c.find((function(t){return t.code==r.code}))?c=c.map((function(t){return t.code==r.code?r:t})):c.push(r),s(c)},s=function(t){c({total:o(t),products:t}),localStorage.setItem("cart",JSON.stringify({total:o(t),products:t}))};return(0,r.useEffect)((function(){var e=localStorage.getItem("cart"),n=[];if(e){var r=JSON.parse(e);n=n.concat(r.products)}t&&t.products&&(n=n.concat(t.products)),n.map((function(t){return a(t,t.qty)}))}),[]),{Cart:n,addProduct:a,removeProduct:function(t){var e=n.products.filter((function(e){return e.code!==t.code}));s(e)},removeCart:function(){c({products:[],total:0}),localStorage.removeItem("cart")},updateProducts:s,getCartProductQty:function(t){var e=n.products.find((function(e){return e.code===t}));return e?e.qty:1}}}}},function(t){t.O(0,[523,139,710,218,608,249,774,888,179],(function(){return e=7153,t(t.s=e);var e}));var e=t.O();_N_E=e}]);