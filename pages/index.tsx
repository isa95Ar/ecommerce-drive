import Layout from './layout';
import LoginCard from '../components/cards/LoginCard';
import LandingCerrado from '../components/landing/LandingCerrado';
import Header from '../components/Header';
import Products from '../components/Products';
import { container } from 'tsyringe';
import ProductService from '../src/services/ProductService';
import ConfigService from '../src/services/ConfigService';
import { useEffect, useState } from 'react';
import { getCartStatus } from '../helpers/content';
import AvisoCarrito from '../components/AvisoCarrito';

export default function Home(props) 
{
  const [cartStatus, setCartStatus] = useState({});
  useEffect(() => {
    getCartStatus().then((res) => setCartStatus(res));
  }, []);
  return (
    <Layout {...props}>
      {!props.user.logged 
        && 
      <LoginCard />}
      {props.user.logged && cartStatus.status === 'open'
        ? <Products user={props.user} /> : <AvisoCarrito status={cartStatus} />
      }
    </Layout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // Pass data to the page via props
  // return { props: { data } }

  const configService = container.resolve(ConfigService);
  const getIsOpen = await configService.getCartStatus();
  console.log(getIsOpen);
  return {props: {}};
}