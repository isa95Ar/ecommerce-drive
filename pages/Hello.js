import { useState } from 'react';
import Layout from './layout'

export default function Hello() {
  const [nombre, Setnombre] = useState();
  const handleClick = () => {
    Setnombre("AJSDFASIJBDIBFAID")
  }
  const handleSubbmit = () => {
    Setnombre();
  }
  return (
    <Layout>
      <div className='container'>
        <div className='col-12'>
          <div className='card'>
            <div className='card-header'>
              Using UseState
            </div>
            <div className='card-body'>
              
              <form>
                <div className='form-group'>
                  <input type="text" className='form-control' onChange={(e)=> Setnombre(e.target.value)}></input>
                  <input className="btn btn-secondary" type="submit"></input>
                </div>
              </form>
              <p>
               usted envió: {nombre}
              </p>
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

