import { useEffect, useState } from 'react';
import { Cart, ProductCart } from '../global/types';

export function useCart() {
	const [cart, setCart] = useState({ products: [], total: 0 });

	const sumTotals = products => products.reduce((total, product) => product.total + total, 0);

	const updateLocalStorage = (newCart:Cart) => localStorage.setItem('cart', JSON.stringify(newCart));;

	const updateProduct = (productToUpdate: ProductCart) => {

		const products = cart.products.map(product => {
			if (product.code === productToUpdate.code) {
				return {...productToUpdate, total:productToUpdate.price*productToUpdate.qty};
			}
			return product;
		});
		const newCart = { products, total: sumTotals(products) };
		setCart(newCart);
		updateLocalStorage(newCart)
	};

	const addProduct = (productToAdd: ProductCart) => {
		let products = cart.products;
		

		if (productExists(productToAdd.code)) {
			products = products.map(product => {
				if (product.code === productToAdd.code) {
					const newQuantity = product.qty + productToAdd.qty;
					return { ...productToAdd, qty: newQuantity, total: productToAdd.price * newQuantity };
				}
				return product;
			});
		} else {
			products.push({...productToAdd, total: productToAdd.price * productToAdd.qty});
		}

		const newCart = { products, total: sumTotals(products) };
		setCart(newCart);
		updateLocalStorage(newCart);
	};

	const deleteProduct = (productToDelete: ProductCart) => {
		const products = cart.products.filter(product => product.code !== productToDelete.code);
		const newCart = { products, total: sumTotals(products) };
		setCart(newCart);
		updateLocalStorage(newCart);
	};

	const productExists = code => cart.products.find(product => product.code === code);

    const removeCart = () => {
        setCart({products:[],total:0});
        localStorage.removeItem('cart');
    }

    const updateCart = (sessionCart:Cart) => {
        if(sessionCart.products && !cart.products.length){
            localStorage.setItem('cart', JSON.stringify(cart));
            setCart({products:sessionCart.products,total:sessionCart.total});
        }
    }

	useEffect(() => {
		const localCart = localStorage.getItem('cart');
		if (localCart) setCart(JSON.parse(localCart));
	}, []);

	

	return { ...cart, updateProduct,addProduct,deleteProduct,removeCart,updateCart };
}

