import { Card, Container, Text } from '@nextui-org/react';
import Links from '../landing/Links';
import { getDayFromDate, getTimeFromDate } from '../../helpers/formatDate';
import { FC } from 'react';
import { statusCart } from '../../src/global/types';

type props = {
	status: statusCart;
};

const MessageCard: FC<props> = ({ status }) => {
	const FechaHora = `${getDayFromDate(status.openDate)} a las ${getTimeFromDate(status.openDate)}`;
	return (
		<div className={'message-card-container'}>
			<Container fluid>
				<Card css={{ height: '40vh', background: 'none' }}> </Card>
				{status.status === 'open' ? (
					<div>
						<Text h1 css={{ color: 'white' }}>
							¿Ya hiciste tu pedido de este mes?{' '}
						</Text>
					</div>
				) : status.status === 'toOpen' ? (
					<div>
						<Text h1 css={{ color: 'white' }}>
							El carrito abre el {FechaHora}
						</Text>
					</div>
				) : (
					<div>
						<Text h1 css={{ color: 'white' }}>
							El carrito ya está cerrado.{' '}
						</Text>
						<Text h4 css={{ color: 'white' }}>
							Nos vemos la próxima semana.{' '}
						</Text>
					</div>
				)}
				<Links />
			</Container>
		</div>
	);
};

export default MessageCard;
