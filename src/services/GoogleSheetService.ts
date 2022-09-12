import config from '../../constants/config';
import GoogleAuthService from './GoogleAuthService';
import { google, sheets_v4 } from 'googleapis';
import { OrderType } from '../global/types';

interface googleSheetDataOptions {
	getGoogleSheetData(): Promise<Array<Array<string>>>;
}

class GoogleSheetService extends GoogleAuthService implements googleSheetDataOptions {
	private googleSheetsImplements: sheets_v4.Sheets;
	private module: string;

	constructor(module: string) {
		super();
		this.module = module;
		this.googleSheetsImplements = google.sheets({
			version: 'v4',
			auth: this.GoogleClient
		});
	}

	public async getGoogleSheetData(): Promise<Array<Array<string>>> {
		try {
			await this.startGoogleAuthentification();
			const sheetName = this.getSheetName();
			const rows = await this.googleSheetsImplements.spreadsheets.values.get({
				auth: this.GoogleAuth,
				spreadsheetId: config.gapi.SPREADSHEET_ID,
				range: sheetName
			});

			return rows.data.values;
		} catch (error) {
			throw new Error(`Error on get Google Sheet Instance ${error}`);
		}
	}

	public async insertOnGoogleSheet(): Promise<{ status: string; message: any }> {
		return new Promise(async (resolve, reject) => {
			try {
                await this.startGoogleAuthentification();
				const sheetName = this.getSheetName();
             
				const response = this.googleSheetsImplements.spreadsheets.values.append({
					spreadsheetId: config.gapi.SPREADSHEET_ID,
                    auth: this.GoogleAuth,
                    range: sheetName,
                    valueInputOption:"RAW",
					requestBody: {  range: sheetName, values: [['hola', 'mundo']] }
				});
				resolve({ status: 'success',message:response });
			} catch (e) {
				reject({ status: 'Error', message: e.message });
			}
		});
	}

	protected getSheetName(): string {
		let sheetName;
		
		switch (this.module) {
			case 'products':
				sheetName = config.gapi.PRODUCT_SHEET_NAME;
				break;
			case 'users':
				sheetName = config.gapi.USERS_SHEET_NAME;
                break;
			case 'orders':
				sheetName = config.gapi.ORDERS_SHEET_NAME;
				break;
			default:
				break;
		}

		if (!sheetName) throw new Error('Module Name incorrect!');

		return sheetName;
	}
}

export default GoogleSheetService;
