import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

const Navbar = () => {

  const { user, logout } = useContext( AuthContext )
  console.log(user)
  const navigate = useNavigate();

  const onLogout = () => {

    logout();
    navigate('/login', {
      replace: true
    });
  }


  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary py-3">
      <div className="container">
        <a className="navbar-brand" href="/">Instituto Tupac Amarú II</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 align-items-center text-center">
            
            <li className="nav-item">
              <NavLink className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : ''}`} to={"/"}>Inicio</NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : ''}`} to={"/new-students"}>Ingresantes 2024</NavLink>
            </li> */}

            {/* Para ver las carreras disponibles, no hace falta validar nada */}
            <li className="nav-item" >
              <NavLink className={ ({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} to={"/careers"}>Carreras</NavLink>
            </li>

            <li className={`nav-item ${user? `d-block` : `d-none`}`}>
              <NavLink className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : ''}`} to={"/app/guide"}>Manual de usuario</NavLink>
            </li>

            {/* Para ver el listado de usuarios, debe validar
                -Que esté logeado
                -Que su rol sea administrador
            */}
            <li className={`nav-item dropdown ${user && user.roles.includes("Administrador") ? `d-block` : `d-none`}`}>
              <NavLink className={ ({isActive}) =>  `nav-link dropdown-toggle ${ isActive ? 'active' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Administración</NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to={"/app/users"}>Usuarios</NavLink></li>
                <li><NavLink className="dropdown-item" to={"/app/careers"}>Carreras</NavLink></li>
                <li><NavLink className="dropdown-item" to={"/app/subjects"}>Materias</NavLink></li>
                <li><NavLink className="dropdown-item" to={"/app/enrollments"}>Cursadas</NavLink></li>
              </ul>
            </li>

            {/* Para ver el boton de iniciar sesión, debe validar que no haya sesión iniciada */}
            <li className={`nav-item ${user? `d-none` : `d-block`}`}>
              <Link className="btn btn-success" to="/login">Iniciar sesión</Link>
            </li>

            
            <li className={`nav-item ${user ? 'd-block' : 'd-none'}`}>
              <div className="btn-group">
                <a className="btn dropdown-toggle no-caret border-0" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-circle" style={{ fontSize: 24 }}></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  {/* Para ver su perfil, debe estar logeado */}
                  <li><NavLink className="dropdown-item" to={"/app/profile"}>Perfil</NavLink></li>
                  {/* Para ver sus materias, debe tener rol estudiante */}
                  <li>
                    {/* <NavLink className={`dropdown-item ${user && user.roles?.includes("Alumno") ? `d-block` : `d-none`}`} to={"/app/subjects"}>Mis Materias</NavLink> */}

                    {user &&
                      <NavLink className={`dropdown-item ${user && ["Docente", "Alumno"].some(role => user.roles.includes(role)) ? `d-block` : `d-none`}`} to={`/app/${user.id}/enrollments/`}>Mis cursadas</NavLink>
                    }
                  </li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><button className="dropdown-item" onClick={onLogout}>Cerrar sesión</button></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar