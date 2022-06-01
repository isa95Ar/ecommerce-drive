import { google } from "googleapis";
import config from '../../constans/config';
import ApiException from "../exceptions/ApiExeption";
import { singleton } from "tsyringe";


@singleton()
class googleService {

    googleAuth;

    async initConnection() {
        return new Promise((resolve, reject) => {
            try {
                const auth = new google.auth.GoogleAuth({
                    keyFile: "./google-credentials.json",
                    scopes: config.gapi.SCOPES
                });

                this.googleAuth = auth;

                //creating client instance
                auth.getClient().then((client) => {
                    const googleSheets = google.sheets({ version: 'v4', auth: client });
                    resolve(googleSheets);
                }).catch(e => {
                    reject('Error getting google client!');
                });

            } catch (e) {
                reject('Troubles with google credentials!');
            }
        });

    }

    async getGoogleSheetData({ module }) {
        try {
            const googleSheet = await this.initConnection();

            const sheetName = this.getSheetName(module);

            const rows = await googleSheet.spreadsheets.values.get({
                auth: this.googleAuth,
                spreadsheetId: config.gapi.SPREADSHEET_ID,
                range: sheetName
            })

            return rows.data;

        }catch(error){
            throw new ApiException(error);
        }    
    }

    getSheetName(module) {
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