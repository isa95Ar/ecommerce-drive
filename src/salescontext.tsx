import { createContext, useContext } from 'react';
import { Sales } from './global/types';
import { useSales } from './hooks/SalesHook';

const useSalesController = (currentsales: Sales) => {
	const { saleSelected, selectSale, selectOrderByUser, orderByUser} = useSales(currentsales);

	return { saleSelected, selectSale, selectOrderByUser, orderByUser };
};

export const SalesCtx = createContext<ReturnType<typeof useSalesController>>({
	saleSelected: {},
	selectSale: () => {},
	selectOrderByUser: () => {}, 
	orderByUser: ''
});

export const AppSalesProvider = ({ currentsales, children }: { currentsales: Sales; children: React.ReactNode }) => {
	return <SalesCtx.Provider value={useSalesController(currentsales)}>{children}</SalesCtx.Provider>;
};

export const useSalesCtx = () => useContext(SalesCtx);
