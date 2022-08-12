import { Container, Row, Col, Card } from '@nextui-org/react';
export default function NavBar() {
    var style = {
        navStyle: {
            primary: "#F29400",
            accent:"#F3AF43"
        }
    }
    return (
        <Container fluid css={{backgroundColor:style.navStyle.primary,height:"44px",position:"fixed", zIndex:"1"}}>
            <Card css={{backgroundColor:style.navStyle.accent,alignItems:"center",width:"115px",float:"right",font:"roboto"}}> 
                Cerrar Sesion
            </Card>
        </Container>
    );
}