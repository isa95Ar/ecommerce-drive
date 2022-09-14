"use strict";
(() => {
var exports = {};
exports.id = 99;
exports.ids = [99];
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

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 6733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "googleapis"
var external_googleapis_ = __webpack_require__(9993);
// EXTERNAL MODULE: ./constants/config.ts
var config = __webpack_require__(5684);
// EXTERNAL MODULE: ./src/services/GoogleAuthService.ts
var GoogleAuthService = __webpack_require__(5074);
;// CONCATENATED MODULE: ./src/services/GoogleDriveFilesService.ts



class GoogleDriveFilesService extends GoogleAuthService/* default */.Z {
    constructor(){
        super();
    }
    async retrieveFilesFromPicturesFolder() {
        try {
            await this.startGoogleAuthentification();
            this.googleFileService = external_googleapis_.google.drive({
                version: "v3",
                auth: this.GoogleAuth
            });
            const responseFileList = await this.googleFileService.files.list({
                corpora: "allDrives",
                includeItemsFromAllDrives: true,
                supportsAllDrives: true,
                q: `'${config/* default.gapi.PICTURES_FOLDERS_ID */.Z.gapi.PICTURES_FOLDERS_ID}' in parents`,
                fields: "*"
            });
            const filesFields = responseFileList.data.files.map((file)=>{
                return {
                    webViewLink: file.webContentLink,
                    code: parseInt(file.name.split(".")[0])
                };
            });
            return filesFields;
        } catch (e) {
            throw new Error(e);
        }
    }
}
/* harmony default export */ const services_GoogleDriveFilesService = (GoogleDriveFilesService);

;// CONCATENATED MODULE: ./pages/api/drivefiles.ts

async function handler(req, res) {
    try {
        const service = new services_GoogleDriveFilesService();
        const files = await service.retrieveFilesFromPicturesFolder();
        res.json({
            files
        });
    } catch (e) {
        res.json({
            message: e
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [96,74], () => (__webpack_exec__(6733)));
module.exports = __webpack_exports__;

})();