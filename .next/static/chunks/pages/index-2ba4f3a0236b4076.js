(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8773:function(e,r,s){"use strict";s.d(r,{ZP:function(){return $}});var i=s(5328),o=s(5024),n=s(7294),t=s(8375),a=s(3569),l=s(9641),c=s(3952),d=s(7354),u=s(9260),h=s(2903);var x=s(275),g=s(9975);const f=(0,x.zo)("div",{d:"flex",w:"100%",h:"auto",flex:"1 1 auto",fd:"column",jc:"inherit",ai:"inherit",ac:"inherit",py:"$lg",px:"$sm",oy:"auto",position:"relative",ta:"left"}),p=(0,x.zo)("div",{$$cardColor:"$colors$backgroundContrast",$$cardTextColor:"$colors$text",m:0,p:0,br:"$lg",bg:"$$cardColor",color:"$$cardTextColor",position:"relative",display:"flex",overflow:"hidden",fd:"column",width:"100%",height:"auto",boxSizing:"border-box","@motion":{transition:"none"},".nextui-image":{width:"100%"},[`& ${t.q}`]:{zIndex:"$1",".nextui-drip-filler":{opacity:.25,fill:"$accents6"}},variants:{variant:{flat:{bg:"$accents0"},shadow:{dropShadow:"$lg","@safari":{boxShadow:"$lg",dropShadow:"none"}},bordered:{borderStyle:"solid",borderColor:"$border"}},borderWeight:{light:{bw:"$light"},normal:{bw:"$normal"},bold:{bw:"$bold"},extrabold:{bw:"$extrabold"},black:{bw:"$black"}},disableAnimation:{true:{transition:"none"},false:{transition:"$card"}},isPressable:{true:{cursor:"pointer",us:"none",WebkitTapHighlightColor:"transparent"}},isPressed:{true:{}},isHovered:{true:{dropShadow:"$lg","@safari":{boxShadow:"$lg",dropShadow:"none"}}}},compoundVariants:[{isPressed:!0,disableAnimation:!1,css:{transform:"scale(0.97)"}},{isHovered:!0,disableAnimation:!1,css:{transform:"translateY(-2px)"}},{isHovered:!0,variant:"shadow",css:{dropShadow:"$xl","@safari":{boxShadow:"$xl",dropShadow:"none"}}}]},g.UU,g.BM),b=(0,x.zo)("div",{w:"100%",display:"flex",flexShrink:0,zIndex:"$1",jc:"flex-start",ai:"center",overflow:"hidden",color:"inherit",p:"$sm"}),m=(0,x.zo)("div",{w:"100%",h:"auto",p:"$sm",d:"flex",ai:"center",overflow:"hidden",color:"inherit",bblr:"$lg",bbrr:"$lg",variants:{isBlurred:{true:{bf:"saturate(180%) blur(10px)",bg:"$$cardColor"}}}});var v=s(5893);const j=n.forwardRef((({...e},r)=>{const{as:s,css:i,children:o,...a}=e,{cardRef:x,variant:g,isFocusVisible:f,isPressable:b,isPressed:m,disableAnimation:j,disableRipple:w,borderWeight:$,isHovered:y,getCardProps:P,dripBindings:C}=(e=>{const{ref:r,disableAnimation:s=!1,disableRipple:i=!1,variant:o="shadow",isHoverable:t=!1,borderWeight:a="light",isPressable:x=!1,onClick:g,onPress:f,autoFocus:p,allowTextSelectionOnPress:b=!0,...m}=e,v=(0,h.gy)(r),{onClick:j,...w}=(0,u.Z)(!1,v),$=e=>{s||i||!v.current||j(e)},{isPressed:y,pressProps:P}=(0,d.r7)({isDisabled:!x,onPress:e=>{"keyboard"!==e.pointerType&&"virtual"!==e.pointerType||($(e),null==g||g(e)),null==f||f(e)},allowTextSelectionOnPress:b,...m}),{hoverProps:C,isHovered:k}=(0,d.XI)({isDisabled:!t,...m}),{isFocusVisible:Z,focusProps:S}=(0,l.Fx)({autoFocus:p});P.onClick=e=>{x&&($(e),null==g||g(e))};const F=(0,n.useCallback)(((e={})=>({...(0,c.dG)(x?{...P,...S}:{},t?C:{},m,e)})),[x,t,P,S,C,m]);return{cardRef:v,variant:o,borderWeight:a,isPressable:x,isHovered:k,isPressed:y,disableAnimation:s,disableRipple:i,dripBindings:w,onDripClickHandler:j,isFocusVisible:Z,getCardProps:F}})({...a,ref:r});return(0,v.jsxs)(p,{ref:x,as:s,borderWeight:$,css:i,disableAnimation:j,isFocusVisible:f,isHovered:y,isPressable:b,isPressed:m,role:b?"button":"section",tabIndex:b?0:-1,variant:g,...P(),children:[b&&!j&&!w&&(0,v.jsx)(t.Z,{...C}),o]})}));a.Ts&&(j.displayName="NextUI.Card"),j.toString=()=>".nextui-card";var w=j;w.Header=b,w.Body=f,w.Footer=m,w.Image=i.ZP,w.Divider=o.ZP;var $=w},5024:function(e,r,s){"use strict";s.d(r,{ZP:function(){return h}});var i=s(7294),o=s(88);const n=e=>`calc(${15.25*e}pt + 1px * ${e-1})`;var t=s(275);const a=(0,t.zo)("div",{width:"100%",maxWidth:"100%",position:"relative",variants:{color:{default:{bg:"$border"},primary:{bg:"$primary"},secondary:{bg:"$secondary"},success:{bg:"$success"},warning:{bg:"$warning"},error:{bg:"$error"}}},defaultVariants:{color:"default"}}),l=(0,t.zo)("span",{position:"absolute",left:"50%",top:"50%",minHeight:"100%",display:"inline-flex",jc:"center",ai:"center",transform:"translate(-50%, -50%)",padding:"0 $lg",fontSize:"$base",fontWeight:"bold",textTransform:"capitalize",backgroundColor:"$background",zIndex:"$1",variants:{color:{default:{color:"$text"},primary:{color:"$primary"},secondary:{color:"$secondary"},success:{color:"$success"},warning:{color:"$warning"},error:{color:"$error"}}}});var c=s(5893);const d=({height:e,x:r,y:s,align:o,children:t,textColor:d,css:u,...h})=>{const x=(0,i.useMemo)((()=>o&&"center"!==o?"left"===o||"start"===o?{transform:"translateY(-50%)",left:"7%"}:{transform:"translateY(-50%)",left:"auto",right:"7%"}:""),[o]),g=s?n(s/2):0,f=r?n(r/2):0;return(0,c.jsx)(a,{css:{margin:`${g} ${f}`,height:`calc(${e} * 1px)`,...u},role:"separator",...h,children:t&&(0,c.jsx)(l,{className:"nextui-divider-text",color:d,css:{...x},children:t})})};d.toString=()=>".nextui-divider";const u=i.memo(d);var h=(0,o.Z)(u,{x:0,y:0,height:1,align:"center"})},8312:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(725)}])},8662:function(e,r,s){"use strict";s.d(r,{o:function(){return o}});var i=s(5678),o=function(){switch(location.href.split("#")[1]){case"logout":i.Am.info("Se ha deslogeado");break;case"logged":i.Am.success("Inicio de sesion exitoso!");break;case"unauthorized":i.Am.error("No se encuentra autorizado")}}},725:function(e,r,s){"use strict";s.r(r),s.d(r,{__N_SSP:function(){return y},default:function(){return P}});var i=s(5893),o=s(8366),n=s(2553),t=s(5328),a=s(7690),l=s(6979),c=s(7294),d=function(e){var r=e.height,s=void 0===r?48:r,o=e.width,n=void 0===o?48:o;return(0,i.jsx)("div",{style:{cursor:"pointer",display:"flex",alignSelf:"center",justifyItems:"center",alignContent:"center"},children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"".concat(n,"px"),height:"".concat(s,"px"),children:[(0,i.jsx)("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),(0,i.jsx)("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),(0,i.jsx)("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),(0,i.jsx)("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})]})})};function u(){return(0,i.jsx)(n.ZP,{className:"login",children:(0,i.jsxs)(n.ZP.Container,{justify:"center",alignContent:"center",children:[(0,i.jsx)(n.ZP,{xs:12,xl:12,css:{zIndex:9e3},children:(0,i.jsx)(t.ZP,{src:"/img/logoCoop.png",alt:"Default Image"})}),(0,i.jsx)(n.ZP,{xs:12,xl:3,sm:6,md:3,lg:3,children:(0,i.jsx)(a.ZP,{className:"google-button",onClick:function(){return location.href="/api/login"},children:(0,i.jsxs)("div",{className:"button-container",children:[(0,i.jsx)(d,{width:30,height:30}),(0,i.jsx)(l.Z,{style:{marginLeft:5},children:"Ingres\xe1 con Google"})]})})})]})})}var h=s(3165),x=s(8773),g=s(9398),f=s(2814),p=s(7087);function b(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,i.jsx)(f.G,{icon:g.eFW,color:"white",style:{alignSelf:"center"}}),(0,i.jsxs)(p.ZP,{block:!0,href:"#",className:"link-container",underline:!0,children:[" ","Visit\xe1 Nuestra p\xe1gina"]})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,i.jsx)(f.G,{icon:g.eFW,color:"white",style:{alignSelf:"center"}}),(0,i.jsxs)(p.ZP,{block:!0,href:"#",className:"link-container",underline:!0,children:[" ","Unite a la comunidad"]})]})]})}var m="/_next/static/media/BgImgAviso.a3213864.jpg";function v(e){var r,s=e.status,o=s.openDate,n="white",t={imgStyle:{backgroundImage:"url(".concat(m,")"),height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover"},linkStyle:{color:"white"},avisoStyle:{color:"white"}};"url(".concat(m,")");return r=t,(0,i.jsx)("div",{style:r.imgStyle,children:(0,i.jsxs)(h.Z,{fluid:!0,children:[(0,i.jsx)(x.ZP,{css:{height:"40vh",background:"none"},children:" "}),"open"===s.status?(0,i.jsx)("div",{children:(0,i.jsxs)(l.Z,{h1:!0,css:{color:n},children:["\xbfYa hiciste tu pedido de este mes?"," "]})}):"toOpen"===s.status?(0,i.jsx)("div",{children:(0,i.jsxs)(l.Z,{h1:!0,css:{color:n},children:["El carrito abre el"," ",o]})}):(0,i.jsxs)("div",{children:[(0,i.jsxs)(l.Z,{h1:!0,css:{color:n},children:["El carrito ya est\xe1 cerrado."," "]}),(0,i.jsxs)(l.Z,{h4:!0,css:{color:n},children:["Nos vemos la pr\xf3xima semana."," "]})]}),(0,i.jsx)(b,{})]})})}var j=s(1163),w=s(8662);function $(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}var y=!0;function P(e){var r=(0,j.useRouter)();(0,c.useEffect)((function(){(0,w.o)(),e.user.logged&&"open"===e.cartStatus.status&&r.push("/products")}),[]);return(0,i.jsx)(o.default,function(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{},i=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),i.forEach((function(r){$(e,r,s[r])}))}return e}({},e,{children:e.user.logged?(0,i.jsx)(v,{status:e.cartStatus}):(0,i.jsx)(u,{})}))}},8366:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return g}});var i=s(5893),o=s(9008),n=s.n(o),t=s(9398),a=s(2814),l=s(2553),c=s(5328),d=s(4040),u=s(6979),h=s(7087);s(7294);function x(){var e=(new Date).getFullYear();return(0,i.jsxs)("div",{className:"footer-container",children:[(0,i.jsxs)(l.ZP.Container,{css:{backgroundColor:"#F9F9F9",overflowX:"hidden",margin:"0px"},gap:2,children:[(0,i.jsx)(l.ZP,{xs:12,sm:12,md:3,lg:4,xl:4,children:(0,i.jsx)(c.ZP,{width:200,src:"/../../img/almargen.png"})}),(0,i.jsx)(l.ZP,{xs:12,sm:12,md:4,lg:4,xl:4,children:(0,i.jsxs)(d.Z,{css:{display:"block",marginTop:15},children:[(0,i.jsx)(u.Z,{css:{fontWeight:600},children:"\xbfC\xf3mo funciona?"}),(0,i.jsx)(u.Z,{children:"El carrito abre los Mi\xe9rcoles a partir de las 16 hs y cierra los pedidos el Domingo a las 23 hs."}),(0,i.jsx)(u.Z,{children:"Podes pasar a buscar tu pedido los Lunes y Martes de 8 a 16 hs por Mitre 8400."})]})}),(0,i.jsx)(l.ZP,{xs:12,sm:12,md:4,lg:4,xl:4,children:(0,i.jsxs)(d.Z,{css:{display:"block"},children:[(0,i.jsx)(u.Z,{css:{fontWeight:600},children:"Contactanos"}),(0,i.jsx)(u.Z,{children:"Por dudas o consultas de tus pedidos podes escribirnos por mail o conicarte por WhatsApp."}),(0,i.jsxs)(h.ZP,{block:!0,href:"#",className:"link-container link-container-black",underline:!0,children:["mail@mail.com.ar ",(0,i.jsx)(a.G,{style:{marginLeft:12},icon:t.eFW})]})]})})]}),(0,i.jsx)("div",{style:{display:"flex",backgroundColor:"#333333",justifyContent:"center",paddingBottom:17,paddingTop:17,width:"100%",height:"100%",marginBottom:0,overflowX:"hidden"},children:(0,i.jsxs)(u.Z,{css:{color:"white",fontSize:15},children:["\xa9 Copyright - ",e," Al Margen compras comunitarias"]})})]})}var g=function(e){var r=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n(),{children:[(0,i.jsx)("title",{children:"AlMargen | Del otro lado de tu mesa"}),(0,i.jsx)("meta",{content:"width=device-width, initial-scale=1.0",name:"viewport"})]}),(0,i.jsxs)("div",{className:"page-wrapper",children:[r,(0,i.jsx)(x,{})]})]})}}},function(e){e.O(0,[523,139,710,774,888,179],(function(){return r=8312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);