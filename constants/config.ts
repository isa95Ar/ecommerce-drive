export default {
	gapi: {
		SPREADSHEET_ID: process.env.SPREADSHEET_ID,
		SCOPES: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
		PRODUCT_SHEET_NAME: process.env.PRODUCT_SHEET_NAME,
		USERS_SHEET_NAME: process.env.USERS_SHEET_NAME,
		ORDERS_SHEET_NAME: process.env.ORDERS_SHEET_NAME,
		OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
		OAUTH_CLIENT_KEY: process.env.OAUTH_CLIENT_KEY,
		OAUTH_REDIRECT_URL: process.env.OAUTH_REDIRECT_URL,
		OAUTH_SCOPES: [process.env.OAUTH_SCOPES],
		PICTURES_FOLDERS_ID: process.env.PICTURES_FOLDERS_ID
	},
	IRON_SESSIONS_PASSWORD: process.env.IRON_SESSIONS_PASSWORD,
	GOOGLE_SHEET_ROWS: {
		PRODUCTS: {
			STOCK_COLUMN: 0,
			CODE_COLUMN: 1,
			NAME_COLUMN: 2,
			MINIUM_COLUMN: 3,
			PRICE_COLUMN: 4,
			CATEGORY_COLUMN: 5,
			SELLER_COLUMN: 6
		},
		USERS: {
			ID_COLUMN: 0,
			EMAIL_COLUMN: 2,
			IS_ADMIN_COLUMN: 3
		}
	}
};
