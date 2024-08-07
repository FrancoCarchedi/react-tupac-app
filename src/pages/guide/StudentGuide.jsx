import React from 'react'
import { Link } from 'react-router-dom'


const StudentGuide = () => {
  return (
    <div className='my-5'>
      <div className="col-12 mb-5">
        <h3 className="fw-semibold mb-3">Alumno</h3>
        <p>Como alumno puedes consultar el estado de tus materias, tus cursadas, ver y actualizar la información de tu perfil.</p>
      </div>

      {/* Gestion de usuarios */}
      <div className="col-12 mb-3">
        <div className="">
          <h5 className="fw-semibold mb-3">Información de perfil</h5>
          <p>Para ver y actualizar la información de perfil, en la barra de navegación hacer clic sobre el ícono de usuario y luego en "Perfil". También puedes dirigirte a la sección haciendo <Link to={"/app/profile"}>clic aquí</Link>.</p>
          <ul>
            <li>Actualizar información: En la sección de "Mi perfil" podrás ver información personal, hacer clic en "Editar" y actualizar la información que desees. Finalmente clic en "Guardar".</li>
            <li>Consultar cursadas: Al hacer click sobre el ícono de usuario, en el menú desplegable hacer clic en "Mis cursadas".</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StudentGuide