import "reflect-metadata";
import { container } from "tsyringe";
import ProductService from '../../src/services/ProductService';
import Cors from 'cors';
import ApiException from "../../src/exceptions/ApiExeption";

const cors = Cors({
    methods: ['GET', 'HEAD'],
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        resolve({ ...req, user: 'Isaias' })
    })
}


//config
export const config = {

}

export default async function handler(req, res) {

    try {
        req = await runMiddleware(req, res, cors)

        const service = container.resolve(ProductService);

        const products = await service.getProducts(req);
       
        res.status(200).json(products);

    } catch (error) {
        
        if (error instanceof ApiException)
            res.status(500).json(error.jsonOutPut());
    }
}