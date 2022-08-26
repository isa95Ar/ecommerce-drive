import Layout from './layout';
import LoginCard from '../components/cards/LoginCard';
import LandingCerrado from '../components/landing/LandingCerrado';
import Header from '../components/Header';
import Products from '../components/Products';
import { container } from 'tsyringe';
import ProductService from '../src/services/ProductService';
import ConfigService from '../src/services/ConfigService';

export default function Home(props) 
{

  return (
    <Layout {...props}>
      {!props.user.logged 
        && 
      <LoginCard />}

      {props.user.logged 
        && <Products user={props.user} />
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