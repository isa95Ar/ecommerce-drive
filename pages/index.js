
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
                <input className="form-control" placeholder="eg. Kurt Shelby" type="text" />
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
