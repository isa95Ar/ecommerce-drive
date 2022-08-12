import { Container, Row, Col, Card } from '@nextui-org/react';
import { Button } from "@nextui-org/react";

export default function NavBar() {
    var style = {
        navStyle: {
            primary: "#F29400",
            accent:"#F3AF43"
        }
    }
    return (
        <Container css={{backgroundColor:style.navStyle.primary,height:"8vh",position:"fixed",display:"flex", zIndex:"1",alignItems:"center",justifyContent:"space-between",padding:"2px 8px 2px 8px",width:"100%",margin:"0px 0px 0px 0px"}}>
            casi
            <Button css={{alignSelf:"right",backgroundColor:style.navStyle.accent}} size={"sm"}>Cerrar Sesión</Button>
        </Container>
    );
}