import { Text } from '@nextui-org/react';
import React, { FC } from 'react';

type props = {
	addProduct(): void;
	deleteProduct(): void;
	qty: number;
};

const QuantityControls: FC<props> = ({ addProduct, deleteProduct, qty }) => {
	return (
		<>
			<Text className="quantity-border" onClick={deleteProduct}>
				-
			</Text>
			<Text className="quantity">{qty}</Text>
			<Text className="quantity-border" onClick={addProduct}>
				+
			</Text>
		</>
	);
};

export default QuantityControls;
