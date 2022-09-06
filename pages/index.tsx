import Layout from './layout';
import LoginCard from '../components/cards/LoginCard';
import Products from '../components/Products';
import { container } from 'tsyringe';
import ConfigService from '../src/services/ConfigService';
import AvisoCarrito from '../components/AvisoCarrito';
import {getIronSession, IronSessionData} from "iron-session";
import {sessionOptions} from "../src/utils/withIronSession";
import {UserLogged} from "../src/global/types";

export default function Home(props) {

	const RenderComponent = () => {
		if(!props.user.logged && props.cartStatus.status === 'open'){
			return <LoginCard />;
		}

		if(props.user.logged && props.cartStatus.status === 'open'){
			return <Products user={props.user} />
		}

		return <AvisoCarrito status={props.cartStatus} />;
	}

	return (
		<Layout {...props}>
			{RenderComponent()}
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const configService = container.resolve(ConfigService);
	const getIsOpen = await configService.getCartStatus();
	const ironSession: IronSessionData = await getIronSession(
		context.req,
		context.res,
		sessionOptions
	);

	const user: UserLogged = ironSession.user ?? { logged: false };
	return { props: {cartStatus: getIsOpen, user} };
}
