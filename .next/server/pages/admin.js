"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964,777];
exports.modules = {

/***/ 5344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const CartDatesForm = ({ setEditing , setCurrentStatus  })=>{
    const formatDate = (date)=>date.toISOString().split("T")[0]
    ;
    const { 0: openDate , 1: setOpenDate  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: closeDate , 1: setCloseDate  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: openDateError , 1: setOpenDateError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: closeDateError , 1: setCloseDateError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: fetching , 1: setFetching  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        error: null,
        loading: false,
        done: false
    });
    const today = formatDate(new Date());
    const handleOpenDateChange = (e)=>{
        const newDate = e.target.value;
        setOpenDateError("");
        setCloseDateError("");
        setOpenDate(newDate);
        let newCloseDate = new Date(newDate);
        if (newDate) {
            newCloseDate.setDate(newCloseDate.getDate() + 1);
            setCloseDate(formatDate(newCloseDate));
        }
    };
    const handleCloseDateChange = (e)=>{
        setCloseDateError("");
        setCloseDate(e.target.value);
    };
    const getMinCloseDate = ()=>{
        if (!openDate) {
            return "";
        }
        let minDate = new Date(openDate);
        minDate.setDate(minDate.getDate() + 1);
        return formatDate(minDate);
    };
    const submitDates = async ()=>{
        try {
            setFetching({
                error: null,
                done: false,
                loading: true
            });
            const response = await fetch("/api/admin/cart/dates", {
                method: "POST",
                body: JSON.stringify({
                    openDate,
                    closeDate
                })
            });
            const newStatus = await response.json();
            setCurrentStatus(newStatus);
            setFetching({
                error: null,
                loading: false,
                done: true
            });
            setEditing(false);
        } catch (e) {
            setFetching({
                error: "Ocurri\xf3 un error enviando las fechas",
                loading: false,
                done: true
            });
            console.log(e);
        }
    };
    const validate = ()=>{
        setOpenDateError("");
        setCloseDateError("");
        let isValid = true;
        if (!openDate) {
            setOpenDateError("Debe ingresar una fecha de apertura");
            isValid = false;
        }
        if (!closeDate) {
            setCloseDateError("Debe ingresar una fecha de cierre");
            isValid = false;
        }
        if (openDate && closeDate && new Date(closeDate) <= new Date(openDate)) {
            setCloseDateError("La fecha de cierre debe ser mayor que la de apertura");
            isValid = false;
        }
        return isValid;
    };
    const handleSubmit = ()=>{
        const isValid = validate();
        if (!isValid) {
            return;
        }
        submitDates();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                gap: 3,
                justify: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                type: "date",
                                label: "Nueva fecha de apertura",
                                min: today,
                                value: openDate,
                                onChange: handleOpenDateChange
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                color: "error",
                                children: openDateError
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                type: "date",
                                label: "Nueva fecha de cierre",
                                disabled: openDate === "",
                                min: getMinCloseDate(),
                                value: closeDate,
                                onChange: handleCloseDateChange
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                color: "error",
                                children: closeDateError
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: ()=>setEditing(false)
                ,
                className: fetching.loading ? "button-total-disabled" : "button-cancel",
                children: "Cancelar"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: handleSubmit,
                className: fetching.loading ? "button-total-disabled" : "button-total",
                children: "Confirmar"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                gap: 2,
                direction: "column",
                justify: "center",
                children: [
                    fetching.loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Loading, {
                        color: "warning"
                    }),
                    fetching.done && fetching.error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: fetching.error
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartDatesForm);


/***/ }),

/***/ 1061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(724);




const CurrentOrders = ({ ordersCount , setOrdersCount  })=>{
    const { 0: fetching , 1: setFetching  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        error: null,
        loading: false,
        done: false
    });
    const postOrdersOnSheets = async ()=>{
        try {
            setFetching({
                error: null,
                loading: true,
                done: false
            });
            const { orders  } = await (0,_helpers_content__WEBPACK_IMPORTED_MODULE_3__/* .getOrdersToPost */ .g4)();
            const response = await fetch("/api/admin/orders", {
                method: "POST",
                body: JSON.stringify({
                    orders
                })
            });
            const result = await response.json();
            if (!result.error) {
                setOrdersCount(0);
                setFetching({
                    error: null,
                    loading: false,
                    done: true
                });
            } else throw new Error("Error enviando los pedidos");
        } catch (error) {
            setFetching({
                error: "Ocurri\xf3 un error enviando los pedidos",
                loading: false,
                done: true
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                justify: "center",
                direction: "column",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        h3: true,
                        children: "Pedidos guardados hasta ahora (sin enviar)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        h2: true,
                        children: ordersCount
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        onClick: postOrdersOnSheets,
                        className: fetching.loading ? "button-total-disabled" : "button-total",
                        children: "Enviar pedidos"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                gap: 2,
                direction: "column",
                justify: "center",
                children: [
                    fetching.loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Loading, {
                        color: "warning"
                    }),
                    fetching.done && (fetching.error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        color: "error",
                        children: fetching.error
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: "Pedidos enviados con \xe9xito"
                    }))
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentOrders);


/***/ }),

/***/ 7866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);


const CurrentStatus = ({ status , setEditing  })=>{
    const statusToText = {
        open: "Abierto",
        toOpen: "Abre pronto",
        closed: "Cerrado"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
            justify: "center",
            direction: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    h3: true,
                    children: "Estado actual del carrito"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    h4: true,
                    children: statusToText[status.status]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                    justify: "space-around",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: [
                                    "Fecha de apertura: ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: status.openDate
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: [
                                    "Fecha de cierre: ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: status.closeDate
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    onClick: ()=>setEditing(true)
                    ,
                    className: "button-total",
                    children: "Editar fechas"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentStatus);


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

/***/ 2285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Admin),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4014);
/* harmony import */ var _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5869);
/* harmony import */ var _src_services_OrderService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1751);
/* harmony import */ var _src_services_ConfigService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3507);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8366);
/* harmony import */ var _components_navigation_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8277);
/* harmony import */ var _components_admin_CartDatesForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5344);
/* harmony import */ var _components_admin_CurrentOrders__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1061);
/* harmony import */ var _components_admin_CurrentStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7866);
/* harmony import */ var _helpers_notify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_4__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_5__, _helpers_notify__WEBPACK_IMPORTED_MODULE_13__]);
([iron_session__WEBPACK_IMPORTED_MODULE_4__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_5__, _helpers_notify__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Admin(props) {
    const { 0: editingDates , 1: setEditingDates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: ordersCount , 1: setOrdersCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.ordersCount);
    const { 0: currentStatus , 1: setCurrentStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.currentStatus);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>(0,_helpers_notify__WEBPACK_IMPORTED_MODULE_13__/* .infoMessages */ .o)()
    , []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation_Header__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                user: props.user,
                title: "Panel de administrador"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Container, {
                    justify: "center",
                    alignItems: "center",
                    gap: 4,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            xs: 12,
                            sm: 10,
                            md: 6,
                            lg: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_CurrentOrders__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                ordersCount: ordersCount,
                                setOrdersCount: setOrdersCount
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            xs: 12,
                            sm: 10,
                            md: 6,
                            lg: 4,
                            children: editingDates ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_CartDatesForm__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                setEditing: setEditingDates,
                                setCurrentStatus: setCurrentStatus
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_CurrentStatus__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                status: currentStatus,
                                setEditing: setEditingDates
                            })
                        })
                    ]
                })
            })
        ]
    });
};
async function getServerSideProps(context) {
    const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_3__.container.resolve(_src_services_OrderService__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
    const configService = tsyringe__WEBPACK_IMPORTED_MODULE_3__.container.resolve(_src_services_ConfigService__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const ironSession = await (0,iron_session__WEBPACK_IMPORTED_MODULE_4__.getIronSession)(context.req, context.res, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_5__/* .sessionOptions */ .d);
    const user = ironSession.user ?? {
        logged: false
    };
    const currentStatus = await configService.getCartStatus();
    const ordersCount = await orderService.getOrdersCount();
    return {
        props: {
            user,
            currentStatus,
            ordersCount
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
var __webpack_exports__ = __webpack_require__.X(0, [531,366,869,885,82,507], () => (__webpack_exec__(2285)));
module.exports = __webpack_exports__;

})();