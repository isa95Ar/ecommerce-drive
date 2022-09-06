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
/* harmony import */ var _src_services_GoogleAuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2415);
/* harmony import */ var _src_services_GoogleAuthService__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_services_GoogleAuthService__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7111);
/* harmony import */ var _src_services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9286);
/* harmony import */ var _src_services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__]);
_src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const oauthCallback = async (req, res)=>{
    const googleAuth = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve((_src_services_GoogleAuthService__WEBPACK_IMPORTED_MODULE_1___default()));
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
        /* Get User's List from Google Sheet*/ const googleSheetInstance = new (_src_services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3___default())("users");
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

/***/ 9286:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = this && this.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
exports.__esModule = true;
var config_1 = __webpack_require__(8447);
var GoogleAuthService_1 = __webpack_require__(2415);
var googleapis_1 = __webpack_require__(9993);
var GoogleSheetService = /** @class */ function(_super) {
    __extends(GoogleSheetService1, _super);
    function GoogleSheetService1(module) {
        var _this = _super.call(this) || this;
        _this.module = module;
        _this.googleSheetsImplements = googleapis_1.google.sheets({
            version: "v4",
            auth: _this.GoogleClient
        });
        return _this;
    }
    GoogleSheetService1.prototype.getGoogleSheetData = function() {
        return __awaiter(this, void 0, void 0, function() {
            var sheetName, rows, error_1;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.startGoogleAuthentification()
                        ];
                    case 1:
                        _a.sent();
                        sheetName = this.getSheetName();
                        return [
                            4 /*yield*/ ,
                            this.googleSheetsImplements.spreadsheets.values.get({
                                auth: this.GoogleAuth,
                                spreadsheetId: config_1["default"].gapi.SPREADSHEET_ID,
                                range: sheetName
                            })
                        ];
                    case 2:
                        rows = _a.sent();
                        return [
                            2 /*return*/ ,
                            rows.data.values
                        ];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Error on get Google Sheet Instance ".concat(error_1));
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    GoogleSheetService1.prototype.getSheetName = function() {
        var sheetName;
        switch(this.module){
            case "products":
                sheetName = config_1["default"].gapi.PRODUCT_SHEET_NAME;
                break;
            case "users":
                sheetName = config_1["default"].gapi.USERS_SHEET_NAME;
            default:
                break;
        }
        if (!sheetName) throw new Error("Module Name incorrect!");
        return sheetName;
    };
    return GoogleSheetService1;
}(GoogleAuthService_1["default"]);
exports["default"] = GoogleSheetService;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,102,111,415], () => (__webpack_exec__(9944)));
module.exports = __webpack_exports__;

})();