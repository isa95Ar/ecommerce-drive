import "reflect-metadata";
import GoogleServices from '../src/services/GoogleService';
import { productRepository } from '../src/schemas/Repositories';
import { container } from "tsyringe";

type productType = {
    stock: boolean,
    code: number,
    name: string,
    minium: string,
    price: number,
    category: string
}

const googleServices = container.resolve(GoogleServices);


function serializingProducts(products: Array<Array<string>>): Array<productType> {

    const serializeProducts = [];

    products.map((product, i) => {
        if (i !== 0) {
            serializeProducts.push({
                stock: product[0] == '1',
                code: parseInt(product[1]),
                name: product[2],
                minium: product[3],
                price: parseFloat(product[4]),
                category: product[5]
            });
        }
    });

    return serializeProducts;
}

async function saveProductsOnRedis(products: Array<productType>): Promise<object> {
    try {
      
    
        products.map(async (product) => await productRepository.createAndSave(product));

        console.log('finish success!');
        return { 'success': true };

    } catch (e) {
        console.log(e);
        return { 'error': e };
    }
}

export async function updateProducts(): Promise<object> {

    try {

        await productRepository.dropIndex();
        await productRepository.createIndex();

        const products: Array<Array<string>> = await googleServices.getGoogleSheetData({ module: 'products' });

        const productsFormated: Array<productType> = serializingProducts(products);

        await saveProductsOnRedis(productsFormated);

        return { 'success': true };

    } catch (e) {
        console.log(e,'??');
        return { 'error': e };
    }

}




updateProducts();

