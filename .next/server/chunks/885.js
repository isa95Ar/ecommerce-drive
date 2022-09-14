"use strict";
exports.id = 885;
exports.ids = [885];
exports.modules = {

/***/ 8662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ infoMessages)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const infoMessages = ()=>{
    const action = location.href.split("#");
    switch(action[1]){
        case "logout":
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.info("Se ha deslogeado");
            break;
        case "logged":
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success("Inicio de sesion exitoso!");
            break;
        case "unauthorized":
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("No se encuentra autorizado");
            break;
        default:
            break;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ })

};
;