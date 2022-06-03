
import InputCustom from '../components/InputCustom'
import Layout from './layout'

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
              <div className="input-group input-group-static">
                <label>First Name</label>
                <InputCustom onChange={(e) => console.log(e)} />
              </div>
            </div>
            <div className='card-footer'>
              <button className='btn btn-info'>Probar</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
