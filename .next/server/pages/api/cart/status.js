"use strict";
(() => {
var exports = {};
exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 8778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCartStatus)
/* harmony export */ });
/* harmony import */ var _src_services_ConfigService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1215);
/* harmony import */ var _src_services_ConfigService__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_services_ConfigService__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_1__);


async function getCartStatus(req, res) {
    const configService = tsyringe__WEBPACK_IMPORTED_MODULE_1__.container.resolve((_src_services_ConfigService__WEBPACK_IMPORTED_MODULE_0___default()));
    try {
        const cartStatus = await configService.getCartStatus();
        res.status(200).json(cartStatus);
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
var __webpack_exports__ = __webpack_require__.X(0, [102,139,215], () => (__webpack_exec__(8778)));
module.exports = __webpack_exports__;

})();