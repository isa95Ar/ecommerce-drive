import React from 'react';
import Layout from './layout';
import styles from '../styles/scss/example.module.scss'; 1

export default function Example() {

    return (<Layout>
        
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className={styles.header} >
                            <h4 className="mb-0 text-center" style={{ color: 'white' }}>Iniciar sesion</h4>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className="input-group input-group-outline mb-4">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="input-group input-group-outline mb-4">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <button type="button" className="btn btn-primary">Entrar</button>
                            </form>
                        </div>
                        <div className='card-footer'>
                            <input type={"checkbox"} />
                            <label>Recordar Session</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>);
}