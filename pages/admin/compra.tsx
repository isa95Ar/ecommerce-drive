import { useContext, useEffect, useState } from 'react';
import { Container, Grid } from '@nextui-org/react';
import Layout from '../layout';
import Header from '../../components/navigation/Header';
import CartDatesForm from '../../components/admin/CartDatesForm';
import OrdersCount from '../../components/admin/OrdersCount';
import CurrentStatus from '../../components/admin/CurrentStatus';
import { infoMessages } from '../../helpers/notify';
import OrdersList from '../../components/admin/OrdersList';
import UpdateProductToSaleBtn from '../../components/admin/UpdateProductToSaleBtn';
import { SalesCtx } from '../../src/salescontext';
import { useRouter } from 'next/router';
export { getServerSideProps } from '../../src/ssp/admin';

export default function Admin(props) {
	const [editingDates, setEditingDates] = useState(false);
	const [ordersCount, setOrdersCount] = useState(props.currentOrders.count);
	const [currentStatus, setCurrentStatus] = useState(props.currentStatus);
	const { saleSelected } = useContext(SalesCtx);
	const router = useRouter();

	useEffect(() => {
		if (saleSelected._id.length === 0) {
			router.push('/admin');
		}
		infoMessages();
	}, []);

	return (
		<Layout>
			<Header user={props.user} title="Panel de administrador"></Header>
			<Container>
				<Grid.Container justify="center" alignItems="center" gap={3} direction="column">
					{saleSelected._id ? (
						<Grid>
							<UpdateProductToSaleBtn saleID={saleSelected._id} />
						</Grid>
					) : null}
					<Grid xs={12} sm={10} md={8} lg={6}>
						{editingDates ? (
							<CartDatesForm
								setEditing={setEditingDates}
								setCurrentStatus={setCurrentStatus}
								initialStatus={saleSelected}
							/>
						) : (
							<CurrentStatus status={currentStatus} setEditing={setEditingDates} saleSelect={saleSelected} />
						)}
					</Grid>
					<Grid xs={12} sm={10} md={8} lg={6}>
						<OrdersCount
							ordersCount={ordersCount}
							setOrdersCount={setOrdersCount}
							status={props.currentStatus.status}
						/>
					</Grid>
				</Grid.Container>
				{ordersCount && <OrdersList orders={props.currentOrders.orders} />}
			</Container>
		</Layout>
	);
}
