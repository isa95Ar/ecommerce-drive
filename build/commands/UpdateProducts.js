"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.updateProducts = void 0;
var tsyringe_1 = require("tsyringe");
var ProductService_1 = require("../src/services/ProductService");
var CategoryService_1 = require("../src/services/CategoryService");
var GoogleSheetService_1 = require("../src/services/GoogleSheetService");
var slug_1 = require("../helpers/slug");
var GoogleDriveFilesService_1 = require("../src/services/GoogleDriveFilesService");
var config_1 = require("../constants/config");
function serializingProducts(products, files) {
    var serializeProducts = [];
    products.map(function (product, i) {
        if (i !== 0) {
            var fileInfo = files.find(function (file) { return file.code === parseInt(product[config_1["default"].GOOGLE_SHEET_ROWS.PRODUCTS.CODE_COLUMN]); });
            serializeProducts.push({
                stock: product[config_1["default"].GOOGLE_SHEET_ROWS.PRODUCTS.STOCK_COLUMN] == "1",
                code: parseInt(product[config_1["default"].GOOGLE_SHEET_ROWS.PRODUCTS.CODE_COLUMN]),
                name: product[config_1["default"].GOOGLE_SHEET_ROWS.PRODUCTS.NAME_COLUMN],
                minimum: product[config_1["default"].GOOGLE_SHEET_ROWS.PRODUCTS.MINIUM_COLUMN],
                price: parseFloat(product[config_1["default"].GOOGLE_SHEET_ROWS.PRODUCTS.PRICE_COLUMN]),
                category: (0, slug_1.slugify)(product[config_1["default"].GOOGLE_SHEET_ROWS.PRODUCTS.CATEGORY_COLUMN]),
                categoryName: product[config_1["default"].GOOGLE_SHEET_ROWS.PRODUCTS.CATEGORY_COLUMN],
                seller: product[config_1["default"].GOOGLE_SHEET_ROWS.PRODUCTS.SELLER_COLUMN],
                picture: fileInfo ? fileInfo.webViewLink : ''
            });
        }
    });
    return serializeProducts;
}
function saveProductsOnMongo(products) {
    return __awaiter(this, void 0, void 0, function () {
        var productService_1, e_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    productService_1 = tsyringe_1.container.resolve(ProductService_1["default"]);
                    return [4 /*yield*/, productService_1.clearAll()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, Promise.all(products.map(function (product) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, productService_1.saveProduct(product)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _a.sent();
                    console.log("Products saved succesfully");
                    return [2 /*return*/, { success: true }];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [2 /*return*/, { error: e_1 }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function saveCategories(products) {
    return __awaiter(this, void 0, void 0, function () {
        var categoryService_1, categories_1, e_2;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    categoryService_1 = tsyringe_1.container.resolve(CategoryService_1["default"]);
                    categories_1 = [];
                    return [4 /*yield*/, categoryService_1.clearAll()];
                case 1:
                    _a.sent();
                    products.map(function (product) {
                        if (!categories_1.includes(product.categoryName)) {
                            categories_1.push(product.categoryName);
                        }
                    });
                    Promise.all(categories_1.map(function (category) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, categoryService_1.saveCategory(category)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }));
                    console.log("Categories saved succesfully");
                    return [2 /*return*/, { success: true }];
                case 2:
                    e_2 = _a.sent();
                    console.log(e_2);
                    return [2 /*return*/, { error: e_2 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function updateProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var googleSheetInstance, products, GDservice, filesInfo, productsFormated, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    googleSheetInstance = new GoogleSheetService_1["default"]("products");
                    return [4 /*yield*/, googleSheetInstance.getGoogleSheetData()];
                case 1:
                    products = _a.sent();
                    GDservice = new GoogleDriveFilesService_1["default"]();
                    return [4 /*yield*/, GDservice.retrieveFilesFromPicturesFolder()];
                case 2:
                    filesInfo = _a.sent();
                    productsFormated = serializingProducts(products, filesInfo);
                    return [4 /*yield*/, saveProductsOnMongo(productsFormated)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, saveCategories(productsFormated)];
                case 4:
                    _a.sent();
                    return [2 /*return*/, { success: true }];
                case 5:
                    e_3 = _a.sent();
                    console.log(e_3, "??");
                    return [2 /*return*/, { error: e_3 }];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.updateProducts = updateProducts;
