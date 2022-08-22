import "reflect-metadata";
import '../sass/base.scss';
import {Provider} from 'react-redux'
import {NextUIProvider} from '@nextui-org/react';
import store from '../store/store';
import {  sessionOptions } from "../src/utils/withIronSession";
import App from "next/app";
import { getIronSession } from "iron-session";

function MyApp({Component, pageProps}) {
    
    return (
        <Provider store={store}>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </Provider>
    );
}

MyApp.getInitialProps = async (appContext) => {
    
    const ironSession = await getIronSession(appContext.ctx.req,appContext.ctx.res,sessionOptions)
    
    const appProps = await App.getInitialProps(appContext);

    const user = ironSession.user ?? {logged:false};
    

    return { ...appProps,
        pageProps: {
          ...appProps.pageProps,
          user
        }
    }
}

export default MyApp
