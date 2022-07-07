import { sheets_v4 } from "googleapis";
import { GoogleAuth } from "google-auth-library";

export interface GoogleServiceInterface {
    googleAuth: GoogleAuth,
    googleSheets: sheets_v4.Sheets,
    getSheetName: () => string,
    getGoogleSheetData: () => Promise<object>,
    initConnection: () => Promise<boolean>
}