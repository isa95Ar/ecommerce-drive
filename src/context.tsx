import { createContext, useContext } from 'react';
import { Cart } from './global/types';
import { useCart } from './hooks/CartHook';

const useCartController = (cart: Cart) => {
	const { total, products, updateProduct, addProduct, deleteProduct } = useCart(cart);

	return { total, products, updateProduct, addProduct, deleteProduct };
};

export const AppCtx = createContext<ReturnType<typeof useCartController>>({
	total: 0,
	products: [],
	updateProduct: () => {},
	addProduct: () => {},
	deleteProduct: () => {}
});

export const AppCtxProvider = ({ cart, children }: { cart: Cart; children: React.ReactNode }) => {
	return <AppCtx.Provider value={useCartController(cart)}>{children}</AppCtx.Provider>;
};

export const useAppCtx = () => useContext(AppCtx);
