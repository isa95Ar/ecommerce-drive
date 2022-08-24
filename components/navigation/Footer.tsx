import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Image, Text, Row, Link } from "@nextui-org/react";
import React from "react";
export default function Footer() {
  return (
    <Grid.Container>
      <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
        <Image src="/../../img/almargen.png" />
      </Grid>
      <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row css={{ display: "block" }}>
          <Text>¿Cómo funciona?</Text>
          <Text>
            El carrito abre los Miércoles a partir de las 16 hs y cierra los
            pedidos el Domingo a las 23 hs. Podes pasar a buscar tu pedido los
            Lunes y Martes de 8 a 16 hs por Mitre 8400.
          </Text>
        </Row>
      </Grid>
      <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row css={{ display: "block" }}>
          <Text>Contactanos</Text>
          <Text>
            Por dudas o consultas de tus pedidos podes escribirnos por mail o
            conicarte por WhatsApp.
          </Text>
          <FontAwesomeIcon icon={faArrowRight} color="white" />
          <Link block href="#" className="link-container link-container-black" underline>
            {" "}
            mail@mail.com.ar
          </Link>
        </Row>
      </Grid>
    </Grid.Container>
  );
}
