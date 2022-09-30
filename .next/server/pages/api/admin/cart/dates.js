"use strict";
(() => {
var exports = {};
exports.id = 302;
exports.ids = [302];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 6161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateCartDates)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_ConfigService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2313);


async function updateCartDates(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).send({
                message: "Invalid method. Only POST requests allowed"
            });
        }
        const configService = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_src_services_ConfigService__WEBPACK_IMPORTED_MODULE_1__["default"]);
        const body = JSON.parse(req.body);
        let { openDate , closeDate  } = body;
        if (!openDate || !closeDate) {
            return res.status(400).json({
                error: true,
                message: "Missing dates"
            });
        }
        openDate = new Date(openDate);
        closeDate = new Date(closeDate);
        await configService.setDates(openDate, closeDate);
        const newStatus = await configService.getCartStatus();
        res.status(200).json({
            ...newStatus
        });
    } catch (error) {
        res.status(500).json({
            error: error.jsonOutPut()
        });
    }
};


/***/ }),

/***/ 8646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ApiException extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, ApiException.prototype);
    }
    jsonOutPut() {
        return {
            error: true,
            message: this.message
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiException);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [96,313], () => (__webpack_exec__(6161)));
module.exports = __webpack_exports__;

})();