(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{577:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n(2978)}])},5141:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),o=(n(7294),n(7690)),i=n(189),c=n(6979),u=n(1163);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=function(e){var t=e.fill,n=void 0===t?"currentColor":t,o=e.size,i=e.height,c=e.width,u=l(e,["fill","size","height","width"]);return(0,r.jsx)("div",{style:{cursor:"pointer"},children:(0,r.jsxs)("svg",s({width:o||c||24,height:o||i||24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u,{children:[(0,r.jsx)("path",{d:"M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z",fill:n}),(0,r.jsx)("path",{d:"M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z",fill:n}),(0,r.jsx)("path",{d:"M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.93 21.55 6.51C21.68 4.74 20.33 3.3 18.56 3.3H6.27C6.17 2.86 5.97 2.44 5.66 2.09C5.16 1.56 4.46 1.25 3.74 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74C4.05 2.75 4.34 2.88 4.55 3.1C4.76 3.33 4.86 3.63 4.84 3.94Z",fill:n}),(0,r.jsx)("path",{d:"M20.5101 8.75H5.17005C4.75005 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.54 5.21005 17 6.92005 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.6C21.3401 9.14 20.9801 8.75 20.5101 8.75Z",fill:n})]}))})},d=function(e){var t=e.title,n=e.user,a=e.cart,s=(0,u.useRouter)();return(0,r.jsxs)("div",{className:"header",children:[n.logged&&(0,r.jsxs)("div",{className:"logout-button",children:[(0,r.jsxs)(o.ZP,{className:"logout-button",onClick:function(){return s.push("/api/logout")},children:["Cerrar Session (",n.name,")"]}),a&&(0,r.jsx)(i.ZP,{css:{cursor:"pointer"},color:"warning",content:a.products.length,shape:"circle",children:(0,r.jsx)(f,{fill:"white",size:30,width:24,height:24,onClick:function(){return s.push("/cart")}})})]}),(0,r.jsx)(c.Z,{className:"header-text",children:t})]})}},8754:function(e,t,n){"use strict";n.d(t,{CP:function(){return y},g4:function(){return g},Xp:function(){return j}});var r=n(4051),o=n.n(r);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,n){return(u=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&l(o,n.prototype),o}).apply(null,arguments)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?i(e):t}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t="function"===typeof Map?new Map:void 0;return d=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return u(e,arguments,a(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,e)},d(e)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,e);var t=h(n);function n(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),r=t.call(this,e),Object.setPrototypeOf(i(r),n.prototype),r}return n.prototype.jsonOutPut=function(){return{error:!0,message:this.message}},n}(d(Error));function v(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(s){return void n(s)}u.done?t(a):Promise.resolve(a).then(r,o)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){v(i,r,o,c,u,"next",e)}function u(e){v(i,r,o,c,u,"throw",e)}c(void 0)}))}}var j=function(){var e=x(o().mark((function e(){var t,n,r,i,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,n=c.length>1&&void 0!==c[1]?c[1]:null,r="/api/products",n&&(r+="/"+n),e.next=5,fetch("".concat(r,"?page=").concat(t)).then((function(e){return e.json()}));case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=x(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/categories").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=(function(){var e=x(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/cart/status").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))}(),function(){var e=x(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/admin/orders/to-post").then((function(e){return e.json()}));case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),new p(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}())},2978:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return m},default:function(){return w}});var r=n(5893),o=n(7294),i=n(3165),c=n(2553),u=n(1713),a=n(5141),s=n(4051),l=n.n(s),f=n(2049),d=n(6979),h=n(7690),p=n(7501);function v(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(s){return void n(s)}u.done?t(a):Promise.resolve(a).then(r,o)}var x=function(e){var t=e.setEditing,n=function(e){return e.toISOString().split("T")[0]},u=(0,o.useState)(""),a=u[0],s=u[1],x=(0,o.useState)(""),j=x[0],y=x[1],g=(0,o.useState)(""),b=g[0],m=g[1],w=(0,o.useState)(""),P=w[0],C=w[1],Z=(0,o.useState)({error:null,loading:!1,done:!1}),O=Z[0],S=Z[1],_=n(new Date),k=function(){var e,t=(e=l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S({error:null,done:!1,loading:!0}),e.next=4,fetch("/api/admin/cart/dates",{method:"POST",body:JSON.stringify({openDate:a,closeDate:j})});case 4:S({error:null,loading:!1,done:!0}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),S({error:"Ocurri\xf3 un error enviando las fechas",loading:!1,done:!0}),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){v(i,r,o,c,u,"next",e)}function u(e){v(i,r,o,c,u,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(c.ZP.Container,{gap:3,justify:"center",children:[(0,r.jsxs)(c.ZP,{children:[(0,r.jsx)(f.ZP,{type:"date",label:"Nueva fecha de apertura",min:_,value:a,onChange:function(e){var t=e.target.value;m(""),C(""),s(t);var r=new Date(t);t&&(r.setDate(r.getDate()+1),y(n(r)))}}),(0,r.jsx)(d.Z,{color:"error",children:b})]}),(0,r.jsxs)(c.ZP,{children:[(0,r.jsx)(f.ZP,{type:"date",label:"Nueva fecha de cierre",disabled:""===a,min:function(){if(!a)return"";var e=new Date(a);return e.setDate(e.getDate()+1),n(e)}(),value:j,onChange:function(e){C(""),y(e.target.value)}}),(0,r.jsx)(d.Z,{color:"error",children:P})]})]}),(0,r.jsx)(h.ZP,{onClick:function(){return t(!1)},className:O.loading?"button-total-disabled":"button-cancel",children:"Cancelar"}),(0,r.jsx)(h.ZP,{onClick:function(){(function(){m(""),C("");var e=!0;return a||(m("Debe ingresar una fecha de apertura"),e=!1),j||(C("Debe ingresar una fecha de cierre"),e=!1),a&&j&&new Date(j)<=new Date(a)&&(C("La fecha de cierre debe ser mayor que la de apertura"),e=!1),e})()&&k()},className:O.loading?"button-total-disabled":"button-total",children:"Confirmar"}),(0,r.jsxs)(c.ZP.Container,{gap:2,direction:"column",justify:"center",children:[O.loading&&(0,r.jsx)(p.ZP,{color:"warning"}),O.done&&(O.error?(0,r.jsx)(d.Z,{children:O.error}):(0,r.jsx)(d.Z,{children:"Las fechas se guardaron exitosamente"}))]})]})},j=n(8754);function y(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(s){return void n(s)}u.done?t(a):Promise.resolve(a).then(r,o)}var g=function(e){var t=e.ordersCount,n=function(){var e,t=(e=l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,j.g4)();case 3:return t=e.sent.orders,e.next=6,fetch("/api/admin/orders",{method:"POST",body:JSON.stringify({orders:t})});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){y(i,r,o,c,u,"next",e)}function u(e){y(i,r,o,c,u,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,r.jsx)(i.Z,{children:(0,r.jsxs)(c.ZP.Container,{justify:"center",direction:"column",alignItems:"center",children:[(0,r.jsx)(d.Z,{h3:!0,children:"Pedidos realizados hasta ahora"}),(0,r.jsx)(d.Z,{h2:!0,children:t}),(0,r.jsx)(h.ZP,{onClick:n,className:"button-total",children:"Enviar pedidos"})]})})},b=function(e){var t=e.status,n=e.setEditing;return(0,r.jsx)(i.Z,{children:(0,r.jsxs)(c.ZP.Container,{justify:"center",direction:"column",alignItems:"center",children:[(0,r.jsx)(d.Z,{h3:!0,children:"Estado actual del carrito"}),(0,r.jsx)(d.Z,{h4:!0,children:{open:"Abierto",toOpen:"Abre pronto",closed:"Cerrado"}[t.status]}),(0,r.jsxs)(c.ZP.Container,{justify:"space-around",children:[(0,r.jsx)(c.ZP,{children:(0,r.jsxs)(d.Z,{children:["Fecha de apertura: ",(0,r.jsx)("strong",{children:t.openDate})]})}),(0,r.jsx)(c.ZP,{children:(0,r.jsxs)(d.Z,{children:["Fecha de cierre: ",(0,r.jsx)("strong",{children:t.closeDate})]})})]}),(0,r.jsx)(h.ZP,{onClick:function(){return n(!0)},className:"button-total",children:"Editar fechas"})]})})},m=!0;function w(e){var t=(0,o.useState)(!1),n=t[0],s=t[1];return(0,r.jsxs)(u.default,{children:[(0,r.jsx)(a.Z,{user:e.user,title:"Panel de administrador"}),(0,r.jsx)(i.Z,{children:(0,r.jsxs)(c.ZP.Container,{justify:"center",alignItems:"center",gap:4,children:[(0,r.jsx)(c.ZP,{xs:12,sm:10,md:6,lg:4,children:(0,r.jsx)(g,{ordersCount:e.ordersCount})}),(0,r.jsx)(c.ZP,{xs:12,sm:10,md:6,lg:4,children:n?(0,r.jsx)(x,{setEditing:s}):(0,r.jsx)(b,{status:e.currentStatus,setEditing:s})})]})})]})}},1713:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(9008),i=n.n(o);t.default=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"AlMargen | Del otro lado de tu mesa"}),(0,r.jsx)("meta",{content:"width=device-width, initial-scale=1.0",name:"viewport"})]}),(0,r.jsx)("div",{children:t})]})}}},function(e){e.O(0,[258,187,597,774,888,179],(function(){return t=577,e(e.s=t);var t}));var t=e.O();_N_E=t}]);