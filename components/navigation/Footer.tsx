import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Image, Text, Row, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Grid.Container css={{backgroundColor: '#F9F9F9'}}>
      <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
        <Image src="/../../img/almargen.png"/>
      </Grid>
      <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row css={{ display: "block" }}>
          <Text css={{fontWeight: 600}}>¿Cómo funciona?</Text>
          <Text>
            El carrito abre los Miércoles a partir de las 16 hs y cierra los
            pedidos el Domingo a las 23 hs. Podes pasar a buscar tu pedido los
            Lunes y Martes de 8 a 16 hs por Mitre 8400.
          </Text>
        </Row>
      </Grid>
      <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row css={{ display: "block" }}>
        <Text css={{fontWeight: 600}}>Contactanos</Text>
          <Text>
            Por dudas o consultas de tus pedidos podes escribirnos por mail o
            conicarte por WhatsApp.
          </Text>
          <FontAwesomeIcon icon={faArrowRight} />
          <Link block href="#" className="link-container link-container-black" underline>
            {" "}
            mail@mail.com.ar
          </Link>
        </Row>
      </Grid>
      <Row css={{ display: "block", backgroundColor: '#333333', color: 'white!important', height: '10vh', textAlign: 'center', alignContent: 'center'}}>
      <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
      © Copyright - {year} Al Margen compras comunitarias
      </Grid>
        </Row>
    </Grid.Container>
  );
}
