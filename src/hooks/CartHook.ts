import { useEffect, useState } from 'react';
import { ProductCart } from '../global/types';

export function useCart(userCart?: { _id?; email?; products? }) {
	const [cart, setCart] = useState({
		products: [],
		total: 0
	});

	const sumTotals = (products: Array<ProductCart>): number => {
		let totalCart = 0;
		products.map(product => (totalCart = Number((totalCart + product.total).toFixed(2))));
		return totalCart;
	};

	const addProduct = (product: ProductCart, qty: number) => {
		const productCart: ProductCart = {
			code: product.code,
			name: product.name,
			qty,
			price: product.price,
			minimum: product.minimum,
			total: product.price * qty,
			picture: product.picture
		};
		let products = cart.products;
		if (products.find(product => product.code == productCart.code)) {
			products = products.map(cartProduct => {
				if (cartProduct.code == productCart.code) {
					return {...productCart, qty: productCart.qty + cartProduct.qty, total: productCart.total + cartProduct.total };
				} else {
					return cartProduct;
				}
			});
		} else {
			products.push(productCart);
		}

		updateProducts(products);
	};

	const removeProduct = (product: ProductCart) => {
		const products = cart.products.filter(cartProduct => cartProduct.code !== product.code);
		updateProducts(products);
	};

	const updateProducts = (products: Array<ProductCart>) => {
		setCart({ total: sumTotals(products), products });

		localStorage.setItem('cart', JSON.stringify({ total: sumTotals(products), products }));
	};

	const removeCart = (): any => {
		setCart({
			products: [],
			total: 0
		});
		localStorage.removeItem('cart');
	};

	const getCartProductQty = (code: number): number => {
		const product = cart.products.find(product => {
			return product.code === code;
		});
		if (!product) {
			return 1;
		}
		return product.qty;
	};

	useEffect(() => {
		const actualCart = localStorage.getItem('cart');
		let products: any = [];

		if (actualCart) {
			const storedCart = JSON.parse(actualCart);
			products = products.concat(storedCart.products);
		} else if (userCart && userCart.products) {
			products = products.concat(userCart.products);
		}
        setCart({...cart, products, total: sumTotals(products)});
		// products.map(product => addProduct(product, product.qty));
	}, []);

	return {
		products:cart.products,
        total:cart.total,
		data: cart,
		addProduct,
		removeProduct,
		removeCart,
		updateProducts,
		getCartProductQty
	};
}
