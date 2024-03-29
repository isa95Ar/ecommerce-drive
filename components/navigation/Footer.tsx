import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Image, Text, Row, Link } from '@nextui-org/react';
import React, { FC } from 'react';

const Footer: FC = () => {
	const today = new Date();
	const year = today.getFullYear();
	return (
		<div className="footer-container">
			<Grid.Container className={'footer-container'} gap={2}>
				<Grid xs={12} sm={12} md={3} lg={4} xl={4}>
					<Image width={200} src="/../../img/almargen.png" />
				</Grid>
				<Grid xs={12} sm={12} md={4} lg={4} xl={4}>
					<Row className={'footer-text'}>
						<Text className={'footer-title'}>¿Cómo funciona?</Text>
						<Text>El lunes a las 20 hs cierra el carrito y enviamos el pedido a los distintos proveedores.</Text>
						<Text>
							El próximo viernes podés retirar tu pedido en el local de Ruiz Moreno 960 en los horarios informados en el
							mail y en el grupo de WhatsApp.
						</Text>
					</Row>
				</Grid>
				<Grid xs={12} sm={12} md={4} lg={4} xl={4}>
					<Row css={{ display: 'block' }}>
						<Text className={'footer-title'}>Contactanos</Text>
						<Text>
							Por dudas o consultas de tus pedidos podés escribirnos a comprascomunitariasalmargen@gmail.com o
							contactarte con cualquiera de los referentes del grupo.
						</Text>
						{/*<Link block href="#" className="link-container link-container-black" underline={true}>*/}
						{/*	mail@mail.com.ar <FontAwesomeIcon style={{ marginLeft: 12 }} icon={faArrowRight} />*/}
						{/*</Link>*/}
					</Row>
				</Grid>
			</Grid.Container>
			<div className={'footer-last-container'}>
				<Text className={'footer-text-copy'}>© Copyright - {year} Al Margen compras comunitarias</Text>
			</div>
		</div>
	);
};

export default Footer;
