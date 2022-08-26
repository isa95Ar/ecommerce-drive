import "reflect-metadata";
import "../sass/base.scss";
import { NextUIProvider } from "@nextui-org/react";
import { sessionOptions } from "../src/utils/withIronSession";
import App, { AppContext } from "next/app";
import { getIronSession, IronSessionData } from "iron-session";
import { UserLogged } from "../src/global/types";
import { container } from "tsyringe";
import ConfigService from "../src/services/ConfigService";
import ProductService from "../src/services/ProductService";
import mongoConnection from "../src/utils/mongoConnection";

const MyApp = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {

  const ironSession: IronSessionData = await getIronSession(
    appContext.ctx.req,
    appContext.ctx.res,
    sessionOptions
  );

  const appProps = await App.getInitialProps(appContext);

  const user: UserLogged = ironSession.user ?? { logged: false };

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      user,
    },
  };
};

export default MyApp;
