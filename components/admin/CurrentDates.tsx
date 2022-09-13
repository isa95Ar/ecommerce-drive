import { Button, Container, Grid, Text } from "@nextui-org/react";
import { FC } from "react";

type props = {
  status: {
    status: string,
    openDate: string,
    closeDate: string
  };
  setEditing(editing: boolean): void;
}

const CurrentStatus:FC<props> = ({status, setEditing}) => {
  const statusToText = {
    open: "Abierto",
    toOpen: "Abre pronto",
    closed: "Cerrado"
  }
  return (
    <Container>
      <Grid.Container justify="center" direction="column" alignItems="center">
        <Text h3>
          Estado actual del carrito
        </Text>
        <Text h4>
          {statusToText[status.status]}
        </Text>
        <Grid.Container justify="space-around">
          <Grid>
            <Text>Fecha de apertura: <strong>{status.openDate}</strong></Text>
          </Grid>
          <Grid>
            <Text>Fecha de cierre: <strong>{status.closeDate}</strong></Text>
          </Grid>
        </Grid.Container>
        <Button onClick={() => setEditing(true)} className="button-total">Editar fechas</Button>
      </Grid.Container>
    </Container>
  )
}

export default CurrentStatus;