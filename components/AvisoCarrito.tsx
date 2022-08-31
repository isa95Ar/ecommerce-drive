import { Card, Container, Text } from '@nextui-org/react';
import Links from './landing/Links';
import bgImg1 from '../public/img/BgImgAviso.jpg'; //Cambiar estos link con las imagen correspondiente
import bgImg2 from '../public/img/BgImgAviso.jpg'; //Cambiar estos link con las imagen correspondiente
export default function AvisoCarrito({ status }) {
	//Aqui poner el Typscript para obtener la fecha y hora de apertura del carro del excel

	// LandingType
	// En el caso de que LandingType:
	// Si es open, debería mostrar el "Ya hiciste tu pedido de este mes?".
	//  Si es toOpen, "El carrito abre el 8/7 15hs".
	// Si es closed o no llega nada, "El carrito ya está cerrado"

	var Fecha = '10/5'; // aqui iria la variable de fecha
	var Hora = '15 PM'; // aqui va la variable de la hora

	const Starter = 'El carrito abre el';
	const FechaHora = status.openDate;
	const color = 'white';

	var style;
	var useStyle = 1; //Esto define que estilo se usa, por ahora usa un valor holdeado 1 o menor para el estilo original,  cualquier mayor a 1 para el estilo alternativo
	const baseStyle = {
		// paleta de colores e imagen de "android  small 2" de la maqueta en figma (usestyle = 1)
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
						background: 'none' /*Tarjeta para el espaciado */
					}}
				>
					{' '}
				</Card>
				{status.status === 'open' ? (
					<div>
						<Text>
							<Text h1 css={{ color: color }}>
								¿Ya hiciste tu pedido de este mes?{' '}
							</Text>
						</Text>
					</div>
				) : status.status === 'toOpen' ? (
					<div>
						<Text>
							<Text h1 css={{ color: color }}>
								{Starter} {FechaHora}
							</Text>
						</Text>
					</div>
				) : (
					<div>
						<Text>
							<Text h1 css={{ color: color }}>
								El carrito ya está cerrado.{' '}
							</Text>
							<Text h4 css={{ color: color }}>
								Nos vemos la próxima semana.{' '}
							</Text>
						</Text>
					</div>
				)}
				<Links />
			</Container>
		</div>
	);
}
