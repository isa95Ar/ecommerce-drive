
import GoogleSheetService from "../../src/services/GoogleSheetService";

export default async function append(req,res){

    const gs = new GoogleSheetService("orders");
    const response = await gs.insertOnGoogleSheet();

    res.json(response)
}