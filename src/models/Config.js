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
var mongoose_1 = require("mongoose");
var Config = new mongoose_1.Schema({
    openDate: { type: Date || null },
    closeDate: { type: Date || null }
});
Config.statics.getCartStatus = function () {
    return __awaiter(this, void 0, void 0, function () {
        var currentConfig, openTime, closeTime, today, isOpen, status, formatDate, openDate, closeDate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.findOne({})];
                case 1:
                    currentConfig = _a.sent();
                    openTime = currentConfig.openDate ? currentConfig.openDate.getTime() : null;
                    closeTime = currentConfig.closeDate ? currentConfig.closeDate.getTime() : null;
                    today = new Date();
                    isOpen = today.getTime() >= openTime && today.getTime() <= closeTime;
                    status = "";
                    if (!openTime || !closeTime) {
                        status = "closed";
                    }
                    else if (isOpen) {
                        status = "open";
                    }
                    else if (today.getTime() < openTime) {
                        status = "toOpen";
                    }
                    else {
                        status = "closed";
                    }
                    formatDate = function (date) {
                        var day = date.getUTCDate();
                        var formattedDay = day.toString();
                        var month = date.getUTCMonth() + 1;
                        var formattedMonth = month.toString();
                        if (formattedDay.length === 1) {
                            formattedDay = "0" + formattedDay;
                        }
                        ;
                        if (formattedMonth.length === 1) {
                            formattedMonth = "0" + formattedMonth;
                        }
                        ;
                        return "".concat(formattedDay, "/").concat(formattedMonth);
                    };
                    openDate = formatDate(currentConfig.openDate);
                    closeDate = formatDate(currentConfig.closeDate);
                    return [2 /*return*/, { openDate: openDate, closeDate: closeDate, status: status }];
            }
        });
    });
};
Config.statics.updateDates = function (openDate, closeDate) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.findOneAndUpdate({ openDate: openDate, closeDate: closeDate })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
if (!mongoose_1["default"].models.Config) {
    (0, mongoose_1.model)("Config", Config);
}
exports["default"] = mongoose_1["default"].models.Config;
