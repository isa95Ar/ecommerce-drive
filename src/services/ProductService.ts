import type { NextApiRequest } from 'next';
import { productRepository } from '../schemas/Repositories';
import { singleton } from "tsyringe";

@singleton()
class ProductService {

    async getProducts(req: NextApiRequest) {
        try{
            console.log('dsd');
        const products = await productRepository.search().return.all();
                
        return products;

        }catch(e){
            console.log(e);
            return {error:'algo??'};

        }    
    }


}

export default ProductService;