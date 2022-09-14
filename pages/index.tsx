import Layout from './layout';
import LoginCard from '../components/cards/LoginCard';
import { container } from 'tsyringe';
import ConfigService from '../src/services/ConfigService';
import AvisoCarrito from '../components/AvisoCarrito';
import { getIronSession, IronSessionData } from 'iron-session';
import { sessionOptions } from '../src/utils/withIronSession';
import { UserLogged } from '../src/global/types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home(props) {
	const router = useRouter();

	useEffect(() => {
		if (props.user.logged && props.cartStatus.status === 'open') {
			router.push('/products');
		}
	}, []);

	const RenderComponent = () => {
		if (!props.user.logged && props.cartStatus.status === 'open') {
			return <LoginCard />;
		}

		return <AvisoCarrito status={props.cartStatus} />;
	};

	return <Layout {...props}>{RenderComponent()}</Layout>;
}

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
