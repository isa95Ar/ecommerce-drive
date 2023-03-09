import { Badge, Button, Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../components/navigation/Header';
import { statusDate } from '../helpers/date';
import { getDayFromDate } from '../helpers/formatDate';
import { infoMessages } from '../helpers/notify';
import { useSalesCtx } from '../src/salescontext';
import Layout from './layout';
export { getServerSideProps } from '../src/ssp/admin';

export default function Admin(props) {
	const sale = useSalesCtx();
	const router = useRouter();
	const navigateProducts = compra => {
		sale.selectSale(compra);
		router.push('/products');
	};

	useEffect(() => infoMessages(), []);
	const compras = props.allSales.map(compra => {
		compra.status = statusDate({ openDate: compra.openDate, closeDate: compra.closeDate });
		return compra;
	});

	return (
		<Layout>
			<Header title="Compras Activas" user={props.user} />
			<Grid.Container gap={2} justify="center">
				{compras.map(compra =>
					compra.status === 'closed' ? null : (
						<Grid>
							<Card css={{ mw: '330px' }}>
								<Card.Header style={{ justifyContent: 'space-between' }}>
									<Text b>{compra.name}</Text>
									<Badge
										color={
											statusDate({ openDate: compra.openDate, closeDate: compra.closeDate }) === 'open'
												? 'success'
												: statusDate({ openDate: compra.openDate, closeDate: compra.closeDate }) === 'toOpen'
												? 'warning'
												: 'error'
										}
									>
										{statusDate({ openDate: compra.openDate, closeDate: compra.closeDate }) === 'open'
											? 'Abierta'
											: statusDate({ openDate: compra.openDate, closeDate: compra.closeDate }) === 'toOpen'
											? 'Abre pronto'
											: 'error'}
									</Badge>
								</Card.Header>
								<Card.Divider />
								<Card.Body css={{ py: '$10' }}>
									<Text>Abierta desde el {getDayFromDate(compra.openDate)}</Text>
									<Text>hasta {getDayFromDate(compra.closeDate)}</Text>
								</Card.Body>
								<Card.Divider />
								<Card.Footer>
									<Row justify="center">
										<Button disabled={compra.status === 'toOpen'} onClick={() => navigateProducts(compra)}>
											{compra.status === 'toOpen' ? 'Abre pronto' : 'Ir a comprar'}
										</Button>
									</Row>
								</Card.Footer>
							</Card>
						</Grid>
					)
				)}
			</Grid.Container>
		</Layout>
	);
}
