
import { Text } from '@nextui-org/react';
export default function AvisoCarrito({innerStyle}) {
    //Aqui poner el Typscript para obtener la fecha y hora de apertura del carro del excel
    
    var Fecha = '10/5'
    var Hora = '15 PM'

    const Starter = 'El carrito abre el';
    const FechaHora = Fecha+' a las '+Hora
    return (
        
        <div>
            <Text>
                <Text h1 css={{color:innerStyle}}>{Starter} {FechaHora} </Text>
            </Text>
        </div>
    );
}