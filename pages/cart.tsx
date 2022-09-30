import Layout from './layout';
import Header from '../components/navigation/Header';
import { Button, Container, Grid } from '@nextui-org/react';
import ProductDetailCard from '../components/cards/ProductDetailCard';
import TotalCard from '../components/cards/TotalCard';
import { useCart } from '../src/hooks/CartHook';
import { ProductCart as productType } from '../src/global/types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { infoMessages } from '../helpers/notify';
import { Fetch } from '../src/hooks/fetchHook';
export {getServerSideProps} from '../src/ssp/cart';

export default function Cart(props) {
	const isEditingOrder = props.orderId !== null;
	const cart = useCart(props.cart);
	const router = useRouter();

	useEffect(() => infoMessages(), []);

	const sendOrder = async () => {
		Fetch<{ products: Array<productType>; total: number }>({
			url: `/api/orders${isEditingOrder ? `/${props.orderId}` : ''}`,
			method: `${isEditingOrder ? 'PUT' : 'POST'}`,
			data: { products: cart.products, total: cart.total },
			onSuccess: () => {
				cart.removeCart();
				router.push('/#orderstored');
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
										deleteProduct={(product: productType) => cart.removeProduct(product)}
										addProduct={(product: productType, qty) => cart.addProduct(product, qty)}
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

