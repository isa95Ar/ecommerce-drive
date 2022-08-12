
import { Text } from '@nextui-org/react';
export default function AvisoCarrito({ innerStyle }) {
    //Aqui poner el Typscript para obtener la fecha y hora de apertura del carro del excel

    var Fecha = '10/5' // aqui iria la variable de fecha
    var Hora = '15 PM' // aqui va la variable de la hora

    const Starter = 'El carrito abre el';
    const FechaHora = Fecha + ' a las ' + Hora
    return (

        <div>
            <Text>
                <Text h1 css={{ color: innerStyle }}>{Starter} {FechaHora} </Text>
            </Text>
        </div>
    );
}