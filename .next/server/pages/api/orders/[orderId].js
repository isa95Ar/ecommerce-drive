"use strict";
(() => {
var exports = {};
exports.id = 486;
exports.ids = [486];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 1482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateOrder)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_OrderService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9554);


async function updateOrder(req, res) {
    if (req.method !== "PUT") {
        return res.status(405).send({
            message: "Invalid method. Only PUT requests allowed"
        });
    }
    try {
        const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_src_services_OrderService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
        const { orderId  } = req.query;
        const body = JSON.parse(req.body);
        await orderService.updateOrder(orderId, body.products);
        res.status(200).json({
            error: false,
            message: "Order updated successfully"
        });
    } catch (error) {
        console.log(error, "error on update order");
        res.status(500).json(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [96,554], () => (__webpack_exec__(1482)));
module.exports = __webpack_exports__;

})();