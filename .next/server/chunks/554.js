"use strict";
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 9554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services_OrderService)
});

// EXTERNAL MODULE: external "tsyringe"
var external_tsyringe_ = __webpack_require__(6896);
// EXTERNAL MODULE: ./src/exceptions/ApiExeption.js
var ApiExeption = __webpack_require__(4139);
var ApiExeption_default = /*#__PURE__*/__webpack_require__.n(ApiExeption);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/models/Order.ts

const Order = new external_mongoose_.Schema({
    email: {
        type: "string"
    },
    products: [
        {
            code: "number",
            name: "string",
            qty: "number"
        }
    ]
});
Order.statics.createOrder = async function(order) {
    await this.create(order);
};
Order.statics.getOrdersCount = async function() {
    const count = await this.countDocuments({});
    return count;
};
if (!(external_mongoose_default()).models.Order) {
    (0,external_mongoose_.model)("Order", Order);
}
/* harmony default export */ const models_Order = ((external_mongoose_default()).models.Order);

// EXTERNAL MODULE: ./src/services/BaseService.js
var BaseService = __webpack_require__(4102);
var BaseService_default = /*#__PURE__*/__webpack_require__.n(BaseService);
;// CONCATENATED MODULE: ./src/services/OrderService.ts
var _class;




var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,external_tsyringe_.singleton)();
let OrderService = _class = _dec2(_class = _dec1(_class = _dec((_class = //ToDo crear interfaz de config
class OrderService extends (BaseService_default()) {
    constructor(){
        super();
    }
    async saveOrder(order) {
        try {
            await models_Order.createOrder(order);
        } catch (e) {
            throw new (ApiExeption_default())(e);
        }
    }
    async getOrdersCount() {
        try {
            const ordersCount = await models_Order.getOrdersCount();
            return {
                ordersCount
            };
        } catch (e) {
            throw new (ApiExeption_default())(e);
        }
    }
}) || _class) || _class) || _class) || _class;
/* harmony default export */ const services_OrderService = (OrderService);


/***/ })

};
;