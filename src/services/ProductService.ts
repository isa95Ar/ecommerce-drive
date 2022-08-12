import type {NextApiRequest} from 'next';
import {singleton, container} from "tsyringe";
import GoogleSheetService from "./GoogleSheetService";


@singleton()
class ProductService {

    async getProducts(req: NextApiRequest) {
        try {

            const googleServ = new GoogleSheetService("products");
            const products = await googleServ.getGoogleSheetData();

            return products;
        } catch (e) {
            throw new Error(e);
        }
    }


}

export default ProductService;