import { Container, Grid } from "@nextui-org/react";
import { getIronSession, IronSessionData } from "iron-session";
import CartDatesForm from "../components/admin/CartDatesForm";
import { UserLogged } from "../src/global/types";
import { sessionOptions } from "../src/utils/withIronSession";
import Layout from "./layout";
import Header from "../components/Header";
import { AppContext } from "next/app";
import { BaseContext } from "next/dist/shared/lib/utils";
import Orders from "../components/admin/Orders";

export default function Admin(props) {
  console.log(props);
  return (
    <Layout>
      <Header user={props.user} title="Panel de administrador" ></Header>
      <Container>
        <Grid.Container justify="center">
          <Grid>
            <Orders />
            <br />
            <CartDatesForm />
          </Grid>
        </Grid.Container>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const ironSession: IronSessionData = await getIronSession(
    context.req,
    context.res,
    sessionOptions
  );

  const user: UserLogged = ironSession.user ?? { logged: false };

  return {
      props: {user}
    }
};

