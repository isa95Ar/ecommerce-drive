
import { Text } from '@nextui-org/react';
import Links from './landing/Links';
export default function AvisoCarrito({ innerStyle, landingType }) {
    //Aqui poner el Typscript para obtener la fecha y hora de apertura del carro del excel

    // LandingType
    // En el caso de que LandingType:
    // Si es open, debería mostrar el "Ya hiciste tu pedido de este mes?".
    //  Si es toOpen, "El carrito abre el 8/7 15hs". 
    // Si es closed o no llega nada, "El carrito ya está cerrado"

    var Fecha = '10/5' // aqui iria la variable de fecha
    var Hora = '15 PM' // aqui va la variable de la hora

    const Starter = 'El carrito abre el';
    const FechaHora = Fecha + ' a las ' + Hora
    return (
        <>
        {
            landingType === "open" ? (
                <div>
                    <Text>
                        <Text h1 css={{ color: innerStyle }}>¿Ya hiciste tu pedido de este mes? </Text>
                    </Text>
                </div>
            ) : landingType === "toOpen" ? (
                    <div>
                        <Text>
                            <Text h1 css={{ color: innerStyle }}>{Starter } {FechaHora}</Text>
                        </Text>
                    </div>
                ) : (
                    <div>
                        <Text>
                            <Text h1 css={{ color: innerStyle }}>El carrito ya está cerrado. </Text>
                            <Text h4 css={{ color: innerStyle }}>Nos vemos la próxima semana. </Text>
                        </Text>
                    </div>
                )
            }
            <Links />
        </>
    );
}