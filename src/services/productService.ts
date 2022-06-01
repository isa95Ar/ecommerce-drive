import type { NextApiRequest } from 'next';
import googleService from './googleService';
import { singleton, container } from "tsyringe";
import ApiException from '../exceptions/ApiExeption';

@singleton()
class productService {

    googleServices;

    constructor() {

    }

    async getProducts(req: NextApiRequest) {
        const googleSheetService = container.resolve(googleService);
        const products = await googleSheetService.getGoogleSheetData({ module: 'products' });

        return products;
    }

    
}

export default productService;