"use strict";
(() => {
var exports = {};
exports.id = 215;
exports.ids = [215];
exports.modules = {

/***/ 6781:
/***/ ((module) => {

module.exports = require("google-auth-library");

/***/ }),

/***/ 9993:
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 1858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ postOrders)
/* harmony export */ });
/* harmony import */ var _src_services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7419);

async function postOrders(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send({
            message: "Invalid method. Only POST requests allowed"
        });
    }
    try {
        const googleService = new _src_services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("orders");
        const body = JSON.parse(req.body);
        let orders = body.orders;
        await googleService.insertOnGoogleSheet(orders);
        res.status(200).json({
            success: true,
            error: false
        });
    } catch (error) {
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
var __webpack_exports__ = __webpack_require__.X(0, [96,74,419], () => (__webpack_exec__(1858)));
module.exports = __webpack_exports__;

})();