import config from "../../constants/config";
import GoogleAuthService from "./GoogleAuthService";
import {google, sheets_v4} from "googleapis";

interface googleSheetDataOptions {
    getGoogleSheetData():Promise<Array<Array<string>>>,
}

class GoogleSheetService
    extends GoogleAuthService
    implements googleSheetDataOptions {

    private googleSheetsImplements: sheets_v4.Sheets;
    private module: string;

    constructor(module: string) {
        super();
        this.module = module;
        this.googleSheetsImplements = google.sheets({
            version: "v4",
            auth: this.GoogleClient,
        });

    }

    public async getGoogleSheetData(): Promise<Array<Array<string>>> {
        try {
            await this.startGoogleAuthentification();
            const sheetName = this.getSheetName();
            const rows = await this.googleSheetsImplements.spreadsheets.values.get({
                auth: this.GoogleAuth,
                spreadsheetId: config.gapi.SPREADSHEET_ID,
                range: sheetName,
            });

            return rows.data.values;
        } catch (error) {
            throw new Error(`Error on get Google Sheet Instance ${error}`);
        }
    }

    protected getSheetName(): string {
        let sheetName;
        switch (this.module) {
            case "products":
                sheetName = config.gapi.PRODUCT_SHEET_NAME;
                break;
            case 'users':
                sheetName = config.gapi.USERS_SHEET_NAME
            default:
                break;
        }

        if (!sheetName) throw new Error("Module Name incorrect!");

        return sheetName;
    }
}

export default GoogleSheetService;
