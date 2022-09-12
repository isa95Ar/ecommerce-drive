"use strict";
exports.id = 869;
exports.ids = [869];
exports.modules = {

/***/ 3075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    gapi: {
        SPREADSHEET_ID: process.env.SPREADSHEET_ID,
        SCOPES: process.env.SCOPES,
        PRODUCT_SHEET_NAME: process.env.PRODUCT_SHEET_NAME,
        USERS_SHEET_NAME: process.env.USERS_SHEET_NAME,
        OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
        OAUTH_CLIENT_KEY: process.env.OAUTH_CLIENT_KEY,
        OAUTH_REDIRECT_URL: process.env.OAUTH_REDIRECT_URL,
        OAUTH_SCOPES: [
            process.env.OAUTH_SCOPES
        ]
    },
    IRON_SESSIONS_PASSWORD: process.env.IRON_SESSIONS_PASSWORD
});


/***/ }),

/***/ 5869:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sessionOptions)
/* harmony export */ });
/* unused harmony export withSessionRoute */
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9531);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const sessionOptions = {
    password: _constants_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].IRON_SESSIONS_PASSWORD */ .Z.IRON_SESSIONS_PASSWORD,
    cookieName: "almargen_app",
    cookieOptions: {
        secure: false
    }
};
function withSessionRoute(handler) {
    return withIronSessionApiRoute(handler, sessionOptions);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;