import { Button, Container, Grid, Text } from "@nextui-org/react";
import { FC } from "react";
import { getOrdersToPost } from "../../helpers/content";

type props = {
  ordersCount: number;
}

const CurrentOrders:FC<props> = ({ordersCount}) => {
  const postOrdersOnSheets = async () => {
    try {
      const {orders} = await getOrdersToPost();
      await fetch("/api/admin/orders", {
        method: "POST",
        body: JSON.stringify({orders}),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Grid.Container justify="center" direction="column" alignItems="center">
        <Text h3>
          Pedidos realizados hasta ahora 
        </Text>
        <Text h2>
          {ordersCount}
        </Text>
        <Button onClick={postOrdersOnSheets} className="button-total">Enviar pedidos</Button>
      </Grid.Container>
    </Container>
  )
}

export default CurrentOrders;