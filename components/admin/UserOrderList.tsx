import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { Table, User, Button, Text } from '@nextui-org/react';

const counterContext = {
	order: {}
};

function orderReducer(state, action) {
	switch (action.type) {
		case 'SET_PRODUCT':
			return {
				...state,
				order: action.products
			};
		case 'ADD_PRODUCT':
			state.order.total = action.total;
			state.order.products = action.products;
			return {
				...state
			};
		default:
			return state;
	}
}

const UserOrderList = ({ orderList }) => {
	const [state, dispatch] = useReducer(orderReducer, counterContext);
	const [productCheck, setProductCheck] = useState(0);
	const { order } = state;

	useEffect(() => {
		dispatch({ type: 'SET_PRODUCT', products: orderList });
	}, []);

	const handleMoreProduct = (productId, qty) => {
		let listProductToUpdate = order.products;
		const indexProduct = order.products.findIndex(product => product._id.toString() === productId);
		listProductToUpdate[indexProduct].qty = qty + 1;
		listProductToUpdate[indexProduct].total =
			listProductToUpdate[indexProduct].price * listProductToUpdate[indexProduct].qty;
		const sumTotals = products => products.reduce((total, product) => product.total + total, 0);
		const sumaTotal = sumTotals(listProductToUpdate);
		dispatch({ type: 'ADD_PRODUCT', products: listProductToUpdate, total: sumaTotal });
	};

	const handleLessProduct = (productId, qty) => {
		if (qty === 0) {
			return;
		}
		let listProductToUpdate = order.products;
		const indexProduct = order.products.findIndex(product => product._id.toString() === productId);
		listProductToUpdate[indexProduct].qty = qty - 1;
		listProductToUpdate[indexProduct].total =
			listProductToUpdate[indexProduct].price * listProductToUpdate[indexProduct].qty;
		const sumTotals = products => products.reduce((total, product) => product.total + total, 0);
		const sumaTotal = sumTotals(listProductToUpdate);
		dispatch({ type: 'ADD_PRODUCT', products: listProductToUpdate, total: sumaTotal });
	};

	const handleSelectionChange = e => {
		const totalProductCheck = Array.from(e);
		setProductCheck(totalProductCheck.length);
	};

	return (
		<>
			<Table
				aria-label="Lista de productos"
				color="success"
				selectionMode="multiple"
				onSelectionChange={handleSelectionChange}
				css={{
					height: 'auto',
					minWidth: '100%'
				}}
			>
				<Table.Header>
					<Table.Column>Producto</Table.Column>
					<Table.Column>Cantidad</Table.Column>
					<Table.Column>Precio x U</Table.Column>
					<Table.Column>Total</Table.Column>
				</Table.Header>
				<Table.Body>
					{(order?.products || []).map(product => (
						<Table.Row key={product._id.toString()}>
							<Table.Cell>
								<User squared src={product.picture} name={product.name} />
							</Table.Cell>
							<Table.Cell>
								<div style={{ display: 'flex' }}>
									<Button
										rounded
										color="error"
										auto
										size="xs"
										onPress={() => {
											handleLessProduct(product._id.toString(), product.qty);
										}}
									>
										-
									</Button>
									<p style={{ padding: '0 1rem' }}>{product.qty}</p>
									<Button
										rounded
										color="success"
										auto
										size="xs"
										onPress={() => {
											handleMoreProduct(product._id.toString(), product.qty);
										}}
									>
										+
									</Button>
								</div>
							</Table.Cell>
							<Table.Cell>$ {product.price}</Table.Cell>
							<Table.Cell>$ {product.total}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
			<Text css={{ marginTop: '2rem' }} size="$3xl" weight="bold">
				Total: $ {order?.total}
			</Text>
			<Button disabled={order?.products?.length !== productCheck}>Pagar</Button>
		</>
	);
};

export default UserOrderList;
