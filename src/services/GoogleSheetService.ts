import config from "../../constans/config";
import GoogleAuthService from "./GoogleAuthService";
import {google, sheets_v4} from "googleapis";

interface googleSheetDataOptions {
    module: string;
}

class GoogleSheetService
    extends GoogleAuthService
    implements googleSheetDataOptions {
    googleSheetsImplements: sheets_v4.Sheets;
    module: string;

    constructor(module: string) {
        super();
        this.module = module;
        this.googleSheetsImplements = google.sheets({
            version: "v4",
            auth: this.GoogleClient,
        });

    }

    async getGoogleSheetData(): Promise<Array<Array<string>>> {
        try {
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

    getSheetName(): string {
        let sheetName;
        switch (this.module) {
            case "products":
                sheetName = config.gapi.PRODUCT_SHEET_NAME;
                break;
            default:
                break;
        }

        if (!sheetName) throw new Error("Module Name incorrect!");

        return sheetName;
    }
}

export default GoogleSheetService;
