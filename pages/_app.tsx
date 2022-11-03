import 'reflect-metadata';
import '../sass/base.scss';
import 'react-toastify/dist/ReactToastify.css';
import { NextUIProvider } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import { AppCtxProvider } from '../src/context';

const MyApp = ({ Component, pageProps }) => {
	return (
		<NextUIProvider>
			<AppCtxProvider cart={pageProps.cart}>
				<Component {...pageProps} />
				<ToastContainer />
			</AppCtxProvider>
		</NextUIProvider>
	);
};

export default MyApp;
