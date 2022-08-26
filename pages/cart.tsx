import Layout from './layout';
import LoginCard from '../components/cards/LoginCard';
import Header from '../components/Header';
import {Button, Container} from '@nextui-org/react';
import ProductCart from '../components/ProductCart';
import TotalCart from '../components/TotalCart';

export default function Cart(props) 
{

  return (
    <Layout {...props}>
      {!props.user.logged 
        && 
      <LoginCard />}

      {props.user.logged 
        && <>
            <Header user={props.user} title={"Tu carrito"} />
            <Container>
              <ProductCart />
              <TotalCart />
              <Button  className='button-total' >Realizar pedido</Button>
            </Container>
          </>
      }
    </Layout>
  )
}




