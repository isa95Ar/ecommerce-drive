"use strict";
exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 8366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
                css: {
                    backgroundColor: "#F9F9F9",
                    padding: 25
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                        xs: 12,
                        sm: 12,
                        md: 3,
                        lg: 4,
                        xl: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                            width: 200,
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
                                display: "block",
                                marginTop: 15
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    css: {
                                        fontWeight: 600
                                    },
                                    children: "\xbfC\xf3mo funciona?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    children: "El carrito abre los Mi\xe9rcoles a partir de las 16 hs y cierra los pedidos el Domingo a las 23 hs."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    children: "Podes pasar a buscar tu pedido los Lunes y Martes de 8 a 16 hs por Mitre 8400."
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
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                                    block: true,
                                    href: "#",
                                    className: "link-container link-container-black",
                                    underline: true,
                                    children: [
                                        "mail@mail.com.ar  ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                            style: {
                                                marginLeft: 12
                                            },
                                            icon: free_solid_svg_icons_.faArrowRight
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    display: "flex",
                    backgroundColor: "#333333",
                    justifyContent: "center",
                    paddingBottom: 17,
                    paddingTop: 17,
                    width: "100%",
                    height: "100%",
                    marginBottom: 0
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                    css: {
                        color: "white",
                        fontSize: 15
                    },
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

;// CONCATENATED MODULE: ./pages/layout.tsx



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "AlMargen | Del otro lado de tu mesa"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "width=device-width, initial-scale=1.0",
                        name: "viewport"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);


/***/ })

};
;