"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345,777];
exports.modules = {

/***/ 1850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);



const CategorySelector = ({ categories , category , setCategory ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "selector-container",
        children: categories.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
            triggerType: "listbox",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Button, {
                    className: "selector",
                    children: category.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Menu, {
                    "aria-label": "Dynamic Actions",
                    items: categories,
                    selectedKeys: category.key,
                    onAction: (val)=>{
                        setCategory(categories.find((option)=>option.key === val
                        ));
                    },
                    children: categories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
                            color: item.key === "delete" ? "error" : "default",
                            children: item.name
                        }, item.key)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySelector);


/***/ }),

/***/ 9231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_hooks_CartHook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(961);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_6__]);
react_toastify__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function ProductCard({ item , addProduct  }) {
    const cart = (0,_src_hooks_CartHook__WEBPACK_IMPORTED_MODULE_5__/* .useCart */ .j)();
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const qty = cart.getCartProductQty(item.code);
        setQuantity(qty);
    }, [
        cart.Cart
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
            css: {
                margin: 0,
                letterSpacing: 0
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Card.Body, {
                className: "product-container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: "text-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                sm: 7,
                                xs: 7,
                                lg: 6,
                                md: 6,
                                xl: 6,
                                justify: "center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                    css: {
                                        width: 100,
                                        height: 100
                                    },
                                    className: "product-image",
                                    src: item.picture
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                className: "details-container",
                                lg: 6,
                                md: 6,
                                xl: 6,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        className: "product-name",
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        className: "product-reference",
                                        children: item.minimum
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        className: "product-supplier",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFaceLaughBeam
                                            }),
                                            item.seller
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        className: "product-price",
                                        children: [
                                            "$",
                                            item.price
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                sm: 7,
                                xs: 7,
                                lg: 6,
                                md: 6,
                                xl: 6,
                                className: "product-quantity",
                                justify: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        className: "quantity-border",
                                        onClick: ()=>{
                                            if (quantity > 1) setQuantity((prev)=>prev - 1
                                            );
                                        },
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        className: "quantity",
                                        children: quantity
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        className: "quantity-border",
                                        onClick: ()=>{
                                            setQuantity((prev)=>prev + 1
                                            );
                                        },
                                        children: "+"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                sm: 3,
                                xs: 3,
                                lg: 6,
                                md: 6,
                                xl: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    onClick: ()=>{
                                        addProduct(item, quantity);
                                        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("Agregado exitosamente");
                                    },
                                    className: "button-text",
                                    css: {
                                        backgroundColor: "#F29400",
                                        color: "black",
                                        fontWeight: 400
                                    },
                                    auto: true,
                                    flat: true,
                                    children: "Agregar"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CP": () => (/* binding */ getCategories),
/* harmony export */   "Xp": () => (/* binding */ getProducts),
/* harmony export */   "g4": () => (/* binding */ getOrdersToPost)
/* harmony export */ });
/* unused harmony export getCartStatus */
/* harmony import */ var _src_exceptions_ApiExeption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7393);

const getProducts = async (page = 1, category = null)=>{
    let url = "/api/products";
    if (category) {
        url += "/" + category;
    }
    let products = await fetch(`${url}?page=${page}`).then((data)=>data.json()
    );
    return products;
};
const getCategories = async ()=>{
    let categories = await fetch("/api/categories").then((data)=>data.json()
    );
    return categories;
};
const getCartStatus = async ()=>{
    let cartStatus = await fetch("/api/cart/status").then((data)=>data.json()
    );
    return cartStatus;
};
const getOrdersToPost = async ()=>{
    try {
        const orders = await fetch("/api/admin/orders/to-post").then((data)=>data.json()
        );
        return orders;
    } catch (error) {
        throw new _src_exceptions_ApiExeption__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(error);
    }
};


/***/ }),

/***/ 3351:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Products),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cards_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9231);
/* harmony import */ var _helpers_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(724);
/* harmony import */ var _components_navigation_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8277);
/* harmony import */ var _components_CategorySelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1850);
/* harmony import */ var _src_hooks_CartHook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(961);
/* harmony import */ var _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5869);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_services_ConfigService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3507);
/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4014);
/* harmony import */ var _src_services_OrderService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1751);
/* harmony import */ var _helpers_notify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8662);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8366);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cards_ProductCard__WEBPACK_IMPORTED_MODULE_3__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_8__, iron_session__WEBPACK_IMPORTED_MODULE_11__, _helpers_notify__WEBPACK_IMPORTED_MODULE_13__]);
([_components_cards_ProductCard__WEBPACK_IMPORTED_MODULE_3__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_8__, iron_session__WEBPACK_IMPORTED_MODULE_11__, _helpers_notify__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function Products(props) {
    const cart = (0,_src_hooks_CartHook__WEBPACK_IMPORTED_MODULE_7__/* .useCart */ .j)(props.cart);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const { 0: products , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        {
            key: "",
            name: "Todos"
        }
    ]);
    const { 0: category1 , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        key: "",
        name: "Todos"
    });
    const { 0: totalPages , 1: setTotalPages  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const addProductToCart = (product, qty)=>{
        cart.addProduct(product, qty);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_helpers_notify__WEBPACK_IMPORTED_MODULE_13__/* .infoMessages */ .o)();
        (0,_helpers_content__WEBPACK_IMPORTED_MODULE_4__/* .getProducts */ .Xp)().then((res)=>{
            setProducts(res.products);
            setTotalPages(res.totalPages);
            setLoading(false);
        });
        (0,_helpers_content__WEBPACK_IMPORTED_MODULE_4__/* .getCategories */ .CP)().then((res)=>{
            let categoriesParsed = [];
            res.map((category)=>categoriesParsed.push({
                    key: category.slug,
                    name: category.name
                })
            );
            setCategories([
                {
                    key: "",
                    name: "Todos"
                },
                ...categoriesParsed
            ]);
        });
    }, []);
    const fetchData = (page, category)=>{
        (0,_helpers_content__WEBPACK_IMPORTED_MODULE_4__/* .getProducts */ .Xp)(page, category.key).then((res)=>{
            setCurrentPage(page);
            setTotalPages(res.totalPages);
            setProducts(res.products);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setCurrentPage(1);
        fetchData(1, category1);
    }, [
        category1
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_15__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation_Header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "Eleg\xed el rubro y encontr\xe1 tus productos",
                user: props.user,
                cart: cart.Cart
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                css: {
                    backgroundColor: "#fff",
                    maxWidth: "1260px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        css: {
                            backgroundColor: "#fff"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CategorySelector__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            categories: categories,
                            setCategory: (val)=>setCategory(val)
                            ,
                            category: category1
                        })
                    }),
                    loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Loading, {
                        css: {
                            margin: "auto",
                            width: "100%",
                            paddingTop: "10vh"
                        },
                        color: "warning",
                        children: "Cargando..."
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                                gap: 1,
                                css: {
                                    padding: 0,
                                    backgroundColor: "#fff"
                                },
                                children: products.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        xs: 12,
                                        sm: 12,
                                        md: 6,
                                        lg: 4,
                                        xl: 4,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_ProductCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            addProduct: (product, qty)=>addProductToCart(product, qty)
                                            ,
                                            item: item
                                        }, item.code)
                                    }, item.code)
                                )
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                                gap: 2,
                                css: {
                                    padding: 0
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    justify: "center",
                                    md: 12,
                                    lg: 12,
                                    xl: 12,
                                    xs: 12,
                                    sm: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
                                        className: "paginator",
                                        initialPage: 1,
                                        total: totalPages,
                                        onChange: (page)=>fetchData(page, category1)
                                        ,
                                        color: "warning",
                                        page: currentPage
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-floating",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    onClick: ()=>router.push("cart")
                    ,
                    size: "xs",
                    className: "button-floating",
                    children: "Tu carrito"
                })
            })
        ]
    });
};
async function getServerSideProps(context) {
    const configService = tsyringe__WEBPACK_IMPORTED_MODULE_9__.container.resolve(_src_services_ConfigService__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z);
    const getIsOpen = await configService.getCartStatus();
    const ironSession = await (0,iron_session__WEBPACK_IMPORTED_MODULE_11__.getIronSession)(context.req, context.res, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_8__/* .sessionOptions */ .d);
    if (getIsOpen.status !== "open" || !ironSession.user) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            },
            props: {}
        };
    }
    let cart = {};
    const user = ironSession.user ?? {
        logged: false
    };
    const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_9__.container.resolve(_src_services_OrderService__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z);
    const ModelResponse = await orderService.getUserOrder(user.email);
    if (ModelResponse) {
        cart.products = ModelResponse.products.map(({ code , name , price , minimum , qty , total , picture  })=>({
                code,
                name,
                price,
                minimum,
                qty,
                total,
                picture
            })
        );
    }
    return {
        props: {
            cartStatus: getIsOpen,
            user,
            cart
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

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [531,366,869,885,82,507,961], () => (__webpack_exec__(3351)));
module.exports = __webpack_exports__;

})();