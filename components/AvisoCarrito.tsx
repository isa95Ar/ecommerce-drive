import { Card, Container, Text } from '@nextui-org/react';
import Links from './landing/Links';
import bgImg1 from '../public/img/BgImgAviso.jpg';
import bgImg2 from '../public/img/BgImgAviso.jpg';
import { getDayFromDate, getTimeFromDate } from '../helpers/formatDate';
export default function AvisoCarrito({ status }) {
	const Starter = 'El carrito abre el';
	const FechaHora = `${getDayFromDate(status.openDate)} a las ${getTimeFromDate(status.openDate)}`;
	const color = 'white';

	var style;
	var useStyle = 1;
	const baseStyle = {
		imgStyle: {
			backgroundImage: `url(${bgImg1.src})`,
			height: '100vh',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		},
		linkStyle: {
			color: 'white'
		},
		avisoStyle: {
			color: 'white'
		}
	};
	const altStyle = {
		imgStyle: {
			backgroundImage: `url(${bgImg2.src})`,
			height: '100vh',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		},
		linkStyle: {
			color: 'black'
		},
		avisoStyle: {
			color: 'orange'
		}
	};
	if (useStyle <= 1) {
		style = baseStyle;
	} else {
		style = altStyle;
	}
	return (
		<div style={style.imgStyle}>
			<Container fluid>
				<Card
					css={{
						height: '40vh',
						background: 'none'
					}}
				>
					{' '}
				</Card>
				{status.status === 'open' ? (
					<div>
						<Text h1 css={{ color: color }}>
							¿Ya hiciste tu pedido de este mes?{' '}
						</Text>
					</div>
				) : status.status === 'toOpen' ? (
					<div>
						<Text h1 css={{ color: color }}>
							{Starter} {FechaHora}
						</Text>
					</div>
				) : (
					<div>
						<Text h1 css={{ color: color }}>
							El carrito ya está cerrado.{' '}
						</Text>
						<Text h4 css={{ color: color }}>
							Nos vemos la próxima semana.{' '}
						</Text>
					</div>
				)}
				<Links />
			</Container>
		</div>
	);
}
