"use strict";
exports.id = 111;
exports.ids = [111];
exports.modules = {

/***/ 8447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    gapi: {
        SPREADSHEET_ID: "1TWtQUwrYNQ0I4TY36UnLkhOCiqWVBeWgWiPO8wxJlSY",
        SCOPES: "https://www.googleapis.com/auth/spreadsheets",
        PRODUCT_SHEET_NAME: "products",
        USERS_SHEET_NAME: "socios",
        OAUTH_CLIENT_ID: "87845224128-7us8ca317i9pojma6ol7m3ujnp7slqfc.apps.googleusercontent.com",
        OAUTH_CLIENT_KEY: "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",
        OAUTH_REDIRECT_URL: "http://localhost:3000/api/oauthcallback",
        OAUTH_SCOPES: [
            "https://www.googleapis.com/auth/drive.metadata.readonly"
        ]
    },
    IRON_SESSIONS_PASSWORD: "8BV9cARYpoTXzesGTu3i594wVwXdyzeb"
});


/***/ }),

/***/ 7111:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sessionOptions),
/* harmony export */   "j": () => (/* binding */ withSessionRoute)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8534);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8447);
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
    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(handler, sessionOptions);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;