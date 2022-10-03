"use strict";
exports.id = 313;
exports.ids = [313];
exports.modules = {

/***/ 2313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ services_ConfigService)
});

// EXTERNAL MODULE: external "tsyringe"
var external_tsyringe_ = __webpack_require__(6896);
// EXTERNAL MODULE: ./src/exceptions/ApiExeption.ts
var ApiExeption = __webpack_require__(8646);
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
    const { openDate , closeDate  } = currentConfig;
    return {
        openDate,
        closeDate,
        status
    };
};
Config.statics.updateDates = async function(openDate, closeDate) {
    await this.findOneAndUpdate({
        openDate: openDate.toString(),
        closeDate: closeDate.toString()
    });
};
if (!(external_mongoose_default()).models.Config) {
    (0,external_mongoose_.model)("Config", Config);
}
/* harmony default export */ const models_Config = ((external_mongoose_default()).models.Config);

// EXTERNAL MODULE: ./src/services/BaseService.ts
var BaseService = __webpack_require__(9096);
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
            return JSON.parse(JSON.stringify(status));
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