import { Button, Container, Grid, Text } from "@nextui-org/react";
import { FC } from "react";

type props = {
  ordersCount: number;
}

const CurrentOrders:FC<props> = ({ordersCount}) => {
  return (
    <Container>
      <Grid.Container justify="center" direction="column" alignItems="center">
        <Text h3>
          Pedidos realizados hasta ahora 
        </Text>
        <Text h2>
          {ordersCount}
        </Text>
        <Button className="button-total">Enviar pedidos</Button>
      </Grid.Container>
    </Container>
  )
}

export default CurrentOrders;