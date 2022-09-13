"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
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



const CartDatesForm = ({ setEditing  })=>{
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
            await fetch("/api/admin/cart/dates", {
                method: "POST",
                body: JSON.stringify({
                    openDate,
                    closeDate
                })
            });
            setFetching({
                error: null,
                loading: false,
                done: true
            });
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
                    fetching.done && (fetching.error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: fetching.error
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: "Las fechas se guardaron exitosamente"
                    }))
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartDatesForm);


/***/ }),

/***/ 4547:
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

/***/ 1061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(724);



const CurrentOrders = ({ ordersCount  })=>{
    const postOrdersOnSheets = async ()=>{
        try {
            const { orders  } = await (0,_helpers_content__WEBPACK_IMPORTED_MODULE_2__/* .getOrdersToPost */ .g4)();
            await fetch("/api/admin/orders", {
                method: "POST",
                body: JSON.stringify({
                    orders
                })
            });
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
            justify: "center",
            direction: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    h3: true,
                    children: "Pedidos realizados hasta ahora"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    h2: true,
                    children: ordersCount
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    onClick: postOrdersOnSheets,
                    className: "button-total",
                    children: "Enviar pedidos"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentOrders);


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
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1713);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5141);
/* harmony import */ var _components_admin_CartDatesForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5344);
/* harmony import */ var _components_admin_CurrentOrders__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1061);
/* harmony import */ var _components_admin_CurrentDates__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4547);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_4__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_5__]);
([iron_session__WEBPACK_IMPORTED_MODULE_4__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Admin(props) {
    const { 0: editingDates , 1: setEditingDates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
                                ordersCount: props.ordersCount
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            xs: 12,
                            sm: 10,
                            md: 6,
                            lg: 4,
                            children: editingDates ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_CartDatesForm__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                setEditing: setEditingDates
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_CurrentDates__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                status: props.currentStatus,
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

/***/ 1751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services_OrderService)
});

// EXTERNAL MODULE: external "tsyringe"
var external_tsyringe_ = __webpack_require__(6896);
// EXTERNAL MODULE: ./src/exceptions/ApiExeption.ts
var ApiExeption = __webpack_require__(7393);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/models/Order.ts

const Order = new external_mongoose_.Schema({
    email: {
        type: "string"
    },
    products: [
        {
            code: "number",
            name: "string",
            price: "number",
            minimum: "string",
            qty: "number",
            total: "number"
        }
    ]
});
Order.statics.createOrder = async function(order) {
    await this.create(order);
};
Order.statics.getOrdersCount = async function() {
    const count = await this.countDocuments({});
    return count;
};
Order.statics.getUserOrder = async function(email) {
    const order = await this.find({
        email
    });
    return order;
};
Order.statics.getOrdersToPost = async function() {
    const allOrders = await this.find({});
    const formattedOrders = [];
    allOrders.map((order)=>{
        order.products.map((product)=>{
            const newOrder = {
                email: order.email,
                product: product.name,
                code: product.code,
                cantidad: product.qty
            };
            formattedOrders.push(newOrder);
        });
    });
    return formattedOrders;
};
if (!(external_mongoose_default()).models.Order) {
    (0,external_mongoose_.model)("Order", Order);
}
/* harmony default export */ const models_Order = ((external_mongoose_default()).models.Order);

// EXTERNAL MODULE: ./src/services/BaseService.ts
var BaseService = __webpack_require__(9453);
;// CONCATENATED MODULE: ./src/services/OrderService.ts
var _class;




var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,external_tsyringe_.singleton)();
let OrderService = _class = _dec2(_class = _dec1(_class = _dec((_class = //ToDo crear interfaz de config
class OrderService extends BaseService/* default */.Z {
    constructor(){
        super();
    }
    async saveOrder(order) {
        try {
            await models_Order.createOrder(order);
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async getOrdersCount() {
        try {
            const ordersCount = await models_Order.getOrdersCount();
            return ordersCount;
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async getUserOrder(email) {
        try {
            const userOrder = await models_Order.getUserOrder(email);
            return userOrder;
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async getOrdersToPost() {
        try {
            const orders = await models_Order.getOrdersToPost();
            return orders;
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
}) || _class) || _class) || _class) || _class;
/* harmony default export */ const services_OrderService = (OrderService);


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
var __webpack_exports__ = __webpack_require__.X(0, [531,869,834,97], () => (__webpack_exec__(2285)));
module.exports = __webpack_exports__;

})();