
import "reflect-metadata";

import GoogleSheetService from "../src/services/GoogleSheetService";

export const testAppend = () => {
       const gs = new GoogleSheetService("orders");
       gs.insertOnGoogleSheet().then(res => console.log(res)).catch(e => console.log(e));
}

testAppend();