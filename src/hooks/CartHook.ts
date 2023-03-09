import { useState } from 'react';
import { Cart, ProductCart } from '../global/types';

export function useCart(cartSSR: Cart) {
	let originCard: any = []
	if (cartSSR?.products.length > 0) {
		originCard = cartSSR
	}
	const [cart, setCart] = useState(cartSSR);
	const [isModified, setIsModified] = useState(false)

	const sumTotals = products => products.reduce((total, product) => product.total + total, 0);

	const setCarBySale = (cartBysale) =>{
		cartBysale.orderId = cartBysale._id
		setCart(cartBysale)
	}
	const updateProduct = (productToUpdate: ProductCart) => {
		const products = cart.products.map(product => {
			if (product.code === productToUpdate.code) {
				return { ...productToUpdate, total: productToUpdate.price * productToUpdate.qty };
			}
			return product;
		});
		const newCart = { products, total: sumTotals(products), orderId: cart.orderId };

		JSON.stringify(originCard) === JSON.stringify(newCart) ? setIsModified(false) : setIsModified(true)

		setCart(newCart);
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
			products.push({ ...productToAdd, total: productToAdd.price * productToAdd.qty });
		}

		const newCart = { products, total: sumTotals(products), orderId: cart.orderId };

		JSON.stringify(originCard) === JSON.stringify(newCart) ? setIsModified(false) : setIsModified(true)

		setCart(newCart);
	};

	const deleteProduct = (productToDelete: ProductCart) => {
		const products = cart.products.filter(product => product.code !== productToDelete.code);
		const newCart = { products, total: sumTotals(products), orderId: cart.orderId };

		JSON.stringify(originCard) === JSON.stringify(newCart) ? setIsModified(false) : setIsModified(true)

		setCart(newCart);
	};

	const productExists = code => cart.products.find(product => product.code === code);

	return { ...cart, updateProduct, addProduct, deleteProduct, isModified, setCarBySale};
}
