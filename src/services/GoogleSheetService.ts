import config from '../../constants/config';
import GoogleAuthService from './GoogleAuthService';
import { google, sheets_v4 } from 'googleapis';
import { GoogleSheetDataType, OrderType } from '../global/types';

interface googleSheetDataOptions {
	getGoogleSheetData(): Promise<GoogleSheetDataType>;
	insertOnGoogleSheet(data: OrderType): Promise<{ status: string; message: any }>;
}

class GoogleSheetService extends GoogleAuthService implements googleSheetDataOptions {
	private googleSheetService: sheets_v4.Sheets;
	private module: string;

	constructor(module: string) {
		super();
		this.module = module;
		this.googleSheetService = google.sheets({
			version: 'v4',
			auth: this.GoogleClient
		});
	}

	public async getGoogleSheetData(): Promise<GoogleSheetDataType> {
		const ts = () => new Date().toISOString();
		try {
			await this.startGoogleAuthentification();
			const sheetName = this.getSheetName();
			console.log(`[${ts()}] [GoogleSheetService] Reading sheet "${sheetName}" from spreadsheet ${config.gapi.SPREADSHEET_ID}`);

			const rows = await this.googleSheetService.spreadsheets.values.get({
				auth: this.GoogleAuth,
				spreadsheetId: config.gapi.SPREADSHEET_ID,
				range: sheetName
			});

			const rowCount = rows.data.values ? rows.data.values.length : 0;
			console.log(`[${ts()}] [GoogleSheetService] Successfully read ${rowCount} rows from sheet "${sheetName}"`);
			return rows.data.values;
		} catch (error) {
			console.error(`[${ts()}] [GoogleSheetService] Error reading Google Sheet (module: ${this.module}):`, error);
			throw new Error(`Error on get Google Sheet Instance ${error}`);
		}
	}

	public async insertOnGoogleSheet(data: OrderType): Promise<{ status: string; message: any }> {
		const ts = () => new Date().toISOString();
		return new Promise(async (resolve, reject) => {
			try {
				await this.startGoogleAuthentification();
				const sheetName = this.getSheetName();
				console.log(`[${ts()}] [GoogleSheetService] Inserting ${data.length} rows into sheet "${sheetName}"`);
				const response = this.googleSheetService.spreadsheets.values.append({
					spreadsheetId: config.gapi.SPREADSHEET_ID,
					auth: this.GoogleAuth,
					range: sheetName,
					valueInputOption: 'RAW',
					requestBody: { range: sheetName, values: this.serializeGoogleRows(data) }
				});
				console.log(`[${ts()}] [GoogleSheetService] Insert into sheet "${sheetName}" succeeded`);
				resolve({ status: 'success', message: response });
			} catch (e) {
				console.error(`[${ts()}] [GoogleSheetService] Error inserting into Google Sheet (module: ${this.module}):`, e);
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

	protected serializeGoogleRows(data: OrderType) {
		return data.map(person => Object.values(person).map(value => value));
	}
}

export default GoogleSheetService;
