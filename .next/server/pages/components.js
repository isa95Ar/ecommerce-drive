"use strict";
(() => {
var exports = {};
exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 2770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Components)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/navigation/Footer.tsx





function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
        css: {
            backgroundColor: "#F9F9F9"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                xs: 12,
                sm: 12,
                md: 4,
                lg: 4,
                xl: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                    src: "/../../img/almargen.png"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                xs: 12,
                sm: 12,
                md: 4,
                lg: 4,
                xl: 4,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                    css: {
                        display: "block"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            css: {
                                fontWeight: 600
                            },
                            children: "\xbfC\xf3mo funciona?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            children: "El carrito abre los Mi\xe9rcoles a partir de las 16 hs y cierra los pedidos el Domingo a las 23 hs. Podes pasar a buscar tu pedido los Lunes y Martes de 8 a 16 hs por Mitre 8400."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                xs: 12,
                sm: 12,
                md: 4,
                lg: 4,
                xl: 4,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                    css: {
                        display: "block"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            css: {
                                fontWeight: 600
                            },
                            children: "Contactanos"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            children: "Por dudas o consultas de tus pedidos podes escribirnos por mail o conicarte por WhatsApp."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                            icon: free_solid_svg_icons_.faArrowRight
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                            block: true,
                            href: "#",
                            className: "link-container link-container-black",
                            underline: true,
                            children: [
                                " ",
                                "mail@mail.com.ar"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Row, {
                css: {
                    display: "block",
                    backgroundColor: "#333333",
                    color: "white!important",
                    height: "10vh",
                    textAlign: "center",
                    alignContent: "center"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                    xs: 12,
                    sm: 12,
                    md: 4,
                    lg: 4,
                    xl: 4,
                    children: [
                        "\xa9 Copyright - ",
                        year,
                        " Al Margen compras comunitarias"
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/components.tsx


function Components(props) {
    return(// <Layout {...props}>
    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}));
};


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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2770));
module.exports = __webpack_exports__;

})();