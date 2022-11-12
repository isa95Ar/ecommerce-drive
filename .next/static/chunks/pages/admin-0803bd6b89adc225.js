(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{577:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return r(5653)}])},2235:function(e,n,r){"use strict";function t(e){var n=new Date(e),r=n.getUTCDate().toString(),t=(n.getUTCMonth()+1).toString();return 1===r.length&&(r="0"+r),1===t.length&&(t="0"+t),"".concat(r,"/").concat(t)}function o(e){var n=new Date(e),r=n.getHours().toString();1===r.length&&(r="0"+r);var t=n.getMinutes().toString();return 1===t.length&&(t="0"+t),"".concat(r,":").concat(t)}r.d(n,{D:function(){return o},f:function(){return t}})},5653:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return F},default:function(){return I}});var t=r(5893),o=r(7294),a=r(3165),i=r(2553),c=r(8366),s=r(3883),l=r(1644),u=r(6979),d=r(7690),f=r(7501),h=r(8721);function j(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){j(e,n,r[n])}))}return e}var g=function(e){return e.setSeconds(0,0),e.toISOString().replace(/:00.\d+Z$/g,"")},p=function(e){if(!e)return"";var n=new Date(e);return n.setDate(n.getDate()+1),g(n)};function m(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function v(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){m(e,n,r[n])}))}return e}var P={openDate:"",closeDate:""},Z={},b=function(e){var n,r,c=e.setEditing,s=e.setCurrentStatus,m=function(e){var n=(0,o.useState)(e),r=n[0],t=n[1];return x({},r,{setValue:function(e,n){t(x({},r,j({},e,n)))},validateFields:function(e){var n={};return Object.keys(r).forEach((function(t){r[t]||(n=x({},n,j({},t,"".concat(e[t]))))})),Object.keys(n).length>0&&n},fields:r})}(P),b=(0,o.useState)(Z),D=b[0],y=b[1],C=(0,o.useState)({error:null,loading:!1,done:!1}),O=C[0],S=C[1],w=g(new Date),E=function(e,n){var r=e.target.value;m.setValue(n,r)};return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(i.ZP.Container,{gap:3,justify:"center",children:[(0,t.jsxs)(i.ZP,{children:[(0,t.jsx)(l.ZP,{type:"datetime-local",label:"Fecha y hora de apertura",min:w,value:m.openDate,onChange:function(e){return E(e,"openDate")}}),(0,t.jsx)(u.Z,{color:"error",children:null!==(n=D.openDate)&&void 0!==n?n:""})]}),(0,t.jsxs)(i.ZP,{children:[(0,t.jsx)(l.ZP,{type:"datetime-local",label:"Fecha y hora de cierre",disabled:""===m.openDate,min:p(m.openDate),value:m.closeDate,onChange:function(e){return E(e,"closeDate")}}),(0,t.jsx)(u.Z,{color:"error",children:null!==(r=D.closeDate)&&void 0!==r?r:""})]})]}),(0,t.jsx)(d.ZP,{onClick:function(){return c(!1)},className:O.loading?"button-total-disabled":"button-cancel",children:"Cancelar"}),(0,t.jsx)(d.ZP,{onClick:function(){return function(){var e=m.validateFields({openDate:"Debe ingresar una fecha de apertura",closeDate:"Debe ingresar una fecha de cierre"}),n=new Date(m.closeDate)<=new Date(m.openDate);return(e||n)&&y(null!==e&&void 0!==e?e:{openDate:"La fecha de cierre debe ser mayor que la de apertura"}),!e}()&&(S({error:null,done:!1,loading:!0}),(0,h.U)({url:"/api/admin/cart/dates",method:"POST",data:v({},m.fields,{openDate:m.fields.openDate.replace(".000Z",""),closeDate:m.fields.closeDate.replace(".000Z","")}),onSuccess:function(e){s(e),S({error:null,loading:!1,done:!0})},onError:function(e){return S({error:"Ocurri\xf3 un error enviando las fechas",loading:!1,done:!0})}}),void c(!1))},className:O.loading?"button-total-disabled":"button-total",children:"Confirmar"}),(0,t.jsxs)(i.ZP.Container,{gap:2,direction:"column",justify:"center",children:[O.loading&&(0,t.jsx)(f.ZP,{color:"warning"}),O.done&&O.error&&(0,t.jsx)(u.Z,{children:O.error})]})]})},D=r(4051),y=r.n(D);function C(e,n,r,t,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void r(l)}c.done?n(s):Promise.resolve(s).then(t,o)}var O=function(e){var n=e.ordersCount,r=e.setOrdersCount,c=(0,o.useState)({error:null,loading:!1,done:!1}),s=c[0],l=c[1],j=function(){var e,n=(e=y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,h.U)({url:"/api/admin/orders",method:"POST",onSuccess:function(){r(0),l({error:null,loading:!1,done:!0})},onError:function(){l({error:"Ocurri\xf3 un error enviando los pedidos",loading:!1,done:!0})}});case 1:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function i(e){C(a,t,o,i,c,"next",e)}function c(e){C(a,t,o,i,c,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(i.ZP.Container,{justify:"center",direction:"column",alignItems:"center",children:[(0,t.jsx)(u.Z,{h3:!0,children:"Pedidos guardados hasta ahora (sin enviar)"}),(0,t.jsx)(u.Z,{h2:!0,children:n}),(0,t.jsx)(d.ZP,{onClick:j,className:s.loading?"button-total-disabled":"button-total",children:"Enviar pedidos"})]}),(0,t.jsxs)(i.ZP.Container,{gap:2,direction:"column",justify:"center",children:[s.loading&&(0,t.jsx)(f.ZP,{color:"warning"}),s.done&&(s.error?(0,t.jsx)(u.Z,{color:"error",children:s.error}):(0,t.jsx)(u.Z,{children:"Pedidos enviados con \xe9xito"}))]})]})},S=r(2235),w=function(e){var n=e.status,r=e.setEditing;return(0,t.jsx)(a.Z,{children:(0,t.jsxs)(i.ZP.Container,{justify:"center",direction:"column",alignItems:"center",children:[(0,t.jsx)(u.Z,{h3:!0,children:"Estado actual del carrito"}),(0,t.jsx)(u.Z,{h4:!0,children:{open:"Abierto",toOpen:"Abre pronto",closed:"Cerrado"}[n.status]}),(0,t.jsx)(i.ZP,{children:(0,t.jsxs)(u.Z,{children:["Abre: ",(0,t.jsx)("strong",{children:(0,S.f)(n.openDate)})," a las"," ",(0,t.jsx)("strong",{children:(0,S.D)(n.openDate)})]})}),(0,t.jsx)(i.ZP,{children:(0,t.jsxs)(u.Z,{children:["Cierra: ",(0,t.jsx)("strong",{children:(0,S.f)(n.closeDate)})," a las"," ",(0,t.jsx)("strong",{children:(0,S.D)(n.closeDate)})]})}),(0,t.jsx)(d.ZP,{onClick:function(){return r(!0)},className:"button-total",children:"Editar fechas"})]})})},E=r(8662),k=r(4375),_=function(e){var n=e.orders;return(0,t.jsx)("div",{children:(0,t.jsxs)(k.ZP,{className:"orders-table",children:[(0,t.jsxs)(k.ZP.Header,{children:[(0,t.jsx)(k.ZP.Column,{children:"Usuario"}),(0,t.jsx)(k.ZP.Column,{children:"Total"})]}),(0,t.jsx)(k.ZP.Body,{children:n.map((function(e){return(0,t.jsxs)(k.ZP.Row,{children:[(0,t.jsx)(k.ZP.Cell,{children:e.email}),(0,t.jsxs)(k.ZP.Cell,{children:["$ ",e.total]})]},e.email)}))})]})})},N=r(9398),A=r(2814),T=r(5678),U=function(){var e=(0,o.useState)(!1),n=e[0],r=e[1];return(0,t.jsx)(d.ZP,{className:n?"button-total-disabled":"button-total",onClick:function(){r(!0),(0,h.U)({url:"/api/admin/update-products",onSuccess:function(e){r(!1),T.Am.warn("Productos actualizados exitosamente",{icon:(0,t.jsx)(A.G,{icon:N.f8k,color:"#EA903C"})})},onError:function(e){r(!1),T.Am.error("Ocurri\xf3 un error actualizando los productos",{icon:(0,t.jsx)(A.G,{icon:N.f8k,color:"#EA903C"})})}})},children:n?(0,t.jsx)(f.ZP,{}):"Actualizar productos"})},F=!0;function I(e){var n=(0,o.useState)(!1),r=n[0],l=n[1],u=(0,o.useState)(e.currentOrders.count),d=u[0],f=u[1],h=(0,o.useState)(e.currentStatus),j=h[0],x=h[1];return(0,o.useEffect)((function(){return(0,E.o)()}),[]),(0,t.jsxs)(c.default,{children:[(0,t.jsx)(s.Z,{user:e.user,title:"Panel de administrador"}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(i.ZP.Container,{justify:"center",alignItems:"center",gap:3,direction:"column",children:[(0,t.jsx)(i.ZP,{children:(0,t.jsx)(U,{})}),(0,t.jsx)(i.ZP,{xs:12,sm:10,md:8,lg:6,children:(0,t.jsx)(O,{ordersCount:d,setOrdersCount:f})}),(0,t.jsx)(i.ZP,{xs:12,sm:10,md:8,lg:6,children:r?(0,t.jsx)(b,{setEditing:l,setCurrentStatus:x,initialStatus:j}):(0,t.jsx)(w,{status:j,setEditing:l})})]}),d?(0,t.jsx)(_,{orders:e.currentOrders.orders}):""]})]})}}},function(e){e.O(0,[523,943,870,72,375,849,774,888,179],(function(){return n=577,e(e.s=n);var n}));var n=e.O();_N_E=n}]);