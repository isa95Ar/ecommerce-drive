import { useState } from 'react';
import { Sales } from '../global/types';

export function useSales(sale: Sales) {
	const [saleSelected, setSaleSelected] = useState(sale);

	const selectSale = (saleToSelect: Sales) => {
		setSaleSelected(saleToSelect);
	};

	return { saleSelected, selectSale };
}
