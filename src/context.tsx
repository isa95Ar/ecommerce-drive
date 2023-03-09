import { createContext, useContext } from 'react';
import { Cart } from './global/types';
import { useCart } from './hooks/CartHook';

const useCartController = (cart: Cart) => {
	const { total, products, orderId, updateProduct, addProduct, deleteProduct, isModified, setCarBySale } = useCart(cart);

	return { total, products, orderId, updateProduct, addProduct, deleteProduct, isModified, setCarBySale };
};

export const AppCtx = createContext<ReturnType<typeof useCartController>>({
	total: 0,
	products: [],
	orderId: "",
	updateProduct: () => {},
	addProduct: () => {},
	deleteProduct: () => {},
	isModified: false,
	setCarBySale: () => {}
});

export const AppCtxProvider = ({ cart, children }: { cart: Cart; children: React.ReactNode }) => {
	return <AppCtx.Provider value={useCartController(cart)}>{children}</AppCtx.Provider>;
};

export const useAppCtx = () => useContext(AppCtx);
