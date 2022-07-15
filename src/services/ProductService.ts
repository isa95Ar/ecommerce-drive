import type { NextApiRequest } from 'next';
import { productRepository } from '../schemas/Repositories';
import GoogleService from './GoogleService';
import { singleton,container } from "tsyringe";


@singleton()
class ProductService {

    async getProducts(req: NextApiRequest) {
        try{
            console.log('dsd');

        const googleServ = container.resolve(GoogleService);
        const products = await googleServ.getGoogleSheetData({module:'products'});
               
        return products;

        }catch(e){
            console.log(e);
            return {error:'algo??'};

        }    
    }


}

export default ProductService;