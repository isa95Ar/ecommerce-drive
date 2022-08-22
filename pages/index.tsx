import Layout from './layout';
import LoginCard from '../components/cards/LoginCard';
import LandingCerrado from '../components/landing/LandingCerrado';

export default function Home(props) 
{

  return (
    <Layout {...props}>
        <LoginCard/>
        <LandingCerrado/>
    </Layout>
  )
}




