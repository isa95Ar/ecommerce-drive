import { useEffect, useState } from "react"
import {  ProductCart } from "../global/types";
import { ProductI } from "../schemas/Product";

export function useCart()
{
    const [cart,setCart] = useState({
        products:[],
        total : 0
    });

    const sumTotals = (products:Array<ProductCart>):number => {
        let totalCart = 0;
        products.map(product => totalCart += product.total);
        return totalCart;
    };

    const addProduct = (product:ProductI,qty:number) => 
    {   
        const productCart:ProductCart = {
            code: product.code,
            name: product.name,
            qty,
            total: product.price*qty
        }
        const products = cart.products.filter(cartProduct => cartProduct.code !== product.code);
        
        updateProducts([...products,productCart]);
    }

    const removeProduct = (product:ProductI)=> 
    {
        const products = cart.products.filter(cartProduct => cartProduct.code !== product.code);
        updateProducts(products);
    }

    const updateProducts = (products) => {
        
        setCart({total:sumTotals(products),products});   
        
        localStorage.setItem('cart',JSON.stringify({total:sumTotals(products),products}));
    }


    useEffect(() => {
        const actualCart = localStorage.getItem('cart');
        if(actualCart)
            setCart(JSON.parse(actualCart));
    },[]);

    useEffect(() => {
        console.log(cart);
    },[cart]);

    return {
        Cart:cart,
        addProduct,
        removeProduct
    }
}