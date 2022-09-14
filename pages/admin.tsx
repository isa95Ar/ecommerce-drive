import { useState } from "react";
import { Container, Grid } from "@nextui-org/react";
import { container } from "tsyringe";
import { getIronSession, IronSessionData } from "iron-session";
import { UserLogged } from "../src/global/types";
import { sessionOptions } from "../src/utils/withIronSession";
import OrderService from "../src/services/OrderService";
import ConfigService from "../src/services/ConfigService";
import Layout from "./layout";
import Header from "../components/Header";
import CartDatesForm from "../components/admin/CartDatesForm";
import CurrentOrders from "../components/admin/CurrentOrders";
import CurrentStatus from "../components/admin/CurrentStatus";

export default function Admin(props) {
  const [editingDates, setEditingDates] = useState(false);
  const [ordersCount, setOrdersCount] = useState(props.ordersCount);
  const [currentStatus, setCurrentStatus] = useState(props.currentStatus);

  return (
    <Layout>
      <Header user={props.user} title="Panel de administrador" ></Header>
      <Container>
        <Grid.Container justify="center" alignItems="center" gap={4}>
          <Grid xs={12} sm={10} md={6} lg={4}>
            <CurrentOrders ordersCount={ordersCount} setOrdersCount={setOrdersCount} />
          </Grid>
          <Grid xs={12} sm={10} md={6} lg={4}>
            {editingDates ? (
              <CartDatesForm setEditing={setEditingDates} setCurrentStatus={setCurrentStatus}/>
            ) : (
              <CurrentStatus status={currentStatus} setEditing={setEditingDates}/>
            )}
          </Grid>
        </Grid.Container>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const orderService = container.resolve(OrderService);
  const configService = container.resolve(ConfigService);

  const ironSession: IronSessionData = await getIronSession(
    context.req,
    context.res,
    sessionOptions
  );
  const user: UserLogged = ironSession.user ?? { logged: false };

  const currentStatus = await configService.getCartStatus();
  
  const ordersCount = await orderService.getOrdersCount();

  return {
      props: {user, currentStatus, ordersCount}
    }
};

