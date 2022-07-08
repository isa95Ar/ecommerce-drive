import React from 'react';
export default function LandingPage() {

  const style = {
    backgroundImage: `url('https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80&#39')`
  }

    return (  <div>
    <header>
      <div className="page-header min-vh-100" style={style}>
        <span className="mask bg-gradient-dark opacity-5"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
              <h1 className="text-white mb-4">Compras Cooperativas</h1>
              <p className="text-white opacity-8 lead pe-5 me-5">Administra tus compras a travez de esta util WebApp! </p>
              <div className="buttons">
                <button type="button" className="btn btn-white mt-4">Acceder con Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>        
    );
}