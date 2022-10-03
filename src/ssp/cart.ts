import { getIronSession, IronSessionData } from 'iron-session';
import { sessionOptions } from '../utils/withIronSession';
import { container } from 'tsyringe';
import OrderService from '../services/OrderService';
import { UserLogged } from '../global/types';

export async function getServerSideProps(context) {
	const ironSession: IronSessionData = await getIronSession(context.req, context.res, sessionOptions);

	const user: UserLogged = ironSession.user ?? { logged: false };
	const cart: any = {};
	let orderId = null;

	if (user.logged) {
		const orderService = container.resolve(OrderService);
		const ModelResponse = await orderService.getUserOrder(user.email);
		if (ModelResponse) {
			orderId = ModelResponse._id.toString();
			cart.products = ModelResponse.products.map(({ code, name, price, minimum, qty, total, picture }) => ({
				code,
				name,
				price,
				minimum,
				qty,
				total,
				picture
			}));
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
