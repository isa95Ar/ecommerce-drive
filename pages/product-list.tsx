 import React from "react";
import colores from "../constans/colores";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

 export default function productList () {
 return(
   <>
    <div className="titulo">
      <h1>Tu Carrito</h1>
      <style>
                {`body{
                    background-color: ${colores.colorMain};
                }`}
           </style>
       </div>
    <Grid.Container css={{flexFlow: "column" }}  >
      <Grid sm={0} md={5} >
        <Card css={{ mw: "280px" }}>
          <Card.Header>
            <Text b>Almohaditas rellenas de frutilla o limón</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
                Cancel
              </Button>
              <Button size="sm">Agree</Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Almohaditas rellenas de frutilla o limón</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
                Share
              </Button>
              <Button size="sm" color="secondary">
                Learn more
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
   
   </>




 )   
}
