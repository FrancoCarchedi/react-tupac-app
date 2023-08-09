import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary py-3">
      <div className="container">
        <a className="navbar-brand" href="#">Instituto Superior de Formación Docente y Técnica Nº 114 "José Gabriel Tupac Amaru II"</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/users">Usuarios</a>
            </li>
            
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Carreras</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar