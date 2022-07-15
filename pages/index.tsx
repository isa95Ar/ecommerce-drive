
import Layout from './layout'
import TestDropdown from '../components/dropdowns/TestDropdown'
import SelectorDropdown from '../components/dropdowns/SelectorDropdown'
import CardExample from '../components/cards/CardExamples'
import LoginCard from '../components/cards/LoginCard'
export default function Home() {
  return (
    <Layout>
      <div className='container mt-8'>
        <div className='col-12'>
          <div className='card'>
            <div className='card-header'>
              Using UseState
            </div>
            <div className='card-body'>
              <div className="input-group input-group-outline my-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className='card-footer'>
              <button className='btn btn-info'>Probar</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>

        </p>
        <div color='white'>Primera iteracion del login</div>
        <LoginCard/>
        <p>
          <div color='white'>Pruebas--------------------------------</div>
        </p>
        <p>Dropdown Clasico</p>
        <TestDropdown />
        <p>Dropdown Con Selector</p>
        <SelectorDropdown />
        <p>Ejemplos de las cards basicos</p>
        <CardExample />
      </div>
    </Layout>
  )
}
