(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8773:function(e,o,r){"use strict";r.d(o,{ZP:function(){return z}});var a=r(9837),i=r(6221),n=r(7294),s=r(8375),t=r(3569),l=r(9641),c=r(3952),d=r(7354),$=r(9260),u=r(2903);var g=r(275),p=r(9975);const m=(0,g.zo)("div",{d:"flex",w:"100%",h:"auto",flex:"1 1 auto",fd:"column",jc:"inherit",ai:"inherit",ac:"inherit",py:"$lg",px:"$sm",oy:"auto",position:"relative",ta:"left"}),h=(0,g.zo)("div",{$$cardColor:"$colors$backgroundContrast",$$cardTextColor:"$colors$text",m:0,p:0,br:"$lg",bg:"$$cardColor",color:"$$cardTextColor",position:"relative",display:"flex",overflow:"hidden",fd:"column",width:"100%",height:"auto",boxSizing:"border-box","@motion":{transition:"none"},".nextui-image":{width:"100%"},[`& ${s.q}`]:{zIndex:"$1",".nextui-drip-filler":{opacity:.25,fill:"$accents6"}},variants:{variant:{flat:{bg:"$accents0"},shadow:{dropShadow:"$lg","@safari":{boxShadow:"$lg",dropShadow:"none"}},bordered:{borderStyle:"solid",borderColor:"$border"}},borderWeight:{light:{bw:"$light"},normal:{bw:"$normal"},bold:{bw:"$bold"},extrabold:{bw:"$extrabold"},black:{bw:"$black"}},disableAnimation:{true:{transition:"none"},false:{transition:"$card"}},isPressable:{true:{cursor:"pointer",us:"none",WebkitTapHighlightColor:"transparent"}},isPressed:{true:{}},isHovered:{true:{dropShadow:"$lg","@safari":{boxShadow:"$lg",dropShadow:"none"}}}},compoundVariants:[{isPressed:!0,disableAnimation:!1,css:{transform:"scale(0.97)"}},{isHovered:!0,disableAnimation:!1,css:{transform:"translateY(-2px)"}},{isHovered:!0,variant:"shadow",css:{dropShadow:"$xl","@safari":{boxShadow:"$xl",dropShadow:"none"}}}]},p.UU,p.BM),x=(0,g.zo)("div",{w:"100%",display:"flex",flexShrink:0,zIndex:"$1",jc:"flex-start",ai:"center",overflow:"hidden",color:"inherit",p:"$sm"}),f=(0,g.zo)("div",{w:"100%",h:"auto",p:"$sm",d:"flex",ai:"center",overflow:"hidden",color:"inherit",bblr:"$lg",bbrr:"$lg",variants:{isBlurred:{true:{bf:"saturate(180%) blur(10px)",bg:"$$cardColor"}}}});var b=r(5893);const v=n.forwardRef((({...e},o)=>{const{as:r,css:a,children:i,...t}=e,{cardRef:g,variant:p,isFocusVisible:m,isPressable:x,isPressed:f,disableAnimation:v,disableRipple:y,borderWeight:z,isHovered:j,getCardProps:w,dripBindings:C}=(e=>{const{ref:o,disableAnimation:r=!1,disableRipple:a=!1,variant:i="shadow",isHoverable:s=!1,borderWeight:t="light",isPressable:g=!1,onClick:p,onPress:m,autoFocus:h,allowTextSelectionOnPress:x=!0,...f}=e,b=(0,u.gy)(o),{onClick:v,...y}=(0,$.Z)(!1,b),z=e=>{r||a||!b.current||v(e)},{isPressed:j,pressProps:w}=(0,d.r7)({isDisabled:!g,onPress:e=>{"keyboard"!==e.pointerType&&"virtual"!==e.pointerType||(z(e),null==p||p(e)),null==m||m(e)},allowTextSelectionOnPress:x,...f}),{hoverProps:C,isHovered:S}=(0,d.XI)({isDisabled:!s,...f}),{isFocusVisible:P,focusProps:Z}=(0,l.Fx)({autoFocus:h});w.onClick=e=>{g&&(z(e),null==p||p(e))};const D=(0,n.useCallback)(((e={})=>({...(0,c.dG)(g?{...w,...Z}:{},s?C:{},f,e)})),[g,s,w,Z,C,f]);return{cardRef:b,variant:i,borderWeight:t,isPressable:g,isHovered:S,isPressed:j,disableAnimation:r,disableRipple:a,dripBindings:y,onDripClickHandler:v,isFocusVisible:P,getCardProps:D}})({...t,ref:o});return(0,b.jsxs)(h,{ref:g,as:r,borderWeight:z,css:a,disableAnimation:v,isFocusVisible:m,isHovered:j,isPressable:x,isPressed:f,role:x?"button":"section",tabIndex:x?0:-1,variant:p,...w(),children:[x&&!v&&!y&&(0,b.jsx)(s.Z,{...C}),i]})}));t.Ts&&(v.displayName="NextUI.Card"),v.toString=()=>".nextui-card";var y=v;y.Header=x,y.Body=m,y.Footer=f,y.Image=a.ZP,y.Divider=i.ZP;var z=y},6221:function(e,o,r){"use strict";r.d(o,{ZP:function(){return u}});var a=r(7294),i=r(88),n=r(6772),s=r(275);const t=(0,s.zo)("div",{width:"100%",maxWidth:"100%",position:"relative",variants:{color:{default:{bg:"$border"},primary:{bg:"$primary"},secondary:{bg:"$secondary"},success:{bg:"$success"},warning:{bg:"$warning"},error:{bg:"$error"}}},defaultVariants:{color:"default"}}),l=(0,s.zo)("span",{position:"absolute",left:"50%",top:"50%",minHeight:"100%",display:"inline-flex",jc:"center",ai:"center",transform:"translate(-50%, -50%)",padding:"0 $lg",fontSize:"$base",fontWeight:"bold",textTransform:"capitalize",backgroundColor:"$background",zIndex:"$1",variants:{color:{default:{color:"$text"},primary:{color:"$primary"},secondary:{color:"$secondary"},success:{color:"$success"},warning:{color:"$warning"},error:{color:"$error"}}}});var c=r(5893);const d=({height:e,x:o,y:r,align:i,children:s,textColor:d,css:$,...u})=>{const g=(0,a.useMemo)((()=>i&&"center"!==i?"left"===i||"start"===i?{transform:"translateY(-50%)",left:"7%"}:{transform:"translateY(-50%)",left:"auto",right:"7%"}:""),[i]),p=r?(0,n.m)(r/2):0,m=o?(0,n.m)(o/2):0;return(0,c.jsx)(t,{css:{margin:`${p} ${m}`,height:`calc(${e} * 1px)`,...$},role:"separator",...u,children:s&&(0,c.jsx)(l,{className:"nextui-divider-text",color:d,css:{...g},children:s})})};d.toString=()=>".nextui-divider";const $=a.memo(d);var u=(0,i.Z)($,{x:0,y:0,height:1,align:"center"})},7501:function(e,o,r){"use strict";r.d(o,{ZP:function(){return z}});var a=r(7294),i=r(88),n=r(275);const s=(0,n.F4)({"0%":{opacity:"0.2"},"20%":{opacity:1},"100%":{opacity:"0.2"}}),t=(0,n.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),l=(0,n.F4)({"0%":{transform:"translate(0px, 0px)"},"50%":{transform:"translate(0, calc(-$$loadingSize * 1.4))"},"100%":{transform:"translate(0px, 0px)"}}),c=(0,n.F4)({"0%":{opacity:1},"100%":{opacity:.15}}),d=(0,n.zo)("div",{d:"inline-flex",fd:"column",ai:"center",position:"relative",variants:{color:{currentColor:{$$loadingColor:"currentColor"},white:{$$loadingColor:"$colors$white"},default:{$$loadingColor:"$colors$primary"},primary:{$$loadingColor:"$colors$primary"},secondary:{$$loadingColor:"$colors$secondary"},success:{$$loadingColor:"$colors$success"},warning:{$$loadingColor:"$colors$warning"},error:{$$loadingColor:"$colors$error"}},textColor:{white:{$$loadingTextColor:"$colors$white"},default:{$$loadingTextColor:"$colors$text"},primary:{$$loadingTextColor:"$colors$primary"},secondary:{$$loadingTextColor:"$colors$secondary"},success:{$$loadingTextColor:"$colors$success"},warning:{$$loadingTextColor:"$colors$warning"},error:{$$loadingTextColor:"$colors$error"}}},defaultVariants:{color:"default",textColor:"default"}}),$=(0,n.zo)("div",{size:"100%",position:"relative",left:"50%",top:"50%"}),u=(0,n.zo)("div",{d:"flex",fd:"column",jc:"center",ai:"center",position:"relative",variants:{size:{xs:{size:"$6"},sm:{size:"$8"},md:{size:"$9"},lg:{size:"$11"},xl:{size:"$12"}}}}),g=(0,n.zo)("span",{bg:"$$loadingColor",position:"absolute",top:"-3.9%",width:"24%",height:"8%",left:"-10%",br:"$lg",animation:`${c} 1.2s linear 0s infinite normal none running`,"&:nth-child(1)":{animationDelay:"-1.2s",transform:"rotate(0deg) translate(146%)"},"&:nth-child(2)":{animationDelay:"-1.1s",transform:"rotate(30deg) translate(146%)"},"&:nth-child(3)":{animationDelay:"-1s",transform:"rotate(60deg) translate(146%)"},"&:nth-child(4)":{animationDelay:"-0.9s",transform:"rotate(90deg) translate(146%)"},"&:nth-child(5)":{animationDelay:"-0.8s",transform:"rotate(120deg) translate(146%)"},"&:nth-child(6)":{animationDelay:"-0.7s",transform:"rotate(150deg) translate(146%)"},"&:nth-child(7)":{animationDelay:"-0.6s",transform:"rotate(180deg) translate(146%)"},"&:nth-child(8)":{animationDelay:"-0.5s",transform:"rotate(210deg) translate(146%)"},"&:nth-child(9)":{animationDelay:"-0.4s",transform:"rotate(240deg) translate(146%)"},"&:nth-child(10)":{animationDelay:"-0.3s",transform:"rotate(270deg) translate(146%)"},"&:nth-child(11)":{animationDelay:"-0.2s",transform:"rotate(300deg) translate(146%)"},"&:nth-child(12)":{animationDelay:"-0.1s",transform:"rotate(330deg) translate(146%)"}}),p=(0,n.zo)("span",{position:"absolute",top:0,left:0,right:0,bottom:0,size:"100%",dflex:"center",bgColor:"transparent",us:"none",variants:{size:{xs:{$$loadingSize:"$space$8",$$loadingBorder:"$space$1"},sm:{$$loadingSize:"$space$10",$$loadingBorder:"$space$1"},md:{$$loadingSize:"$space$12",$$loadingBorder:"calc($space$1 * 1.5)"},lg:{$$loadingSize:"$space$15",$$loadingBorder:"$space$2"},xl:{$$loadingSize:"$space$18",$$loadingBorder:"$space$3"}},type:{default:{d:"flex",br:"$rounded",position:"relative",size:"$$loadingSize",i:{top:"0px",size:"100%",position:"absolute",br:"inherit"},"._1":{border:"$$loadingBorder solid $$loadingColor",borderTop:"$$loadingBorder solid transparent",borderLeft:"$$loadingBorder solid transparent",borderRight:"$$loadingBorder solid transparent",animation:`${t} 0.8s ease infinite`},"._2":{border:"$$loadingBorder dotted $$loadingColor",borderTop:"$$loadingBorder solid transparent",borderLeft:"$$loadingBorder solid transparent",borderRight:"$$loadingBorder solid transparent",animation:`${t} 0.8s linear infinite`,opacity:.5},"._3":{display:"none"}},points:{d:"flex",position:"relative",transform:"translate(0, calc($$loadingSize * 0.6))",i:{size:"$$loadingSize",margin:"0 3px",bg:"$$loadingColor"},"._1":{br:"$rounded",animation:`${l} 0.75s ease infinite`},"._2":{br:"$rounded",animation:`${l} 0.75s ease infinite 0.25s`},"._3":{br:"$rounded",animation:`${l} 0.75s ease infinite 0.5s`}},"points-opacity":{d:"flex",position:"relative",i:{display:"inline-block",size:"$$loadingSize",br:"$rounded",bg:"$$loadingColor",margin:"0 1px",animation:`${s} 1.4s infinite both`},"._2":{animationDelay:"0.2s"},"._3":{animationDelay:"0.4s"}},spinner:{},gradient:{display:"flex",position:"relative",size:"$$loadingSize","._1":{position:"absolute",size:"100%",border:"0px",animation:`${t} 1s linear infinite`,top:"0px",br:"$rounded",bg:"linear-gradient(0deg, $background 33%,$$loadingColor 100%)"},"._2":{top:"2px",position:"absolute",size:"calc(100% - 4px)",border:"0px",bg:"$background",br:"$rounded"},"._3":{display:"none"}}}},compoundVariants:[{size:"xs",type:"points-opacity",css:{$$loadingSize:"$space$1"}},{size:"sm",type:"points-opacity",css:{$$loadingSize:"$space$2"}},{size:"md",type:"points-opacity",css:{$$loadingSize:"$space$3"}},{size:"lg",type:"points-opacity",css:{$$loadingSize:"$space$4"}},{size:"xl",type:"points-opacity",css:{$$loadingSize:"$space$5"}},{size:"xs",type:"points",css:{$$loadingSize:"$space$1"}},{size:"sm",type:"points",css:{$$loadingSize:"$space$2"}},{size:"md",type:"points",css:{$$loadingSize:"$space$3"}},{size:"lg",type:"points",css:{$$loadingSize:"$space$4"}},{size:"xl",type:"points",css:{$$loadingSize:"$space$5"}}],defaultVariants:{type:"default"}}),m=(0,n.zo)("label",{mt:"$1",color:"$$loadingTextColor",fontSize:"$$loadingSize","*":{margin:0},variants:{size:{xs:{fontSize:"$space$5",marginTop:"$2"},sm:{fontSize:"$space$6",marginTop:"$3"},md:{fontSize:"$base",marginTop:"$4"},lg:{fontSize:"$space$10",marginTop:"$4"},xl:{fontSize:"$space$11",marginTop:"$5"}}}});var h=r(1309),x=r(5893);const f=({children:e,size:o,color:r,textColor:a,className:i,...n})=>{const s=Array.isArray(e)?(null==e?void 0:e.length)>1&&void 0!==e[0]:void 0!==e,t=e&&s?"":"Loading";return(0,x.jsxs)(u,{className:(0,h.Z)("nextui-spinner",i),color:r,size:o,...n,children:[(0,x.jsx)($,{"aria-label":t,className:"nextui-spinner-container",children:[...new Array(12)].map(((e,o)=>(0,x.jsx)(g,{},`nextui-spinner-${o}`)))}),e&&(0,x.jsx)(m,{color:a,size:o,children:e})]})};f.toString=()=>".nextui-spinner";var b=f;const v=({children:e,size:o,gradientBackground:r,loadingCss:i,type:n,...s})=>{const t=e?"":"Loading",l=(0,a.useMemo)((()=>"gradient"===n?{"._2":{bg:r}}:{}),[n]);return(0,x.jsx)(d,{...s,children:"spinner"===n?(0,x.jsx)(b,{size:o,children:e}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(p,{"aria-label":t,className:`nextui-loading nextui-loading-${n}`,css:{...i,...l},size:o,type:n,children:[(0,x.jsx)("i",{className:"_1"}),(0,x.jsx)("i",{className:"_2"}),(0,x.jsx)("i",{className:"_3"})]}),e&&(0,x.jsx)(m,{className:"nextui-loading-label",size:o,children:e})]})})};v.toString=()=>".nextui-loading";const y=a.memo(v);var z=(0,i.Z)(y,{size:"md",type:"default"})},6772:function(e,o,r){"use strict";r.d(o,{m:function(){return a}});const a=e=>`calc(${15.25*e}pt + 1px * ${e-1})`},8312:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2588)}])},2235:function(e,o,r){"use strict";function a(e){var o=new Date(e),r=o.getUTCDate().toString(),a=(o.getUTCMonth()+1).toString();return 1===r.length&&(r="0"+r),1===a.length&&(a="0"+a),"".concat(r,"/").concat(a)}function i(e){var o=new Date(e),r=o.getHours().toString();1===r.length&&(r="0"+r);var a=o.getMinutes().toString();return 1===a.length&&(a="0"+a),"".concat(r,":").concat(a)}r.d(o,{D:function(){return i},f:function(){return a}})},8662:function(e,o,r){"use strict";r.d(o,{o:function(){return i}});var a=r(5678),i=function(){switch(location.href.split("#")[1]){case"logout":a.Am.warn("Se ha deslogeado");break;case"logged":a.Am.success("Inicio de sesion exitoso!");break;case"unauthorized":a.Am.error("No se encuentra autorizado")}}},2588:function(e,o,r){"use strict";r.r(o),r.d(o,{__N_SSP:function(){return z},default:function(){return j}});var a=r(5893),i=r(8366),n=r(2553),s=r(9837),t=r(7690),l=r(7501),c=r(6979),d=r(7294),$=function(e){var o=e.height,r=void 0===o?48:o,i=e.width,n=void 0===i?48:i;return(0,a.jsx)("div",{style:{cursor:"pointer",display:"flex",alignSelf:"center",justifyItems:"center",alignContent:"center"},children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"".concat(n,"px"),height:"".concat(r,"px"),children:[(0,a.jsx)("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),(0,a.jsx)("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),(0,a.jsx)("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),(0,a.jsx)("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})]})})},u=function(){var e=(0,d.useState)(!1),o=e[0],r=e[1];return(0,a.jsx)(n.ZP,{className:"login",children:(0,a.jsxs)(n.ZP.Container,{justify:"center",alignContent:"center",children:[(0,a.jsx)(n.ZP,{xs:12,xl:12,css:{zIndex:9e3},children:(0,a.jsx)(s.ZP,{src:"/img/logoCoop.png",alt:"Default Image"})}),(0,a.jsx)(n.ZP,{xs:12,xl:3,sm:6,md:3,lg:3,justify:"center",children:(0,a.jsx)(t.ZP,{className:"google-button",onClick:function(){r(!0),location.href="/api/login"},children:o?(0,a.jsx)(l.ZP,{color:"warning",size:"sm"}):(0,a.jsxs)("div",{className:"button-container",children:[(0,a.jsx)($,{width:30,height:30}),(0,a.jsx)(c.Z,{style:{marginLeft:5},children:"Ingres\xe1 con Google"})]})})})]})})},g=r(3165),p=r(8773),m=r(2235),h=r(9398),x=r(2814),f=function(e){var o=e.status,r="".concat((0,m.f)(o.openDate)," a las ").concat((0,m.D)(o.openDate));return(0,a.jsx)("div",{className:"message-card-wrap",children:(0,a.jsxs)(g.Z,{fluid:!0,className:"message-card-container",children:[(0,a.jsx)(p.ZP,{css:{height:"40vh",background:"none"},children:" "}),"open"===o.status?(0,a.jsx)("div",{children:(0,a.jsxs)(c.Z,{h1:!0,css:{color:"white"},children:["\xbfYa hiciste tu pedido de este mes?"," "]})}):"toOpen"===o.status?(0,a.jsx)("div",{children:(0,a.jsxs)(c.Z,{h1:!0,css:{color:"white"},children:["El carrito abre el ",r]})}):(0,a.jsxs)("div",{className:"closed-cart-text",children:[(0,a.jsxs)(c.Z,{h1:!0,children:["El carrito ya est\xe1 cerrado."," "]}),(0,a.jsxs)(c.Z,{size:"$2xl",children:[(0,a.jsx)(x.G,{icon:h.eFW,color:"#EA903C"})," Pod\xe9s chequear el detalle de lo pedido, lo entregado y tu saldos con el grupo de compras en ",(0,a.jsx)("a",{target:"_blank",href:"https://docs.google.com/spreadsheets/d/16J909PqhPXD48peYWb86Fud3jfY47AzhbbM_YaJFfz4/edit#gid=0",children:(0,a.jsx)("b",{children:" este link"})})]}),(0,a.jsxs)(c.Z,{children:["\xa1La planilla no es editable! Si ves algo que est\xe1 mal escribinos a comprascomunitariasalmargen@gmail.com y nosotros lo modificamos. Lo vas a ver reflejado en la planilla.",(0,a.jsx)("br",{}),"La planilla tiene tres vi\xf1etas.",(0,a.jsx)("br",{}),"1- Lista de precios definitiva. En la \xfaltima columna les indica si hubo cambio en el precio con respecto a lo que vieron en el carrito. En la mayor\xeda de los casos las variaciones se deben a la inflaci\xf3n, y debes en cuando a alg\xfan error humano en la carga de los precios.",(0,a.jsx)("br",{}),"2- Detalle de lo que hab\xedan pedido y lo que se les entreg\xf3 (columna H y J). Ahora sumamos una columna intermedia que marca autom\xe1ticamente cuando hubo diferencias entre lo pedido y lo entregado.",(0,a.jsx)("br",{}),"3- Finalmente una con el valor total de la compra, lo que adelantaron y lo que qued\xf3 pendiente a favor o en contra.",(0,a.jsx)("br",{}),"Cualquier duda o diferencia, por favor avisen a comprascomunitariasalmargen@gmail.com as\xed lo chequeamos."]})]})]})})},b=r(1163),v=r(8662);function y(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}var z=!0;function j(e){var o=(0,b.useRouter)();(0,d.useEffect)((function(){(0,v.o)(),e.user.logged&&"open"===e.cartStatus.status&&o.push("/products")}),[]);return(0,a.jsx)(i.default,function(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(o){y(e,o,r[o])}))}return e}({},e,{children:e.user.logged?(0,a.jsx)(f,{status:e.cartStatus}):(0,a.jsx)(u,{})}))}},8366:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return $}});var a=r(5893),i=r(9008),n=r.n(i),s=r(2553),t=r(9837),l=r(4040),c=r(6979),d=(r(7294),function(){var e=(new Date).getFullYear();return(0,a.jsxs)("div",{className:"footer-container",children:[(0,a.jsxs)(s.ZP.Container,{className:"footer-container",gap:2,children:[(0,a.jsx)(s.ZP,{xs:12,sm:12,md:3,lg:4,xl:4,children:(0,a.jsx)(t.ZP,{width:200,src:"/../../img/almargen.png"})}),(0,a.jsx)(s.ZP,{xs:12,sm:12,md:4,lg:4,xl:4,children:(0,a.jsxs)(l.Z,{className:"footer-text",children:[(0,a.jsx)(c.Z,{className:"footer-title",children:"\xbfC\xf3mo funciona?"}),(0,a.jsx)(c.Z,{children:"El lunes a las 20 hs cierra el carrito y enviamos el pedido a los distintos proveedores."}),(0,a.jsx)(c.Z,{children:"El pr\xf3ximo viernes pod\xe9s retirar tu pedido en el local de Ruiz Moreno 960 en los horarios informados en el mail y en el grupo de WhatsApp."})]})}),(0,a.jsx)(s.ZP,{xs:12,sm:12,md:4,lg:4,xl:4,children:(0,a.jsxs)(l.Z,{css:{display:"block"},children:[(0,a.jsx)(c.Z,{className:"footer-title",children:"Contactanos"}),(0,a.jsx)(c.Z,{children:"Por dudas o consultas de tus pedidos pod\xe9s escribirnos a comprascomunitariasalmargen@gmail.com o contactarte con cualquiera de los referentes del grupo."})]})})]}),(0,a.jsx)("div",{className:"footer-last-container",children:(0,a.jsxs)(c.Z,{className:"footer-text-copy",children:["\xa9 Copyright - ",e," Al Margen compras comunitarias"]})})]})}),$=function(e){var o=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:"AlMargen | Del otro lado de tu mesa"}),(0,a.jsx)("meta",{content:"width=device-width, initial-scale=1.0",name:"viewport"})]}),(0,a.jsxs)("div",{className:"page-wrapper",children:[o,(0,a.jsx)(d,{})]})]})}}},function(e){e.O(0,[523,310,774,888,179],(function(){return o=8312,e(e.s=o);var o}));var o=e.O();_N_E=o}]);