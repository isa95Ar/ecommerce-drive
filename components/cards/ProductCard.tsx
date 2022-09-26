import { Card, Grid, Text, Row, Button, Popover, Avatar } from '@nextui-org/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useCart } from '../../src/hooks/CartHook';
import { toast } from 'react-toastify';
import { CartIcon } from '../svg/CartIcon';

export default function ProductCard({ item, addProduct }) {
	const cart = useCart();
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		const qty = cart.getCartProductQty(item.code);
		setQuantity(qty);
	}, [cart.Cart]);
	return (
		<Grid xs={12} sm={12} md={12} lg={12} xl={12}>
			<Card css={{ margin: 0, letterSpacing: 0 }}>
				<Card.Body className="product-container">
					<Row className="text-container">
						<Grid sm={7} xs={7} lg={6} md={6} xl={6} justify="center">
							<Avatar css={{ width: 100, height: 100 }} className="product-image" src={item.picture} />
						</Grid>
						<Grid className="details-container" lg={6} md={6} xl={6}>
							<Text className="product-name">{item.name}</Text>
							<Text className="product-reference">{item.minimum}</Text>
							<Text className="product-supplier">
								<FontAwesomeIcon icon={faFaceLaughBeam} />
								{item.seller}
							</Text>
							<Text className="product-price">${item.price}</Text>
						</Grid>
					</Row>
					<Row>
						<Grid sm={7} xs={7} lg={6} md={6} xl={6} className="product-quantity" justify="center">
							<Text
								className="quantity-border"
								onClick={() => {
									if (quantity > 1) setQuantity(prev => prev - 1);
								}}
							>
								-
							</Text>
							<Text className="quantity">{quantity}</Text>
							<Text
								className="quantity-border"
								onClick={() => {
									setQuantity(prev => prev + 1);
								}}
							>
								+
							</Text>
						</Grid>
						<Grid sm={3} xs={3} lg={6} md={6} xl={6}>
							<Button
								onClick={() => {
									addProduct(item, quantity);
									toast.warn('Agregado exitosamente', {
										autoClose: 1500,
										icon: <CartIcon fill="#EA903C" size={24} width={16} height={16} />
									});
								}}
								className="button-text"
								css={{ backgroundColor: '#F29400', color: 'black', fontWeight: 400 }}
								auto
								flat
							>
								Agregar
							</Button>
						</Grid>
					</Row>
				</Card.Body>
			</Card>
		</Grid>
	);
}
