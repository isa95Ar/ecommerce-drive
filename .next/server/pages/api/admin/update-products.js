"use strict";
(() => {
var exports = {};
exports.id = 543;
exports.ids = [543];
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

/***/ 3236:
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 1918:
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
exports.updateProducts = void 0;
__webpack_require__(3236);
var tsyringe_1 = __webpack_require__(6896);
var ProductService_1 = __webpack_require__(2005);
var CategoryService_1 = __webpack_require__(2102);
var GoogleSheetService_1 = __webpack_require__(7419);
var slug_1 = __webpack_require__(5433);
var ConfigService_1 = __webpack_require__(2313);
function serializingProducts(products) {
    var serializeProducts = [];
    products.map(function(product, i) {
        if (i !== 0) {
            serializeProducts.push({
                stock: product[0] == "1",
                code: parseInt(product[1]),
                name: product[2],
                minium: product[3],
                price: parseFloat(product[4]),
                category: (0, slug_1.slugify)(product[5]),
                categoryName: product[5],
                seller: product[6]
            });
        }
    });
    return serializeProducts;
}
function saveProductsOnMongo(products) {
    return __awaiter(this, void 0, void 0, function() {
        var productService_1, e_1;
        var _this = this;
        return __generator(this, function(_a1) {
            switch(_a1.label){
                case 0:
                    _a1.trys.push([
                        0,
                        3,
                        ,
                        4
                    ]);
                    productService_1 = tsyringe_1.container.resolve(ProductService_1["default"]);
                    return [
                        4 /*yield*/ ,
                        productService_1.clearAll()
                    ];
                case 1:
                    _a1.sent();
                    return [
                        4 /*yield*/ ,
                        Promise.all(products.map(function(product) {
                            return __awaiter(_this, void 0, void 0, function() {
                                return __generator(this, function(_a) {
                                    switch(_a.label){
                                        case 0:
                                            return [
                                                4 /*yield*/ ,
                                                productService_1.saveProduct(product)
                                            ];
                                        case 1:
                                            _a.sent();
                                            return [
                                                2 /*return*/ 
                                            ];
                                    }
                                });
                            });
                        }))
                    ];
                case 2:
                    _a1.sent();
                    console.log("Products saved succesfully");
                    return [
                        2 /*return*/ ,
                        {
                            success: true
                        }
                    ];
                case 3:
                    e_1 = _a1.sent();
                    console.log(e_1);
                    return [
                        2 /*return*/ ,
                        {
                            error: e_1
                        }
                    ];
                case 4:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function saveCategories(products) {
    return __awaiter(this, void 0, void 0, function() {
        var categoryService_1, categories_1, e_2;
        var _this = this;
        return __generator(this, function(_a2) {
            switch(_a2.label){
                case 0:
                    _a2.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    categoryService_1 = tsyringe_1.container.resolve(CategoryService_1["default"]);
                    categories_1 = [];
                    return [
                        4 /*yield*/ ,
                        categoryService_1.clearAll()
                    ];
                case 1:
                    _a2.sent();
                    products.map(function(product) {
                        if (!categories_1.includes(product.categoryName)) {
                            categories_1.push(product.categoryName);
                        }
                    });
                    Promise.all(categories_1.map(function(category) {
                        return __awaiter(_this, void 0, void 0, function() {
                            return __generator(this, function(_a) {
                                switch(_a.label){
                                    case 0:
                                        return [
                                            4 /*yield*/ ,
                                            categoryService_1.saveCategory(category)
                                        ];
                                    case 1:
                                        _a.sent();
                                        return [
                                            2 /*return*/ 
                                        ];
                                }
                            });
                        });
                    }));
                    console.log("Categories saved succesfully");
                    return [
                        2 /*return*/ ,
                        {
                            success: true
                        }
                    ];
                case 2:
                    e_2 = _a2.sent();
                    console.log(e_2);
                    return [
                        2 /*return*/ ,
                        {
                            error: e_2
                        }
                    ];
                case 3:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function updateProducts() {
    return __awaiter(this, void 0, void 0, function() {
        var googleSheetInstance, products, productsFormated, e_3;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    _a.trys.push([
                        0,
                        4,
                        ,
                        5
                    ]);
                    googleSheetInstance = new GoogleSheetService_1["default"]("products");
                    return [
                        4 /*yield*/ ,
                        googleSheetInstance.getGoogleSheetData()
                    ];
                case 1:
                    products = _a.sent();
                    productsFormated = serializingProducts(products);
                    return [
                        4 /*yield*/ ,
                        saveProductsOnMongo(productsFormated)
                    ];
                case 2:
                    _a.sent();
                    return [
                        4 /*yield*/ ,
                        saveCategories(productsFormated)
                    ];
                case 3:
                    _a.sent();
                    return [
                        2 /*return*/ ,
                        {
                            success: true
                        }
                    ];
                case 4:
                    e_3 = _a.sent();
                    console.log(e_3, "??");
                    return [
                        2 /*return*/ ,
                        {
                            error: e_3
                        }
                    ];
                case 5:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
exports.updateProducts = updateProducts;
function initExport() {
    return __awaiter(this, void 0, void 0, function() {
        var configService, cartStatus;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    console.log("Check if today the day of days");
                    configService = tsyringe_1.container.resolve(ConfigService_1["default"]);
                    return [
                        4 /*yield*/ ,
                        configService.getCartStatus()
                    ];
                case 1:
                    cartStatus = _a.sent();
                    if (!(cartStatus.status === "open")) return [
                        3 /*break*/ ,
                        3
                    ];
                    console.log("yes is today");
                    return [
                        4 /*yield*/ ,
                        updateProducts()
                    ];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
initExport().then(function(res) {
    return console.log("result of first exportation ".concat(res));
});
//our Cron on Node :v
setInterval(function() {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4 /*yield*/ ,
                        initExport()
                    ];
                case 1:
                    _a.sent();
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}, 1000 * 60 * 24);


/***/ }),

/***/ 6522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateProductsOnDb)
/* harmony export */ });
/* harmony import */ var _commands_UpdateProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1918);
/* harmony import */ var _commands_UpdateProducts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_commands_UpdateProducts__WEBPACK_IMPORTED_MODULE_0__);

async function updateProductsOnDb(req, res) {
    try {
        await (0,_commands_UpdateProducts__WEBPACK_IMPORTED_MODULE_0__.updateProducts)();
        res.status(200).json({
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
var __webpack_exports__ = __webpack_require__.X(0, [96,684,74,313,419,5,102], () => (__webpack_exec__(6522)));
module.exports = __webpack_exports__;

})();