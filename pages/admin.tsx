import { useEffect, useState } from 'react';
import { Container, Grid } from '@nextui-org/react';
import Layout from './layout';
import Header from '../components/navigation/Header';
import CartDatesForm from '../components/admin/CartDatesForm';
import OrdersCount from '../components/admin/OrdersCount';
import CurrentStatus from '../components/admin/CurrentStatus';
import { infoMessages } from '../helpers/notify';
import OrdersList from '../components/admin/OrdersList';
import UpdateProductsBtn from '../components/admin/UpdateProductsBtn';
export { getServerSideProps } from '../src/ssp/admin';

export default function Admin(props) {
	const [editingDates, setEditingDates] = useState(false);
	const [ordersCount, setOrdersCount] = useState(props.currentOrders.count);
	const [currentStatus, setCurrentStatus] = useState(props.currentStatus);

	useEffect(() => infoMessages(), []);
	return (
		<Layout>
			<Header user={props.user} title="Panel de administrador"></Header>
			<Container>
				<Grid.Container justify="center" alignItems="center" gap={3} direction="column">
					<Grid>
						<UpdateProductsBtn />
					</Grid>
					<Grid xs={12} sm={10} md={8} lg={6}>
						<OrdersCount
							ordersCount={ordersCount}
							setOrdersCount={setOrdersCount}
							status={props.currentStatus.status}
						/>
					</Grid>
					<Grid xs={12} sm={10} md={8} lg={6}>
						{editingDates ? (
							<CartDatesForm
								setEditing={setEditingDates}
								setCurrentStatus={setCurrentStatus}
								initialStatus={currentStatus}
							/>
						) : (
							<CurrentStatus status={currentStatus} setEditing={setEditingDates} />
						)}
					</Grid>
				</Grid.Container>
				{ordersCount && <OrdersList orders={props.currentOrders.orders} />}
			</Container>
		</Layout>
	);
}
