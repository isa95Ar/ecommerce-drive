"use strict";
(() => {
var exports = {};
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 863:
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.slugify = void 0;
var slugify = function(str) {
    var from = "\xc3\xc0\xc1\xc4\xc2\xc8\xc9\xcb\xca\xcc\xcd\xcf\xce\xd2\xd3\xd6\xd4\xd9\xda\xdc\xdb\xe3\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xd1\xf1\xc7\xe7", to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc", mapping = {};
    for(var i = 0, j = from.length; i < j; i++)mapping[from.charAt(i)] = to.charAt(i);
    var result = [];
    for(var i = 0, j = str.length; i < j; i++){
        var c = str.charAt(i);
        if (mapping.hasOwnProperty(str.charAt(i))) result.push(mapping[c]);
        else result.push(c);
    }
    return result.join("").replace(/[^-A-Za-z0-9]+/g, "-").toLowerCase();
};
exports.slugify = slugify;


/***/ }),

/***/ 5542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCategories)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_CategoryService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(102);
/* harmony import */ var _src_services_CategoryService__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_services_CategoryService__WEBPACK_IMPORTED_MODULE_1__);


async function getCategories(req, res) {
    const categoryService = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve((_src_services_CategoryService__WEBPACK_IMPORTED_MODULE_1___default()));
    try {
        const categories = await categoryService.getAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({
            error: error.jsonOutPut()
        });
    }
};


/***/ }),

/***/ 1787:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var mongoose_1 = __webpack_require__(1185);
var slug_1 = __webpack_require__(863);
;
var Category = new mongoose_1.Schema({
    name: {
        type: "string"
    },
    slug: {
        type: "string"
    }
});
Category.statics.getAll = function() {
    return __awaiter(this, void 0, void 0, function() {
        var categories;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4 /*yield*/ ,
                        this.find({}).select({
                            _id: 0,
                            __v: 0
                        })
                    ];
                case 1:
                    categories = _a.sent();
                    return [
                        2 /*return*/ ,
                        categories
                    ];
            }
        });
    });
};
Category.statics.createCategory = function(name) {
    return __awaiter(this, void 0, void 0, function() {
        var slug, newCategory;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    slug = (0, slug_1.slugify)(name);
                    newCategory = {
                        name: name,
                        slug: slug
                    };
                    return [
                        4 /*yield*/ ,
                        this.create(newCategory)
                    ];
                case 1:
                    _a.sent();
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
};
Category.statics.deleteAll = function() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4 /*yield*/ ,
                        this.deleteMany({})
                    ];
                case 1:
                    _a.sent();
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
};
if (!mongoose_1["default"].models.Category) {
    (0, mongoose_1.model)("Category", Category);
}
exports["default"] = mongoose_1["default"].models.Category;


/***/ }),

/***/ 102:
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
var tsyringe_1 = __webpack_require__(6896);
var ApiExeption_1 = __webpack_require__(4139);
var Category_1 = __webpack_require__(1787);
var BaseService_1 = __webpack_require__(4102);
var CategoryService = /** @class */ function(_super) {
    __extends(CategoryService1, _super);
    function CategoryService1() {
        return _super.call(this) || this;
    }
    CategoryService1.prototype.saveCategory = function(name) {
        return __awaiter(this, void 0, void 0, function() {
            var e_1;
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
                            Category_1["default"].createCategory(name)
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            {
                                error: false
                            }
                        ];
                    case 2:
                        e_1 = _a.sent();
                        throw new ApiExeption_1["default"](e_1);
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    CategoryService1.prototype.getAll = function() {
        return __awaiter(this, void 0, void 0, function() {
            var categories, e_2;
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
                            Category_1["default"].getAll()
                        ];
                    case 1:
                        categories = _a.sent();
                        return [
                            2 /*return*/ ,
                            categories
                        ];
                    case 2:
                        e_2 = _a.sent();
                        throw new ApiExeption_1["default"](e_2);
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    CategoryService1.prototype.clearAll = function() {
        return __awaiter(this, void 0, void 0, function() {
            var error_1;
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
                            Category_1["default"].deleteAll()
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            {
                                error: false
                            }
                        ];
                    case 2:
                        error_1 = _a.sent();
                        throw new ApiExeption_1["default"](error_1);
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    CategoryService1 = __decorate([
        (0, tsyringe_1.singleton)()
    ], CategoryService1);
    return CategoryService1;
}(BaseService_1["default"]);
exports["default"] = CategoryService;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [102,139], () => (__webpack_exec__(5542)));
module.exports = __webpack_exports__;

})();