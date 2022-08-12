import Layout from './layout'
import LoginCard from '../components/cards/LoginCard'
import LandingCerrado from '../components/landing/LandingCerrado'
export default function Home() {
  return (
    <Layout>
        <LoginCard/>
        <LandingCerrado/>
    </Layout>
  )
}
