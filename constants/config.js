"use strict";
exports.__esModule = true;
exports["default"] = {
    gapi: {
        SPREADSHEET_ID: process.env.SPREADSHEET_ID,
        SCOPES: process.env.SCOPES,
        PRODUCT_SHEET_NAME: process.env.PRODUCT_SHEET_NAME,
        USERS_SHEET_NAME: process.env.USERS_SHEET_NAME,
        OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
        OAUTH_CLIENT_KEY: process.env.OAUTH_CLIENT_KEY,
        OAUTH_REDIRECT_URL: process.env.OAUTH_REDIRECT_URL,
        OAUTH_SCOPES: [process.env.OAUTH_SCOPES]
    },
    IRON_SESSIONS_PASSWORD: process.env.IRON_SESSIONS_PASSWORD
};
