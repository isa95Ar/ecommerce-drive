
import { sessionOptions } from '../utils/withIronSession';
import { container } from 'tsyringe';
import ConfigService from '../services/ConfigService';
import { getIronSession, IronSessionData } from 'iron-session';
import { UserLogged } from '../global/types';
import OrderService from '../services/OrderService';

export async function getServerSideProps(context) {
	const configService = container.resolve(ConfigService);
	const getIsOpen = await configService.getCartStatus();
	const ironSession: IronSessionData = await getIronSession(context.req, context.res, sessionOptions);
	if (getIsOpen.status !== 'open' || !ironSession.user) {
		return {
			redirect: {
				permanent: false,
				destination: '/'
			},
			props: {}
		};
	}

	let cart: any = {};

	const user: UserLogged = ironSession.user ?? { logged: false };

	const orderService = container.resolve(OrderService);
	const ModelResponse = await orderService.getUserOrder(user.email);
	if (ModelResponse) {
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

	return { props: { cartStatus: getIsOpen, user, cart } };
}
