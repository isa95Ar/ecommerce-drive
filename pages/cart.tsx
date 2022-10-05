import Layout from './layout';
import Header from '../components/navigation/Header';
import { Button, Container, Grid } from '@nextui-org/react';
import ProductDetailCard from '../components/cards/ProductDetailCard';
import TotalCard from '../components/cards/TotalCard';
import { useCart } from '../src/hooks/CartHookNew';
import { ProductCart as productType } from '../src/global/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { infoMessages } from '../helpers/notify';
import { Fetch } from '../src/hooks/fetchHook';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
export { getServerSideProps } from '../src/ssp/cart';

export default function Cart(props) {
	const isEditingOrder = props.orderId !== null;
	const cart = useCart();
	const router = useRouter();

	useEffect(() => {
		console.log(props.cart);
		cart.updateCart(props.cart);
		infoMessages()
	}, []);


	const sendOrder = async () => {
		Fetch<{ products: Array<productType>; total: number }>({
			url: `/api/orders${isEditingOrder ? `/${props.orderId}` : ''}`,
			method: `${isEditingOrder ? 'PUT' : 'POST'}`,
			data: { products: cart.products, total: cart.total },
			onSuccess: () => {
				cart.removeCart();
				router.push('/#orderstored');
				toast.warn(`Su pedido se ha ${isEditingOrder ? 'modificado' : 'realizado'} con éxito`, {
					icon: <FontAwesomeIcon icon={faCheckCircle} color="#EA903C" />
				});
			},
			onError: e => {
				console.warn(`error on saving order`, e);
			}
		});
	};

	return (
		<Layout {...props}>
			{props.user.logged && (
				<>
					<Header user={props.user} title={isEditingOrder ? 'Edita tu pedido' : 'Tu carrito'} cart={cart} />
					<Container className="cart-container">
						<Grid.Container justify="center" gap={2}>
							<Grid direction="column" xs={12} sm={10} md={7} lg={6} xl={4}>
								{cart.products.map((product: productType) => (
									<ProductDetailCard
										key={product.code}
										deleteProduct={(product: productType) => cart.deleteProduct(product)}
										updateProduct={(product: productType, qty) => cart.updateProduct({...product,qty})}
										product={product}
									/>
								))}
								<TotalCard total={cart.total} />
								<Button
									disabled={cart.products.length < 0}
									className={`${cart.products.length > 0 ? 'button-total' : 'button-total-disabled'}`}
									onClick={sendOrder}
								>
									{isEditingOrder ? 'Modificar pedido' : 'Realizar pedido'}
								</Button>
								<Button
									className="button-continue"
									onClick={() => {
										router.push('/');
									}}
								>
									Seguir comprando
								</Button>
							</Grid>
						</Grid.Container>
					</Container>
				</>
			)}
		</Layout>
	);
}
