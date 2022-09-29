import { Button, Container, Grid, Text } from '@nextui-org/react';
import { FC } from 'react';
import { getDayFromDate, getTimeFromDate } from '../../helpers/formatDate';
import { statusCart } from '../../src/global/types';

type props = {
	status: statusCart;
	setEditing(editing: boolean): void;
};

const CurrentStatus: FC<props> = ({ status, setEditing }) => {
	const statusToText = {
		open: 'Abierto',
		toOpen: 'Abre pronto',
		closed: 'Cerrado'
	};
	return (
		<Container>
			<Grid.Container justify="center" direction="column" alignItems="center">
				<Text h3>Estado actual del carrito</Text>
				<Text h4>{statusToText[status.status]}</Text>
				<Grid>
					<Text>
						Abre: <strong>{getDayFromDate(status.openDate)}</strong> a las <strong>{getTimeFromDate(status.openDate)}</strong>
					</Text>
				</Grid>
				<Grid>
					<Text>
						Cierra: <strong>{getDayFromDate(status.closeDate)}</strong> a las <strong>{getTimeFromDate(status.closeDate)}</strong>
					</Text>
				</Grid>
				<Button onClick={() => setEditing(true)} className="button-total">
					Editar fechas
				</Button>
			</Grid.Container>
		</Container>
	);
};

export default CurrentStatus;
