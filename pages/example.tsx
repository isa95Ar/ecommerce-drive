import React from 'react';
import Layout from './layout';
import styles from '../styles/scss/example.module.scss';

export default function Example() {

    return (<Layout>
        <div className='container'>
            <div className='row'>
                <div className='col-12 mt-4'>
                    <h1>Descubre nuestros productos!</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div  className={'card'}>
                    
                        <div className='card-header'>
                            <div className='row'>
                                <div className='col-3'>
                                    <form>
                                        <div className="input-group input-group-dynamic">
                                            <label className="form-label">Buscar por Nombre</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Layout>);
}