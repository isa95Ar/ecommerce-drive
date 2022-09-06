"use strict";
(() => {
var exports = {};
exports.id = 870;
exports.ids = [870];
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

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 9944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_GoogleAuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5074);
/* harmony import */ var _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7111);
/* harmony import */ var _src_services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7419);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__]);
_src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const oauthCallback = async (req, res)=>{
    const googleAuth = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_src_services_GoogleAuthService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    try {
        const code = req.query.code;
        if (!code) {
            res.json({
                error: true,
                message: "code doesnt exists"
            });
        }
        /* Get Profile from Google OAuth2*/ const clientCredentials = await googleAuth.getUserTokens(code);
        const profile = await googleAuth.getProfileInfo(clientCredentials);
        /* Get User's List from Google Sheet*/ const googleSheetInstance = new _src_services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("users");
        const users = await googleSheetInstance.getGoogleSheetData();
        const MatchEmail = users.find((user)=>user[1] === profile.email
        );
        if (!MatchEmail) {
            res.redirect("/#unauthorized");
        } else {
            req.session.user = {
                id_google_sheet: profile.id,
                name: profile.name,
                email: profile.email,
                profile_picture: profile.picture,
                logged: true,
                isAdmin: MatchEmail[2] === "1"
            };
            await req.session.save();
            res.redirect("/#logged");
        }
    } catch (e) {
        res.json(e);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__/* .withSessionRoute */ .j)(oauthCallback));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8447);
/* harmony import */ var _GoogleAuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5074);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9993);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_2__);



class GoogleSheetService extends _GoogleAuthService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z {
    constructor(module){
        super();
        this.module = module;
        this.googleSheetsImplements = googleapis__WEBPACK_IMPORTED_MODULE_2__.google.sheets({
            version: "v4",
            auth: this.GoogleClient
        });
    }
    async getGoogleSheetData() {
        try {
            await this.startGoogleAuthentification();
            const sheetName = this.getSheetName();
            const rows = await this.googleSheetsImplements.spreadsheets.values.get({
                auth: this.GoogleAuth,
                spreadsheetId: _constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gapi.SPREADSHEET_ID */ .Z.gapi.SPREADSHEET_ID,
                range: sheetName
            });
            return rows.data.values;
        } catch (error) {
            throw new Error(`Error on get Google Sheet Instance ${error}`);
        }
    }
    getSheetName() {
        let sheetName;
        switch(this.module){
            case "products":
                sheetName = _constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gapi.PRODUCT_SHEET_NAME */ .Z.gapi.PRODUCT_SHEET_NAME;
                break;
            case "users":
                sheetName = _constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gapi.USERS_SHEET_NAME */ .Z.gapi.USERS_SHEET_NAME;
            default:
                break;
        }
        if (!sheetName) throw new Error("Module Name incorrect!");
        return sheetName;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleSheetService);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,96,111,74], () => (__webpack_exec__(9944)));
module.exports = __webpack_exports__;

})();