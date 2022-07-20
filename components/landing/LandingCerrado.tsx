import { Container, Spacer, Link, Card } from '@nextui-org/react';
import bgImg1 from '../../public/img/placeholder/placeholderNaranja.png' //Cambiar estos link con las imagen correspondiente
import bgImg2 from '../../public/img/placeholder/placeholderBlanco.png' //Cambiar estos link con las imagen correspondiente
import AvisoCarrito from '../AvisoCarrito';
export default function LandingCerrado() {
    var style
    var useStyle = 2 //Esto define que estilo se usa, por ahora usa un valor holdeado 1 o menor para el estilo original,  cualquier mayor a 1 para el estilo alternativo
    const baseStyle = { // paleta de colores e imagen de "android  small 2" de la maqueta en figma (usestyle = 1)
        imgStyle: {
            backgroundImage: `url(${bgImg1.src})`,
            height: '100vh',
            backgroundPosition:"center"
        },
        linkStyle: {
            color: "white"
        },
        avisoStyle: {
            color: "white"
        }

    }
    const altStyle = {// paleta de colores e imagen de "android small 3" de la maqueta en figma (usestyle = 2)
        imgStyle: {
            backgroundImage: `url(${bgImg2.src})`,
            height: '100vh',
        },
        linkStyle: {
            color: "black"
        },
        avisoStyle: {
            color: "orange"
        }
    }
    if (useStyle <= 1) {
        style = baseStyle
    }
    else {
        style = altStyle
    }

    return (
        <div style={style.imgStyle}>
        <Container fluid>
            <Card css={{ height: "40vh", background: "none" /*Tarjeta para el espaciado */ }}> </Card>
            <AvisoCarrito innerStyle={style.avisoStyle.color} />
            <Spacer y={3} />
            <Link block href='#' css={{ color: style.linkStyle.color, background: "none" }} underline> Visita Nuestra Pagina</Link>
            <Spacer y={1} />
            <Link block href='#' css={{ color: style.linkStyle.color, background: "none" }} underline> Unite a la comunidad</Link>
        </Container>
        </div>
    );
}