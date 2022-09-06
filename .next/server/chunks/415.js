"use strict";
exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 2415:
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
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var config_1 = __webpack_require__(5684);
var google_auth_library_1 = __webpack_require__(6781);
var tsyringe_1 = __webpack_require__(6896);
var googleapis_1 = __webpack_require__(9993);
var BaseService_1 = __webpack_require__(4102);
var GoogleAuthService = /** @class */ function(_super) {
    __extends(GoogleAuthService1, _super);
    function GoogleAuthService1() {
        var _this = _super.call(this) || this;
        _this.oAuth2Client = new google_auth_library_1.OAuth2Client(config_1["default"].gapi.OAUTH_CLIENT_ID, config_1["default"].gapi.OAUTH_CLIENT_KEY, config_1["default"].gapi.OAUTH_REDIRECT_URL);
        return _this;
    }
    GoogleAuthService1.prototype.startGoogleAuthentification = function() {
        return __awaiter(this, void 0, void 0, function() {
            var connection, e_1;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.initConnection()
                        ];
                    case 1:
                        connection = _a.sent();
                        this.GoogleClient = connection.googleClient;
                        this.GoogleAuth = connection.googleAuth;
                        return [
                            3 /*break*/ ,
                            3
                        ];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error("Client Google error ".concat(e_1));
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    GoogleAuthService1.prototype.initConnection = function() {
        return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a1) {
                return [
                    2 /*return*/ ,
                    new Promise(function(resolve, reject) {
                        return __awaiter(_this, void 0, void 0, function() {
                            var googleAuth, googleClient, e_2;
                            return __generator(this, function(_a) {
                                switch(_a.label){
                                    case 0:
                                        _a.trys.push([
                                            0,
                                            2,
                                            ,
                                            3
                                        ]);
                                        googleAuth = new google_auth_library_1.GoogleAuth({
                                            keyFile: "./google-credentials.json",
                                            scopes: config_1["default"].gapi.SCOPES
                                        });
                                        return [
                                            4 /*yield*/ ,
                                            googleAuth.getClient()
                                        ];
                                    case 1:
                                        googleClient = _a.sent();
                                        resolve({
                                            googleClient: googleClient,
                                            googleAuth: googleAuth
                                        });
                                        return [
                                            3 /*break*/ ,
                                            3
                                        ];
                                    case 2:
                                        e_2 = _a.sent();
                                        reject(e_2);
                                        return [
                                            3 /*break*/ ,
                                            3
                                        ];
                                    case 3:
                                        return [
                                            2 /*return*/ 
                                        ];
                                }
                            });
                        });
                    })
                ];
            });
        });
    };
    GoogleAuthService1.prototype.getAuthUrl = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            return __awaiter(_this, void 0, void 0, function() {
                var authorizeUrl;
                return __generator(this, function(_a) {
                    try {
                        authorizeUrl = this.oAuth2Client.generateAuthUrl({
                            access_type: "offline",
                            scope: [
                                "https://www.googleapis.com/auth/userinfo.profile",
                                "https://www.googleapis.com/auth/userinfo.email"
                            ]
                        });
                        resolve(authorizeUrl);
                    } catch (e) {
                        reject({
                            error: "error on url"
                        });
                    }
                    return [
                        2 /*return*/ 
                    ];
                });
            });
        });
    };
    GoogleAuthService1.prototype.getUserTokens = function(code) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            return __awaiter(_this, void 0, void 0, function() {
                var r, tokens, e_3;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            _a.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            return [
                                4 /*yield*/ ,
                                this.oAuth2Client.getToken(code)
                            ];
                        case 1:
                            r = _a.sent();
                            this.oAuth2Client.setCredentials(r.tokens);
                            tokens = r.tokens;
                            resolve(tokens);
                            return [
                                3 /*break*/ ,
                                3
                            ];
                        case 2:
                            e_3 = _a.sent();
                            reject({
                                error: e_3
                            });
                            return [
                                3 /*break*/ ,
                                3
                            ];
                        case 3:
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        });
    };
    GoogleAuthService1.prototype.getProfileInfo = function(credentials) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            _this.oAuth2Client.setCredentials(credentials);
            var oauth2 = googleapis_1.google.oauth2({
                auth: _this.oAuth2Client,
                version: "v2"
            });
            oauth2.userinfo.get(function(err, res) {
                if (!err) {
                    var profileData = res.data;
                    resolve(profileData);
                } else {
                    reject(err);
                }
            });
        });
    };
    GoogleAuthService1 = __decorate([
        (0, tsyringe_1.singleton)()
    ], GoogleAuthService1);
    return GoogleAuthService1;
}(BaseService_1["default"]);
exports["default"] = GoogleAuthService;


/***/ })

};
;