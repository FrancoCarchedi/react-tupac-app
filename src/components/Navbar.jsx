const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark py-3">
      <div className="container">
        <a className="navbar-brand text-light" href="#">Instituto Superior de Formación Docente y Técnica Nº 114 "José Gabriel Tupac Amaru II"</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-light active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Usuarios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Carreras</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar