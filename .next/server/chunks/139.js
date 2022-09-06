"use strict";
exports.id = 139;
exports.ids = [139];
exports.modules = {

/***/ 4139:
/***/ (function(__unused_webpack_module, exports) {


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
exports.__esModule = true;
var ApiException = /** @class */ function(_super) {
    __extends(ApiException1, _super);
    function ApiException1(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, ApiException1.prototype);
        return _this;
    }
    ApiException1.prototype.jsonOutPut = function() {
        return {
            error: true,
            message: this.message
        };
    };
    return ApiException1;
}(Error);
exports["default"] = ApiException;


/***/ })

};
;