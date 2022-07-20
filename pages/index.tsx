import Layout from './layout'
import LoginCard from '../components/cards/LoginCard'
import LandingCerrado from '../components/landing/LandingCerrado'
export default function Home() {
  return (
    <Layout>
        <div color='white'>Primera iteracion del login</div>
        <LoginCard/>
        Landing 
        <LandingCerrado/>
    </Layout>
  )
}
