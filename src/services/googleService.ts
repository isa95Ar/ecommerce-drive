import { google, sheets_v4 } from "googleapis";
import config from '../../constans/config';
import ApiException from "../exceptions/ApiExeption";
import { GoogleAuth } from "google-auth-library";
import { singleton } from "tsyringe";

type googleSheetDataOptions = {
    module:string,
    rows?:number
}

@singleton()
class googleService {

    googleAuth:GoogleAuth;
    googleSheets:sheets_v4.Sheets;


    async initConnection():Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                const auth = new GoogleAuth({
                    keyFile: "./google-credentials.json",
                    scopes: config.gapi.SCOPES
                });

                this.googleAuth = auth;

                //creating client instance
                auth.getClient().then((client) => {
                    this.googleSheets = google.sheets({ version: 'v4', auth: client });
                    resolve(true);
                }).catch(e => {
                    reject(e);
                });

            } catch (e) {
                reject(e);
            }
        });

    }

    async getGoogleSheetData(opts: googleSheetDataOptions):Promise<object> {
        try {
            await this.initConnection();

            const sheetName = this.getSheetName(opts.module);

            const rows = await this.googleSheets.spreadsheets.values.get({
                auth: this.googleAuth,
                spreadsheetId: config.gapi.SPREADSHEET_ID,
                range: sheetName
            })

            return rows.data;

        }catch(error){
            throw new ApiException(error);
        }    
    }

    getSheetName(module):string {
        let sheetName;
        switch (module) {
            case "products":
                sheetName = config.gapi.PRODUCT_SHEET_NAME;
                break;
            default:
                break;
        }

        if (!sheetName)
            throw new ApiException('Module Name incorrect!');

        return sheetName;
    }

    //animus-compras@testisa-f771a.iam.gserviceaccount.com
}

export default googleService;