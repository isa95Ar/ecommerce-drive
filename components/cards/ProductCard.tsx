import { Card, Grid, Text } from "@nextui-org/react";

export default function ProductCard() {
  return (

    <Grid.Container gap={2}>
      <Grid xs={12} sm={12}  md={6} lg={4} xl={4}>
    <Card css={{ mt: "50px" }}>
      <Card.Body>
        <Text>Almohaditas rellenas de frutilla o limón</Text>
      </Card.Body>
    </Card>
    </Grid>
    </Grid.Container>
  );
}