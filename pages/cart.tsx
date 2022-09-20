import Layout from './layout';
import Header from '../components/navigation/Header';
import { Button, Container, Grid } from '@nextui-org/react';
import ProductCart from '../components/ProductCart';
import TotalCart from '../components/TotalCart';
import { useCart } from '../src/hooks/CartHook';
import { ProductCart as productType, UserLogged } from '../src/global/types';
import { getIronSession, IronSessionData } from 'iron-session';
import { sessionOptions } from '../src/utils/withIronSession';
import { container } from 'tsyringe';
import OrderService from '../src/services/OrderService';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { infoMessages } from '../helpers/notify';

export default function Cart(props) {
  const isEditingOrder = props.orderId !== null; 
	const cart = useCart(props.cart);
	const router = useRouter();

	useEffect(()=> infoMessages(),[]);

	const sendOrder = async () => {
		try {
			console.log(isEditingOrder)
			if (isEditingOrder) {
				await fetch(`/api/orders/${props.orderId}`, {
					method: 'PUT',
					body: JSON.stringify({ products: cart.Cart.products })
				});
			} else {
				await fetch('/api/orders', {
					method: 'POST',
					body: JSON.stringify({ products: cart.Cart.products })
				});
			}
			cart.removeCart();
			router.push('/#orderstored');
		} catch (e) {
			console.warn(`error on saving order`, e);
		}
	};

	return (
		<Layout {...props}>
			{props.user.logged && (
				<>
					<Header user={props.user} title={isEditingOrder ? 'Edita tu pedido' : 'Tu carrito'} cart={cart.Cart} />
					<Container>
						<Grid.Container justify="center" gap={2}>
							<Grid direction="column" xs={12} sm={12} md={4} xl={8} lg={8}>
								{cart.Cart.products.map((product: productType) => (
									<ProductCart
										key={product.code}
										deleteProduct={(product: productType) => cart.removeProduct(product)}
										addProduct={(product: productType, qty) => cart.addProduct(product, qty)}
										product={product}
									/>
								))}
								<TotalCart total={cart.Cart.total} />
								<Button
									disabled={cart.Cart.products.length < 0}
									className={`${cart.Cart.products.length > 0 ? 'button-total' : 'button-total-disabled'}`}
									onClick={sendOrder}
								>
									{isEditingOrder ? "Modificar pedido" : "Realizar pedido"}
								</Button>
                                <Button
									className="button-continue"
									onClick={() => {router.push('/')}}
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

export async function getServerSideProps(context) {
	const ironSession: IronSessionData = await getIronSession(context.req, context.res, sessionOptions);

	const user: UserLogged = ironSession.user ?? { logged: false };
	const cart: any = {};
	let orderId = null;

	if (user.logged) {
		const orderService = container.resolve(OrderService);
		const ModelResponse = await orderService.getUserOrder(user.email);
    if(ModelResponse){
			orderId = ModelResponse._id.toString();
      cart.products = ModelResponse.products.map(({code,name,price,minimum,qty,total,picture}) => ({code,name,price,minimum,qty,total,picture}));
    }
	} else {
    return {
			redirect: {
				permanent: false,
				destination: '/login'
			},
			props: {}
		};
  }
 
	return {
		props: { user, cart, orderId }
	};
}
