(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{577:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return r(491)}])},2235:function(e,n,r){"use strict";function t(e){var n=new Date(e),r=n.getUTCDate().toString(),t=(n.getUTCMonth()+1).toString();return 1===r.length&&(r="0"+r),1===t.length&&(t="0"+t),"".concat(r,"/").concat(t)}function o(e){var n=new Date(e),r=n.getHours().toString();1===r.length&&(r="0"+r);var t=n.getMinutes().toString();return 1===t.length&&(t="0"+t),"".concat(r,":").concat(t)}r.d(n,{D:function(){return o},f:function(){return t}})},491:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return H},default:function(){return $}});var t=r(5893),o=r(7294),i=r(3165),a=r(2553),s=r(8366),c=r(3883),l=r(8377),u=r(6979),d=r(7690),f=r(7501),h=r(8721);function j(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){j(e,n,r[n])}))}return e}var p=function(e){return e.setSeconds(0,0),e.toISOString().replace(/:00.\d+Z$/g,"")},g=function(e){if(!e)return"";var n=new Date(e);return n.setDate(n.getDate()+1),p(n)};function Z(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function v(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){Z(e,n,r[n])}))}return e}var P={openDate:"",closeDate:""},b={},m=function(e){var n,r,s=e.setEditing,c=e.setCurrentStatus,Z=function(e){var n=(0,o.useState)(e),r=n[0],t=n[1];return x({},r,{setValue:function(e,n){t(x({},r,j({},e,n)))},validateFields:function(e){var n={};return Object.keys(r).forEach((function(t){r[t]||(n=x({},n,j({},t,"".concat(e[t]))))})),Object.keys(n).length>0&&n},fields:r})}(P),m=(0,o.useState)(b),D=m[0],C=m[1],y=(0,o.useState)({error:null,loading:!1,done:!1}),S=y[0],O=y[1],w=p(new Date),E=function(e,n){var r=e.target.value;Z.setValue(n,r)};return(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(a.ZP.Container,{gap:3,justify:"center",children:[(0,t.jsxs)(a.ZP,{children:[(0,t.jsx)(l.ZP,{type:"datetime-local",label:"Fecha y hora de apertura",min:w,value:Z.openDate,onChange:function(e){return E(e,"openDate")}}),(0,t.jsx)(u.Z,{color:"error",children:null!==(n=D.openDate)&&void 0!==n?n:""})]}),(0,t.jsxs)(a.ZP,{children:[(0,t.jsx)(l.ZP,{type:"datetime-local",label:"Fecha y hora de cierre",disabled:""===Z.openDate,min:g(Z.openDate),value:Z.closeDate,onChange:function(e){return E(e,"closeDate")}}),(0,t.jsx)(u.Z,{color:"error",children:null!==(r=D.closeDate)&&void 0!==r?r:""})]})]}),(0,t.jsx)(d.ZP,{onClick:function(){return s(!1)},className:S.loading?"button-total-disabled":"button-cancel",children:"Cancelar"}),(0,t.jsx)(d.ZP,{onClick:function(){return function(){var e=Z.validateFields({openDate:"Debe ingresar una fecha de apertura",closeDate:"Debe ingresar una fecha de cierre"}),n=new Date(Z.closeDate)<=new Date(Z.openDate);return(e||n)&&C(null!==e&&void 0!==e?e:{openDate:"La fecha de cierre debe ser mayor que la de apertura"}),!e}()&&(O({error:null,done:!1,loading:!0}),(0,h.U)({url:"/api/admin/cart/dates",method:"POST",data:v({},Z.fields,{openDate:Z.fields.openDate.replace(".000Z",""),closeDate:Z.fields.closeDate.replace(".000Z","")}),onSuccess:function(e){c(e),O({error:null,loading:!1,done:!0})},onError:function(e){return O({error:"Ocurri\xf3 un error enviando las fechas",loading:!1,done:!0})}}),void s(!1))},className:S.loading?"button-total-disabled":"button-total",children:"Confirmar"}),(0,t.jsxs)(a.ZP.Container,{gap:2,direction:"column",justify:"center",children:[S.loading&&(0,t.jsx)(f.ZP,{color:"warning"}),S.done&&S.error&&(0,t.jsx)(u.Z,{children:S.error})]})]})},D=r(4051),C=r.n(D),y=r(3896),S=r(4040),O=function(e){var n=e.visible,r=e.close,o=e.onConfirm;return(0,t.jsxs)(y.ZP,{closeButton:!0,"aria-labelledby":"modal-title",open:n,onClose:r,children:[(0,t.jsx)(y.ZP.Header,{children:(0,t.jsx)(u.Z,{id:"modal-title",size:18,children:"\xbfDesea enviar todos los pedidos al Excel?"})}),(0,t.jsx)(S.Z,{css:{padding:10},children:(0,t.jsx)(u.Z,{size:16,children:"Los pedidos enviados ya no ser\xe1n accesibles para los usuarios."})}),(0,t.jsxs)(y.ZP.Footer,{children:[(0,t.jsx)(d.ZP,{auto:!0,flat:!0,color:"error",onClick:r,children:"Cancelar"}),(0,t.jsx)(d.ZP,{auto:!0,onClick:function(){r(),o()},children:"Enviar Pedidos"})]})]})};function w(e,n,r,t,o,i,a){try{var s=e[i](a),c=s.value}catch(l){return void r(l)}s.done?n(c):Promise.resolve(c).then(t,o)}var E=function(e){var n=e.ordersCount,r=e.setOrdersCount,s=e.status,c=(0,o.useState)({error:null,loading:!1,done:!1}),l=c[0],j=c[1],x=(0,o.useState)(!1),p=x[0],g=x[1],Z=function(){var e,n=(e=C().mark((function e(){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,h.U)({url:"/api/admin/orders",method:"POST",onSuccess:function(){r(0),j({error:null,loading:!1,done:!0})},onError:function(){j({error:"Ocurri\xf3 un error enviando los pedidos",loading:!1,done:!0})}});case 1:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){w(i,t,o,a,s,"next",e)}function s(e){w(i,t,o,a,s,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(a.ZP.Container,{justify:"center",direction:"column",alignItems:"center",children:[(0,t.jsx)(u.Z,{h3:!0,children:"Pedidos guardados hasta ahora (sin enviar)"}),(0,t.jsx)(u.Z,{h2:!0,children:n}),(0,t.jsx)(d.ZP,{disabled:"open"===s,onClick:function(){return g(!0)},className:l.loading||"open"===s?"button-total-disabled":"button-total",children:"Enviar pedidos"}),(0,t.jsx)(O,{visible:p,close:function(){return g(!1)},onConfirm:Z})]}),(0,t.jsxs)(a.ZP.Container,{gap:2,direction:"column",justify:"center",children:[l.loading&&(0,t.jsx)(f.ZP,{color:"warning"}),l.done&&(l.error?(0,t.jsx)(u.Z,{color:"error",children:l.error}):(0,t.jsx)(u.Z,{children:"Pedidos enviados con \xe9xito"}))]})]})},k=r(2235),_=function(e){var n=e.status,r=e.setEditing;return(0,t.jsx)(i.Z,{children:(0,t.jsxs)(a.ZP.Container,{justify:"center",direction:"column",alignItems:"center",children:[(0,t.jsx)(u.Z,{h3:!0,children:"Estado actual del carrito"}),(0,t.jsx)(u.Z,{h4:!0,children:{open:"Abierto",toOpen:"Abre pronto",closed:"Cerrado"}[n.status]}),(0,t.jsx)(a.ZP,{children:(0,t.jsxs)(u.Z,{children:["Abre: ",(0,t.jsx)("strong",{children:(0,k.f)(n.openDate)})," a las"," ",(0,t.jsx)("strong",{children:(0,k.D)(n.openDate)})]})}),(0,t.jsx)(a.ZP,{children:(0,t.jsxs)(u.Z,{children:["Cierra: ",(0,t.jsx)("strong",{children:(0,k.f)(n.closeDate)})," a las"," ",(0,t.jsx)("strong",{children:(0,k.D)(n.closeDate)})]})}),(0,t.jsx)(d.ZP,{onClick:function(){return r(!0)},className:"button-total",children:"Editar fechas"})]})})},N=r(8662),A=r(4375),T=function(e){var n=e.orders,r=n.reduce((function(e,n){return e+=n.total}),0);return(0,t.jsx)("div",{children:(0,t.jsxs)(A.ZP,{className:"orders-table",children:[(0,t.jsxs)(A.ZP.Header,{children:[(0,t.jsx)(A.ZP.Column,{children:"Usuario"}),(0,t.jsxs)(A.ZP.Column,{children:["Total de ordenes  $ ",r]})]}),(0,t.jsx)(A.ZP.Body,{children:n.map((function(e){return(0,t.jsxs)(A.ZP.Row,{children:[(0,t.jsx)(A.ZP.Cell,{children:e.email}),(0,t.jsxs)(A.ZP.Cell,{children:["$ ",e.total]})]},e.email)}))})]})})},U=r(9398),z=r(2814),F=r(5678),I=function(){var e=(0,o.useState)(!1),n=e[0],r=e[1];return(0,t.jsx)(d.ZP,{className:n?"button-total-disabled":"button-total",onClick:function(){r(!0),(0,h.U)({url:"/api/admin/update-products",onSuccess:function(e){r(!1),F.Am.warn("Productos actualizados exitosamente",{icon:(0,t.jsx)(z.G,{icon:U.f8k,color:"#EA903C"})})},onError:function(e){r(!1),F.Am.error("Ocurri\xf3 un error actualizando los productos",{icon:(0,t.jsx)(z.G,{icon:U.f8k,color:"#EA903C"})})}})},children:n?(0,t.jsx)(f.ZP,{}):"Actualizar productos"})},H=!0;function $(e){var n=(0,o.useState)(!1),r=n[0],l=n[1],u=(0,o.useState)(e.currentOrders.count),d=u[0],f=u[1],h=(0,o.useState)(e.currentStatus),j=h[0],x=h[1];return(0,o.useEffect)((function(){return(0,N.o)()}),[]),(0,t.jsxs)(s.default,{children:[(0,t.jsx)(c.Z,{user:e.user,title:"Panel de administrador"}),(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(a.ZP.Container,{justify:"center",alignItems:"center",gap:3,direction:"column",children:[(0,t.jsx)(a.ZP,{children:(0,t.jsx)(I,{})}),(0,t.jsx)(a.ZP,{xs:12,sm:10,md:8,lg:6,children:(0,t.jsx)(E,{ordersCount:d,setOrdersCount:f,status:e.currentStatus.status})}),(0,t.jsx)(a.ZP,{xs:12,sm:10,md:8,lg:6,children:r?(0,t.jsx)(m,{setEditing:l,setCurrentStatus:x,initialStatus:j}):(0,t.jsx)(_,{status:j,setEditing:l})})]}),d?(0,t.jsx)(T,{orders:e.currentOrders.orders}):""]})]})}}},function(e){e.O(0,[523,310,572,121,849,774,888,179],(function(){return n=577,e(e.s=n);var n}));var n=e.O();_N_E=n}]);