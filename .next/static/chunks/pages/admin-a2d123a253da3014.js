(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{577:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return r(5653)}])},724:function(e,n,r){"use strict";r.d(n,{CP:function(){return u},Xp:function(){return s},g4:function(){return l}});var t=r(4051),o=r.n(t),a=r(8721);function i(e,n,r,t,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void r(u)}c.done?n(s):Promise.resolve(s).then(t,o)}function c(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function c(e){i(a,t,o,c,s,"next",e)}function s(e){i(a,t,o,c,s,"throw",e)}c(void 0)}))}}var s=function(){var e=c(o().mark((function e(){var n,r,t,i=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:1,r=i.length>1&&void 0!==i[1]?i[1]:"",t=i.length>2&&void 0!==i[2]?i[2]:"",e.next=3,(0,a.U)({url:"/api/products",query:{category:r,search:t,page:n}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=c(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.U)({url:"/api/categories"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=(function(){var e=c(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.U)({url:"/api/cart/status"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))}(),function(){var e=c(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.U)({url:"/api/admin/orders/to-post"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}())},2235:function(e,n,r){"use strict";function t(e){var n=new Date(e),r=n.getUTCDate().toString(),t=(n.getUTCMonth()+1).toString();return 1===r.length&&(r="0"+r),1===t.length&&(t="0"+t),"".concat(r,"/").concat(t)}function o(e){var n=new Date(e),r=n.getHours().toString();1===r.length&&(r="0"+r);var t=n.getMinutes().toString();return 1===t.length&&(t="0"+t),"".concat(r,":").concat(t)}r.d(n,{D:function(){return o},f:function(){return t}})},5653:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return I},default:function(){return z}});var t=r(5893),o=r(7294),a=r(3165),i=r(2553),c=r(8366),s=r(3883),u=r(4938),l=r(6979),d=r(7690),f=r(7501),h=r(8721);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){p(e,n,r[n])}))}return e}var x=function(e){return e.setSeconds(0,0),e.toISOString().replace(/:00.\d+Z$/g,"")},v=function(e){if(!e)return"";var n=new Date(e);return n.setDate(n.getDate()+1),x(n)};function g(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function m(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){g(e,n,r[n])}))}return e}var b={openDate:"",closeDate:""},P={},Z=function(e){var n,r,c=e.setEditing,s=e.setCurrentStatus,g=function(e){var n=(0,o.useState)(e),r=n[0],t=n[1];return j({},r,{setValue:function(e,n){t(j({},r,p({},e,n)))},validateFields:function(e){var n={};return Object.keys(r).forEach((function(t){r[t]||(n=j({},n,p({},t,"".concat(e[t]))))})),Object.keys(n).length>0&&n},fields:r})}(b),Z=(0,o.useState)(P),y=Z[0],D=Z[1],w=(0,o.useState)({error:null,loading:!1,done:!1}),C=w[0],O=w[1],S=x(new Date),E=function(e,n){var r=e.target.value;g.setValue(n,r)};return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(i.ZP.Container,{gap:3,justify:"center",children:[(0,t.jsxs)(i.ZP,{children:[(0,t.jsx)(u.ZP,{type:"datetime-local",label:"Fecha y hora de apertura",min:S,value:g.openDate,onChange:function(e){return E(e,"openDate")}}),(0,t.jsx)(l.Z,{color:"error",children:null!==(n=y.openDate)&&void 0!==n?n:""})]}),(0,t.jsxs)(i.ZP,{children:[(0,t.jsx)(u.ZP,{type:"datetime-local",label:"Fecha y hora de cierre",disabled:""===g.openDate,min:v(g.openDate),value:g.closeDate,onChange:function(e){return E(e,"closeDate")}}),(0,t.jsx)(l.Z,{color:"error",children:null!==(r=y.closeDate)&&void 0!==r?r:""})]})]}),(0,t.jsx)(d.ZP,{onClick:function(){return c(!1)},className:C.loading?"button-total-disabled":"button-cancel",children:"Cancelar"}),(0,t.jsx)(d.ZP,{onClick:function(){return function(){var e=g.validateFields({openDate:"Debe ingresar una fecha de apertura",closeDate:"Debe ingresar una fecha de cierre"}),n=new Date(g.closeDate)<=new Date(g.openDate);return(e||n)&&D(null!==e&&void 0!==e?e:{openDate:"La fecha de cierre debe ser mayor que la de apertura"}),!e}()&&(O({error:null,done:!1,loading:!0}),(0,h.U)({url:"/api/admin/cart/dates",method:"POST",data:m({},g.fields,{openDate:g.fields.openDate.replace(".000Z",""),closeDate:g.fields.closeDate.replace(".000Z","")}),onSuccess:function(e){s(e),O({error:null,loading:!1,done:!0})},onError:function(e){return O({error:"Ocurri\xf3 un error enviando las fechas",loading:!1,done:!0})}}),void c(!1))},className:C.loading?"button-total-disabled":"button-total",children:"Confirmar"}),(0,t.jsxs)(i.ZP.Container,{gap:2,direction:"column",justify:"center",children:[C.loading&&(0,t.jsx)(f.ZP,{color:"warning"}),C.done&&C.error&&(0,t.jsx)(l.Z,{children:C.error})]})]})},y=r(4051),D=r.n(y),w=r(724);function C(e,n,r,t,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void r(u)}c.done?n(s):Promise.resolve(s).then(t,o)}var O=function(e){var n=e.ordersCount,r=e.setOrdersCount,c=(0,o.useState)({error:null,loading:!1,done:!1}),s=c[0],u=c[1],p=function(){var e,n=(e=D().mark((function e(){var n;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.g4)();case 2:n=e.sent.orders,(0,h.U)({url:"/api/admin/orders",method:"POST",data:{orders:n},onSuccess:function(){r(0),u({error:null,loading:!1,done:!0})},onError:function(){u({error:"Ocurri\xf3 un error enviando los pedidos",loading:!1,done:!0})}});case 4:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function i(e){C(a,t,o,i,c,"next",e)}function c(e){C(a,t,o,i,c,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(i.ZP.Container,{justify:"center",direction:"column",alignItems:"center",children:[(0,t.jsx)(l.Z,{h3:!0,children:"Pedidos guardados hasta ahora (sin enviar)"}),(0,t.jsx)(l.Z,{h2:!0,children:n}),(0,t.jsx)(d.ZP,{onClick:p,className:s.loading?"button-total-disabled":"button-total",children:"Enviar pedidos"})]}),(0,t.jsxs)(i.ZP.Container,{gap:2,direction:"column",justify:"center",children:[s.loading&&(0,t.jsx)(f.ZP,{color:"warning"}),s.done&&(s.error?(0,t.jsx)(l.Z,{color:"error",children:s.error}):(0,t.jsx)(l.Z,{children:"Pedidos enviados con \xe9xito"}))]})]})},S=r(2235),E=function(e){var n=e.status,r=e.setEditing;return(0,t.jsx)(a.Z,{children:(0,t.jsxs)(i.ZP.Container,{justify:"center",direction:"column",alignItems:"center",children:[(0,t.jsx)(l.Z,{h3:!0,children:"Estado actual del carrito"}),(0,t.jsx)(l.Z,{h4:!0,children:{open:"Abierto",toOpen:"Abre pronto",closed:"Cerrado"}[n.status]}),(0,t.jsx)(i.ZP,{children:(0,t.jsxs)(l.Z,{children:["Abre: ",(0,t.jsx)("strong",{children:(0,S.f)(n.openDate)})," a las"," ",(0,t.jsx)("strong",{children:(0,S.D)(n.openDate)})]})}),(0,t.jsx)(i.ZP,{children:(0,t.jsxs)(l.Z,{children:["Cierra: ",(0,t.jsx)("strong",{children:(0,S.f)(n.closeDate)})," a las"," ",(0,t.jsx)("strong",{children:(0,S.D)(n.closeDate)})]})}),(0,t.jsx)(d.ZP,{onClick:function(){return r(!0)},className:"button-total",children:"Editar fechas"})]})})},k=r(8662),_=r(4375),N=function(e){var n=e.orders;return(0,t.jsx)("div",{children:(0,t.jsxs)(_.ZP,{className:"orders-table",children:[(0,t.jsxs)(_.ZP.Header,{children:[(0,t.jsx)(_.ZP.Column,{children:"Usuario"}),(0,t.jsx)(_.ZP.Column,{children:"Total"})]}),(0,t.jsx)(_.ZP.Body,{children:n.map((function(e){return(0,t.jsxs)(_.ZP.Row,{children:[(0,t.jsx)(_.ZP.Cell,{children:e.email}),(0,t.jsxs)(_.ZP.Cell,{children:["$ ",e.total]})]},e.email)}))})]})})},U=r(9398),A=r(2814),T=r(5678),F=function(){var e=(0,o.useState)(!1),n=e[0],r=e[1];return(0,t.jsx)(d.ZP,{className:n?"button-total-disabled":"button-total",onClick:function(){r(!0),(0,h.U)({url:"/api/admin/update-products",onSuccess:function(e){r(!1),T.Am.warn("Productos actualizados exitosamente",{icon:(0,t.jsx)(A.G,{icon:U.f8k,color:"#EA903C"})})},onError:function(e){r(!1),T.Am.error("Ocurri\xf3 un error actualizando los productos",{icon:(0,t.jsx)(A.G,{icon:U.f8k,color:"#EA903C"})})}})},children:n?(0,t.jsx)(f.ZP,{}):"Actualizar productos"})},I=!0;function z(e){var n=(0,o.useState)(!1),r=n[0],u=n[1],l=(0,o.useState)(e.currentOrders.count),d=l[0],f=l[1],h=(0,o.useState)(e.currentStatus),p=h[0],j=h[1];return(0,o.useEffect)((function(){return(0,k.o)()}),[]),(0,t.jsxs)(c.default,{children:[(0,t.jsx)(s.Z,{user:e.user,title:"Panel de administrador"}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(i.ZP.Container,{justify:"center",alignItems:"center",gap:3,direction:"column",children:[(0,t.jsx)(i.ZP,{children:(0,t.jsx)(F,{})}),(0,t.jsx)(i.ZP,{xs:12,sm:10,md:8,lg:6,children:(0,t.jsx)(O,{ordersCount:d,setOrdersCount:f})}),(0,t.jsx)(i.ZP,{xs:12,sm:10,md:8,lg:6,children:r?(0,t.jsx)(Z,{setEditing:u,setCurrentStatus:j,initialStatus:p}):(0,t.jsx)(E,{status:p,setEditing:u})})]}),d?(0,t.jsx)(N,{orders:e.currentOrders.orders}):""]})]})}}},function(e){e.O(0,[523,3,871,375,849,774,888,179],(function(){return n=577,e(e.s=n);var n}));var n=e.O();_N_E=n}]);