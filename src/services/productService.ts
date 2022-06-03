import type { NextApiRequest } from 'next';
import googleService from './googleService';
import {googleServiceInterface} from './googleService.d';
import { singleton, container } from "tsyringe";

@singleton()
class productService {

    googleServices:googleServiceInterface;

    async getProducts(req: NextApiRequest) {
        const googleSheetService = container.resolve(googleService);
        const products = await googleSheetService.getGoogleSheetData({ module: 'products' });

        return products;
    }


}

export default productService;