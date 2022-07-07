import RedisService from '../services/RedisService';
import { productSchema } from './Product';
import { container } from "tsyringe";


const redisService = container.resolve(RedisService);
const productRepository = redisService.redisClient.fetchRepository(productSchema);



export {
     productRepository
}