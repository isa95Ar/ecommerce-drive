import { Table } from '@nextui-org/react';
import { FC } from 'react';

type order = {
	email: string;
	total: number;
};

type props = {
	orders: order[];
};

const OrderList: FC<props> = ({ orders }) => {
	return (
		<div>
			<Table className="orders-table">
				<Table.Header>
					<Table.Column>Usuario</Table.Column>
					<Table.Column>Total</Table.Column>
				</Table.Header>
				<Table.Body>
					{orders.map(order => {
						return (
							<Table.Row key={order.email}>
								<Table.Cell>{order.email}</Table.Cell>
								<Table.Cell>$ {order.total}</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</div>
	);
};

export default OrderList;
