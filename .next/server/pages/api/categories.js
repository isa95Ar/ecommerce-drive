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

/***/ 1774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ getCategories)
});

// EXTERNAL MODULE: external "tsyringe"
var external_tsyringe_ = __webpack_require__(6896);
// EXTERNAL MODULE: ./src/exceptions/ApiExeption.ts
var ApiExeption = __webpack_require__(8646);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./helpers/slug.ts
const slugify = function(str) {
    var from = "\xc3\xc0\xc1\xc4\xc2\xc8\xc9\xcb\xca\xcc\xcd\xcf\xce\xd2\xd3\xd6\xd4\xd9\xda\xdc\xdb\xe3\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xd1\xf1\xc7\xe7", to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc", mapping = {};
    for(let i = 0, j = from.length; i < j; i++)mapping[from.charAt(i)] = to.charAt(i);
    const result = [];
    for(let i1 = 0, j1 = str.length; i1 < j1; i1++){
        const c = str.charAt(i1);
        if (mapping.hasOwnProperty(str.charAt(i1))) result.push(mapping[c]);
        else result.push(c);
    }
    return result.join("").replace(/[^-A-Za-z0-9]+/g, "-").toLowerCase();
};

;// CONCATENATED MODULE: ./src/models/Category.ts


const Category = new external_mongoose_.Schema({
    name: {
        type: "string"
    },
    slug: {
        type: "string"
    }
});
Category.statics.getAll = async function() {
    const categories = await this.find({}).select({
        _id: 0,
        __v: 0
    });
    return categories;
};
Category.statics.createCategory = async function(name) {
    const slug = slugify(name);
    const newCategory = {
        name,
        slug
    };
    await this.create(newCategory);
};
Category.statics.deleteAll = async function() {
    await this.deleteMany({});
};
if (!(external_mongoose_default()).models.Category) {
    (0,external_mongoose_.model)("Category", Category);
}
/* harmony default export */ const models_Category = ((external_mongoose_default()).models.Category);

;// CONCATENATED MODULE: ./src/services/CategoryService.ts
var _class;



var _dec = (0,external_tsyringe_.singleton)();
let CategoryService = _class = _dec((_class = class CategoryService {
    async saveCategory(name) {
        try {
            await models_Category.createCategory(name);
            return {
                error: false
            };
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async getAll() {
        try {
            const categories = await models_Category.getAll();
            return categories;
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async clearAll() {
        try {
            await models_Category.deleteAll();
            return {
                error: false
            };
        } catch (error) {
            throw new ApiExeption/* default */.Z(error);
        }
    }
}) || _class) || _class;
/* harmony default export */ const services_CategoryService = (CategoryService);

;// CONCATENATED MODULE: ./pages/api/categories.ts


async function getCategories(req, res) {
    const categoryService = external_tsyringe_.container.resolve(services_CategoryService);
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1774));
module.exports = __webpack_exports__;

})();