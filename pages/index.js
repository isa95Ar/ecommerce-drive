
import Layout from './layout'

export default function Home() {
  return (
    <Layout>
      <div className='container'>
        <div className='col-12'>
          <div className='card'>
            <div className='card-header'>
                Using UseState
            </div>
            <div className='card-body'>
                <input type={"text"} className='form-control' />
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
