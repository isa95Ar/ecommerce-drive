"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,777];
exports.modules = {

/***/ 1572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AvisoCarrito)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/landing/Links.tsx





function Links() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "row"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: free_solid_svg_icons_.faArrowRight,
                        color: "white",
                        style: {
                            alignSelf: "center"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                        block: true,
                        href: "#",
                        className: "link-container",
                        underline: true,
                        children: [
                            " ",
                            "Visit\xe1 Nuestra p\xe1gina"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "row"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: free_solid_svg_icons_.faArrowRight,
                        color: "white",
                        style: {
                            alignSelf: "center"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                        block: true,
                        href: "#",
                        className: "link-container",
                        underline: true,
                        children: [
                            " ",
                            "Unite a la comunidad"
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./public/img/BgImgAviso.jpg
/* harmony default export */ const BgImgAviso = ({"src":"/_next/static/media/BgImgAviso.a3213864.jpg","height":450,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAI0SXf/EABoQAAMBAAMAAAAAAAAAAAAAAAECAxEAE2H/2gAIAQEAAT8AlVnn0piTWqenSAOf/8QAGREAAgMBAAAAAAAAAAAAAAAAAxEAAQJR/9oACAECAQE/AD2iaXZ//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECAxH/2gAIAQMBAT8ArWxR/9k="});
;// CONCATENATED MODULE: ./components/AvisoCarrito.tsx



 //Cambiar estos link con las imagen correspondiente
 //Cambiar estos link con las imagen correspondiente
function AvisoCarrito({ status  }) {
    //Aqui poner el Typscript para obtener la fecha y hora de apertura del carro del excel
    // LandingType
    // En el caso de que LandingType:
    // Si es open, debería mostrar el "Ya hiciste tu pedido de este mes?".
    //  Si es toOpen, "El carrito abre el 8/7 15hs".
    // Si es closed o no llega nada, "El carrito ya está cerrado"
    var Fecha = "10/5"; // aqui iria la variable de fecha
    var Hora = "15 PM"; // aqui va la variable de la hora
    const Starter = "El carrito abre el";
    const FechaHora = status.openDate;
    const color = "white";
    var style;
    var useStyle = 1; //Esto define que estilo se usa, por ahora usa un valor holdeado 1 o menor para el estilo original,  cualquier mayor a 1 para el estilo alternativo
    const baseStyle = {
        // paleta de colores e imagen de "android  small 2" de la maqueta en figma (usestyle = 1)
        imgStyle: {
            backgroundImage: `url(${BgImgAviso.src})`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        },
        linkStyle: {
            color: "white"
        },
        avisoStyle: {
            color: "white"
        }
    };
    const altStyle = {
        imgStyle: {
            backgroundImage: `url(${BgImgAviso.src})`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        },
        linkStyle: {
            color: "black"
        },
        avisoStyle: {
            color: "orange"
        }
    };
    if (useStyle <= 1) {
        style = baseStyle;
    } else {
        style = altStyle;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: style.imgStyle,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            fluid: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Card, {
                    css: {
                        height: "40vh",
                        background: "none" /*Tarjeta para el espaciado */ 
                    },
                    children: " "
                }),
                status.status === "open" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                        h1: true,
                        css: {
                            color: color
                        },
                        children: [
                            "\xbfYa hiciste tu pedido de este mes?",
                            " "
                        ]
                    })
                }) : status.status === "toOpen" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                        h1: true,
                        css: {
                            color: color
                        },
                        children: [
                            Starter,
                            " ",
                            FechaHora
                        ]
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                            h1: true,
                            css: {
                                color: color
                            },
                            children: [
                                "El carrito ya est\xe1 cerrado.",
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                            h4: true,
                            css: {
                                color: color
                            },
                            children: [
                                "Nos vemos la pr\xf3xima semana.",
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Links, {})
            ]
        })
    });
};


/***/ }),

/***/ 261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LoginCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/svg/GoogleIcon.tsx


const GoogleIcon = ({ height =48 , width =48  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            cursor: "pointer",
            display: "flex",
            alignSelf: "center",
            justifyItems: "center",
            alignContent: "center"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 48 48",
            width: `${width}px`,
            height: `${height}px`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#FFC107",
                    d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#FF3D00",
                    d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#4CAF50",
                    d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#1976D2",
                    d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/cards/LoginCard.tsx



function LoginCard() {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
        className: "login",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
            justify: "center",
            alignContent: "center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    xs: 12,
                    xl: 12,
                    css: {
                        zIndex: 9000
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                        src: "/img/logoCoop.png",
                        alt: "Default Image"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    xs: 12,
                    xl: 3,
                    sm: 6,
                    md: 3,
                    lg: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        className: "google-button",
                        onClick: ()=>location.href = "/api/login"
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "button-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GoogleIcon, {
                                    width: 30,
                                    height: 30
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    style: {
                                        marginLeft: 5
                                    },
                                    children: "Ingres\xe1 con Google"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8366);
/* harmony import */ var _components_cards_LoginCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(261);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_services_ConfigService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3507);
/* harmony import */ var _components_AvisoCarrito__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1572);
/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4014);
/* harmony import */ var _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5869);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_6__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_7__]);
([iron_session__WEBPACK_IMPORTED_MODULE_6__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Home(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (props.user.logged && props.cartStatus.status === "open") {
            router.push("/products");
        }
    }, []);
    const RenderComponent = ()=>{
        if (!props.user.logged && props.cartStatus.status === "open") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_LoginCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AvisoCarrito__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            status: props.cartStatus
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...props,
        children: RenderComponent()
    });
};
async function getServerSideProps(context) {
    const configService = tsyringe__WEBPACK_IMPORTED_MODULE_3__.container.resolve(_src_services_ConfigService__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const getIsOpen = await configService.getCartStatus();
    const ironSession = await (0,iron_session__WEBPACK_IMPORTED_MODULE_6__.getIronSession)(context.req, context.res, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_7__/* .sessionOptions */ .d);
    if (ironSession.user && getIsOpen.status === "open") {
        return {
            redirect: {
                permanent: false,
                destination: "/products"
            },
            props: {}
        };
    }
    const user = ironSession.user ?? {
        logged: false
    };
    return {
        props: {
            cartStatus: getIsOpen,
            user
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [531,869,366,507], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();