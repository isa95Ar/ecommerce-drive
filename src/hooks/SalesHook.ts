import { useState } from 'react';
import { Sales } from '../global/types';

export function useSales(sale: Sales) {
	const [saleSelected, setSaleSelected] = useState(sale);
	const [orderByUser, setOrderByUser] = useState('')

	const selectSale = (saleToSelect: Sales) => {
		setSaleSelected(saleToSelect);
	};

	const selectOrderByUser = (userId) => {
		setOrderByUser(userId)
	}

	return { saleSelected, selectSale, selectOrderByUser, orderByUser};
}
