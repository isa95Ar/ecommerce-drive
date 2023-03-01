import React, { FC } from 'react';
import { Text } from '@nextui-org/react';

type totalCartProps = {
	total: number;
	balance: number;
};

const TotalCart: FC<totalCartProps> = ({ total, balance }) => {
	const contableTotal = total - balance;
	return (
		<div className="total-cart">
			<div className="total-items">
				<Text className="items-text">Subtotal</Text>
				<Text className="items-text">${total.toFixed(2)}</Text>
			</div>
			{balance != 0 &&
				<div className="total-items">
					<Text className="items-text">Saldo</Text>
					<Text className="items-text">${balance.toFixed(2)}</Text>
				</div>
			}
			<div className="divider"></div>
			<div className="total-items">
				<Text className="total-text">Total</Text>
				<Text className="total-text">${contableTotal.toFixed(2)}</Text>
			</div>
		</div>
	);
};

export default TotalCart;
