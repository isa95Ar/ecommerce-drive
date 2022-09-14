"use strict";
exports.__esModule = true;
var dotEnv = require("dotenv");
exports["default"] = {
    gapi: {
        SPREADSHEET_ID: process.env.SPREADSHEET_ID,
        SCOPES: ["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive"],
        PRODUCT_SHEET_NAME: process.env.PRODUCT_SHEET_NAME,
        USERS_SHEET_NAME: process.env.USERS_SHEET_NAME,
        ORDERS_SHEET_NAME: process.env.ORDERS_SHEET_NAME,
        OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
        OAUTH_CLIENT_KEY: process.env.OAUTH_CLIENT_KEY,
        OAUTH_REDIRECT_URL: process.env.OAUTH_REDIRECT_URL,
        OAUTH_SCOPES: [process.env.OAUTH_SCOPES],
        PICTURES_FOLDERS_ID: process.env.PICTURES_FOLDERS_ID
    },
    IRON_SESSIONS_PASSWORD: process.env.IRON_SESSIONS_PASSWORD
};
