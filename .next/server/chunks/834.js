"use strict";
exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 5141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/svg/CartIcon.tsx


const CartIcon = ({ fill ="currentColor" , size , height , width , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            cursor: "pointer"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: size || width || 24,
            height: size || height || 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z",
                    fill: fill
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z",
                    fill: fill
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.93 21.55 6.51C21.68 4.74 20.33 3.3 18.56 3.3H6.27C6.17 2.86 5.97 2.44 5.66 2.09C5.16 1.56 4.46 1.25 3.74 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74C4.05 2.75 4.34 2.88 4.55 3.1C4.76 3.33 4.86 3.63 4.84 3.94Z",
                    fill: fill
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M20.5101 8.75H5.17005C4.75005 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.54 5.21005 17 6.92005 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.6C21.3401 9.14 20.9801 8.75 20.5101 8.75Z",
                    fill: fill
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Header.tsx





const Header = ({ title , user , cart  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header",
        children: [
            user.logged && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "logout-button",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Button, {
                        className: "logout-button",
                        onClick: ()=>router.push("/api/logout")
                        ,
                        children: [
                            "Cerrar Session (",
                            user.name,
                            ")"
                        ]
                    }),
                    cart && /*#__PURE__*/ jsx_runtime_.jsx(react_.Badge, {
                        css: {
                            cursor: "pointer"
                        },
                        color: "warning",
                        content: cart.products.length,
                        shape: "circle",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CartIcon, {
                            fill: "white",
                            size: 30,
                            width: 24,
                            height: 24,
                            onClick: ()=>router.push("/cart")
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                className: "header-text",
                children: title
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 1713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "AlMargen | Del otro lado de tu mesa"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: "width=device-width, initial-scale=1.0",
                        name: "viewport"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ })

};
;