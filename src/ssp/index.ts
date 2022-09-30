import { container } from 'tsyringe';
import ConfigService from '../services/ConfigService';
import { getIronSession, IronSessionData } from 'iron-session';
import { sessionOptions } from '../utils/withIronSession';
import { UserLogged } from '../global/types';

export async function getServerSideProps(context) {
	const configService = container.resolve(ConfigService);
	const getIsOpen = await configService.getCartStatus();
	const ironSession: IronSessionData = await getIronSession(context.req, context.res, sessionOptions);

	if (ironSession.user && getIsOpen.status === 'open') {
		return {
			redirect: {
				permanent: false,
				destination: '/products'
			},
			props: {}
		};
	}

	const user: UserLogged = ironSession.user ?? { logged: false };
	return { props: { cartStatus: getIsOpen, user } };
}
