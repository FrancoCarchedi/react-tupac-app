import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-body-tertiary fixed-bottom">
      <div className="container py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Inicio</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Usuarios</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Carreras</a></li>
        </ul>
        <p className="text-center text-body-secondary">© 2023 Franco Carchedi</p>
      </div>
  </footer>
  )
}

export default Footer