import { Button, Container, Grid, Loading, Text } from '@nextui-org/react';
import { FC, useState } from 'react';
import { getOrdersToPost } from '../../helpers/content';
import { sheetOrder } from '../../src/global/types';
import { Fetch } from '../../src/hooks/fetchHook';
import { Modal } from '@nextui-org/react';
import CustomModal from './CustomModal';
type props = {
	ordersCount: number;
	setOrdersCount(count: number): void;
	status: string;
};

const OrdersCount: FC<props> = ({ ordersCount, setOrdersCount, status }) => {
	const [fetching, setFetching] = useState({ error: null, loading: false, done: false });
	const [visibleModal, setVisibleModal] = useState(false);
	const postOrdersOnSheets = async () => {
		Fetch<{ orders: sheetOrder }>({
			url: '/api/admin/orders',
			method: 'POST',
			onSuccess: () => {
				setOrdersCount(0);
				setFetching({ error: null, loading: false, done: true });
			},
			onError: () => {
				setFetching({ error: 'Ocurrió un error enviando los pedidos', loading: false, done: true });
			}
		});
	};
	return (
		<Container>
			<Grid.Container justify="center" direction="column" alignItems="center">
				<Text h3>Pedidos guardados hasta ahora (sin enviar)</Text>
				<Text h2>{ordersCount}</Text>
				<Button
					disabled={status === 'open'}
					onClick={() => setVisibleModal(true)}
					className={fetching.loading || status === 'open' ? 'button-total-disabled' : 'button-total'}
				>
					Enviar pedidos
				</Button>
				<CustomModal visible={visibleModal} close={() => setVisibleModal(false)} onConfirm={postOrdersOnSheets} />
			</Grid.Container>
			<Grid.Container gap={2} direction="column" justify="center">
				{fetching.loading && <Loading color="warning"></Loading>}
				{fetching.done &&
					(fetching.error ? <Text color="error">{fetching.error}</Text> : <Text>Pedidos enviados con éxito</Text>)}
			</Grid.Container>
		</Container>
	);
};

export default OrdersCount;
