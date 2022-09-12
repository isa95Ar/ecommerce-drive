"use strict";
exports.id = 5;
exports.ids = [5];
exports.modules = {

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


/***/ }),

/***/ 2005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services_ProductService)
});

// EXTERNAL MODULE: external "tsyringe"
var external_tsyringe_ = __webpack_require__(6896);
// EXTERNAL MODULE: ./src/exceptions/ApiExeption.ts
var ApiExeption = __webpack_require__(8646);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/models/Product.ts

const Product = new external_mongoose_.Schema({
    stock: {
        type: "boolean"
    },
    code: {
        type: "number"
    },
    name: {
        type: "string"
    },
    minium: {
        type: "string"
    },
    price: {
        type: "number"
    },
    category: {
        type: "string"
    },
    seller: {
        type: "string"
    }
});
Product.statics.getProducts = async function(page) {
    const limit = 12;
    const productsCount = await this.countDocuments();
    const products = await this.find({}).select({
        _id: 0,
        __v: 0
    }).limit(limit).skip(limit * page);
    const totalPages = Math.ceil(productsCount / limit);
    return {
        products,
        totalPages
    };
};
Product.statics.createProduct = async function(product) {
    await this.create(product);
};
Product.statics.getByCategory = async function(category, page) {
    const limit = 12;
    const productsCount = await this.countDocuments({
        category
    });
    const products = await this.find({
        category
    }).select({
        _id: 0,
        __v: 0
    }).limit(limit).skip(limit * (page - 1));
    if (!products.length) {
        throw new Error(`No products found on category ${category}`);
    }
    const totalPages = Math.ceil(productsCount / limit);
    return {
        products,
        totalPages
    };
};
Product.statics.deleteAll = async function() {
    await this.deleteMany({});
};
if (!(external_mongoose_default()).models.Product) {
    (0,external_mongoose_.model)("Product", Product);
}
/* harmony default export */ const models_Product = ((external_mongoose_default()).models.Product);

// EXTERNAL MODULE: ./src/services/BaseService.ts
var BaseService = __webpack_require__(9096);
;// CONCATENATED MODULE: ./src/services/ProductService.ts
var _class;




var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,external_tsyringe_.singleton)();
let ProductService = _class = _dec2(_class = _dec1(_class = _dec((_class = class ProductService extends BaseService/* default */.Z {
    constructor(){
        super();
    }
    async saveProduct(product) {
        try {
            await models_Product.createProduct(product);
            return {
                error: false
            };
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async getProducts(page = 1) {
        try {
            const products = await models_Product.getProducts(page);
            return products;
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async getByCategory(category, page = 1) {
        try {
            const products = await models_Product.getByCategory(category, page);
            return products;
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async clearAll() {
        try {
            return models_Product.deleteAll();
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
}) || _class) || _class) || _class) || _class;
/* harmony default export */ const services_ProductService = (ProductService);


/***/ })

};
;