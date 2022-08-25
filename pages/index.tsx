import Layout from './layout';
import LoginCard from '../components/cards/LoginCard';
import LandingCerrado from '../components/landing/LandingCerrado';
import Header from '../components/Header';
import Products from '../components/Products';

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




