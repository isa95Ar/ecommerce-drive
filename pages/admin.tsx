import { useEffect, useState } from 'react';
import { Container, Grid } from '@nextui-org/react';
import { container } from 'tsyringe';
import { getIronSession, IronSessionData } from 'iron-session';
import { UserLogged } from '../src/global/types';
import { sessionOptions } from '../src/utils/withIronSession';
import OrderService from '../src/services/OrderService';
import ConfigService from '../src/services/ConfigService';
import Layout from './layout';
import Header from '../components/navigation/Header';
import CartDatesForm from '../components/admin/CartDatesForm';
import OrdersCount from '../components/admin/OrdersCount';
import CurrentStatus from '../components/admin/CurrentStatus';
import { infoMessages } from '../helpers/notify';
import OrdersList from '../components/admin/OrdersList';

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
					<Grid xs={12} sm={10} md={8} lg={6}>
						<OrdersCount ordersCount={ordersCount} setOrdersCount={setOrdersCount} />
					</Grid>
					<Grid xs={12} sm={10} md={8} lg={6}>
						{editingDates ? (
							<CartDatesForm setEditing={setEditingDates} setCurrentStatus={setCurrentStatus} initialStatus={currentStatus}/>
						) : (
							<CurrentStatus status={currentStatus} setEditing={setEditingDates} />
						)}
					</Grid>
				</Grid.Container>
					{ordersCount && (
						<OrdersList orders={props.currentOrders.orders} />
					)}
			</Container>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const orderService = container.resolve(OrderService);
	const configService = container.resolve(ConfigService);

	const ironSession: IronSessionData = await getIronSession(context.req, context.res, sessionOptions);
	const user: UserLogged = ironSession.user ?? { logged: false };

	const currentStatus = await configService.getCartStatus();

	const currentOrders = await orderService.getCurrentOrders();

	return {
		props: { user, currentStatus, currentOrders }
	};
}
