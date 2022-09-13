"use strict";
exports.id = 97;
exports.ids = [97];
exports.modules = {

/***/ 724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CP": () => (/* binding */ getCategories),
/* harmony export */   "Xp": () => (/* binding */ getProducts),
/* harmony export */   "g4": () => (/* binding */ getOrdersToPost)
/* harmony export */ });
/* unused harmony export getCartStatus */
/* harmony import */ var _src_exceptions_ApiExeption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7393);

const getProducts = async (page = 1, category = null)=>{
    let url = "/api/products";
    if (category) {
        url += "/" + category;
    }
    let products = await fetch(`${url}?page=${page}`).then((data)=>data.json()
    );
    return products;
};
const getCategories = async ()=>{
    let categories = await fetch("/api/categories").then((data)=>data.json()
    );
    return categories;
};
const getCartStatus = async ()=>{
    let cartStatus = await fetch("/api/cart/status").then((data)=>data.json()
    );
    return cartStatus;
};
const getOrdersToPost = async ()=>{
    try {
        const orders = await fetch("/api/admin/orders/to-post").then((data)=>data.json()
        );
        return orders;
    } catch (error) {
        throw new _src_exceptions_ApiExeption__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(error);
    }
};


/***/ }),

/***/ 7393:
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

/***/ 9453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
var _class;


var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__.singleton)();
let BaseService = _class = _dec2(_class = _dec1(_class = _dec((_class = class BaseService {
    constructor(){
        this.mongoInit().then((res)=>{
            console.log(`mongo db connection actual Status ${res}`);
        }).catch((e)=>console.log(e)
        );
    }
    async mongoInit() {
        return new Promise(async (resolve, reject)=>{
            try {
                if (this.isDbConnected) return;
                const db = await (0,mongoose__WEBPACK_IMPORTED_MODULE_1__.connect)("mongodb://localhost:27017/almargen");
                this.isDbConnected = db.connections[0].readyState;
                console.log(`connected succesfully =)`);
                resolve(db.connections[0].readyState);
            } catch (e) {
                reject(e);
            }
        });
    }
}) || _class) || _class) || _class) || _class;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseService);


/***/ }),

/***/ 3507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services_ConfigService)
});

// EXTERNAL MODULE: external "tsyringe"
var external_tsyringe_ = __webpack_require__(6896);
// EXTERNAL MODULE: ./src/exceptions/ApiExeption.ts
var ApiExeption = __webpack_require__(7393);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/models/Config.ts

const Config = new external_mongoose_.Schema({
    openDate: {
        type: Date || null
    },
    closeDate: {
        type: Date || null
    }
});
Config.statics.getCartStatus = async function() {
    const currentConfig = await this.findOne({});
    const openTime = currentConfig.openDate ? currentConfig.openDate.getTime() : null;
    const closeTime = currentConfig.closeDate ? currentConfig.closeDate.getTime() : null;
    if (!openTime || !closeTime) {
        return {
            openDate: null,
            closeDate: null,
            status: "closed"
        };
    }
    const today = new Date();
    const isOpen = today.getTime() >= openTime && today.getTime() <= closeTime;
    let status = "";
    if (isOpen) {
        status = "open";
    } else if (today.getTime() < openTime) {
        status = "toOpen";
    } else {
        status = "closed";
    }
    const formatDate = (date)=>{
        const day = date.getUTCDate();
        let formattedDay = day.toString();
        const month = date.getUTCMonth() + 1;
        let formattedMonth = month.toString();
        if (formattedDay.length === 1) {
            formattedDay = "0" + formattedDay;
        }
        if (formattedMonth.length === 1) {
            formattedMonth = "0" + formattedMonth;
        }
        return `${formattedDay}/${formattedMonth}`;
    };
    const openDate = formatDate(currentConfig.openDate);
    const closeDate = formatDate(currentConfig.closeDate);
    return {
        openDate,
        closeDate,
        status
    };
};
Config.statics.updateDates = async function(openDate, closeDate) {
    await this.findOneAndUpdate({
        openDate,
        closeDate
    });
};
if (!(external_mongoose_default()).models.Config) {
    (0,external_mongoose_.model)("Config", Config);
}
/* harmony default export */ const models_Config = ((external_mongoose_default()).models.Config);

// EXTERNAL MODULE: ./src/services/BaseService.ts
var BaseService = __webpack_require__(9453);
;// CONCATENATED MODULE: ./src/services/ConfigService.ts
var _class;




var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,external_tsyringe_.singleton)();
let ConfigService = _class = _dec2(_class = _dec1(_class = _dec((_class = class ConfigService extends BaseService/* default */.Z {
    constructor(){
        super();
    }
    async getCartStatus() {
        try {
            const status = await models_Config.getCartStatus();
            return status;
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async setDates(openDate, closeDate) {
        try {
            await models_Config.updateDates(openDate, closeDate);
            return {
                error: false
            };
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
}) || _class) || _class) || _class) || _class;
/* harmony default export */ const services_ConfigService = (ConfigService);


/***/ })

};
;