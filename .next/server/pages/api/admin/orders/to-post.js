"use strict";
(() => {
var exports = {};
exports.id = 354;
exports.ids = [354];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 8394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOrdersToPost)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_OrderService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9554);


async function getOrdersToPost(req, res) {
    const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_src_services_OrderService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    try {
        const orders = await orderService.getOrdersToPost();
        res.status(200).json({
            orders
        });
    } catch (error) {
        res.status(500).json(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [96,554], () => (__webpack_exec__(8394)));
module.exports = __webpack_exports__;

})();