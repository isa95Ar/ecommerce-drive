import { Entity, Schema } from 'redis-om';

class Product extends Entity {}

export const productSchema = new Schema(Product, {
    stock: { type: 'boolean' },
    code: { type: 'number' },
    name: { type: 'string' },
    minium: { type: 'string' },
    price: { type: 'number' },
    category: { type: 'string' }
});


