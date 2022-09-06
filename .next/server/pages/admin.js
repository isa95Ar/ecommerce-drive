"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 5344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CartDatesForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function CartDatesForm() {
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
        setOpenDateError("");
        setCloseDateError("");
        setOpenDate(e.target.value);
        let newCloseDate = new Date(e.target.value);
        newCloseDate.setDate(newCloseDate.getDate() + 1);
        setCloseDate(formatDate(newCloseDate));
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                h4: true,
                children: "Fechas del carrito"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                gap: 3,
                justify: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                type: "date",
                                label: "Fecha de apertura",
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
                                label: "Fecha de cierre",
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


/***/ }),

/***/ 3524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Orders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);


function Orders() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
            justify: "center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                children: "Pedidos realizados hasta ahora"
            })
        })
    });
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
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4014);
/* harmony import */ var _components_admin_CartDatesForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5344);
/* harmony import */ var _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5869);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1713);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5141);
/* harmony import */ var _components_admin_Orders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3524);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_2__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_4__]);
([iron_session__WEBPACK_IMPORTED_MODULE_2__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Admin(props) {
    console.log(props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                user: props.user,
                title: "Panel de administrador"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                    justify: "center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_Orders__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_CartDatesForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                        ]
                    })
                })
            })
        ]
    });
};
async function getServerSideProps(context) {
    const ironSession = await (0,iron_session__WEBPACK_IMPORTED_MODULE_2__.getIronSession)(context.req, context.res, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_4__/* .sessionOptions */ .d);
    const user = ironSession.user ?? {
        logged: false
    };
    return {
        props: {
            user
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

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
var __webpack_exports__ = __webpack_require__.X(0, [531,834,869], () => (__webpack_exec__(2285)));
module.exports = __webpack_exports__;

})();