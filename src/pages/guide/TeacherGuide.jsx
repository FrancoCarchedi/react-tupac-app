import React from 'react'
import { Link } from 'react-router-dom'

const TeacherGuide = () => {
  return (
    <div className="my-5">
      <div className="col-12 mb-5">
        <h3 className="fw-semibold mb-3">Docente</h3>
        <p>Como docente puedes ver las cursadas en las que estás asignado, y poner calificaciones a los alumnos.</p>
      </div>

      {/* Gestion de usuarios */}
      <div className="col-12 mb-3">
        <div className="">
          <h5 className="fw-semibold mb-3">Información de perfil</h5>
          <p>Para ver la información de perfil, en la barra de navegación hacer clic sobre el ícono de usuario y luego en "Perfil". También puedes dirigirte a la sección haciendo <Link to={"/app/profile"}>clic aquí</Link>.</p>
          <ul>
            <li>Ver información: En la sección de "Mi perfil" podrás ver tu información personal.</li>
            <li>Consultar cursadas: Al hacer click sobre el ícono de usuario, en el menú desplegable hacer clic en "Mis cursadas".</li>
          </ul>
        </div>
      </div>

      {/* Gestion de cursadas */}
      <div className="col-12">
        <div className="">
          <h5 className="fw-semibold mb-3">Gestión de cursadas</h5>
          <p>Como docente podrás ver las cursadas a la que estas asignado, y calificar a tus alumnos.</p>
          <ul>
            <li>Listar cursadas: En la sección de "Mis cursadas" podrás ver un listado de cursadas, también buscar y filtrar por "Id. de cursada".</li>
            <li>Calificar: Sobre una cursada, hacer clic en "Calificar", completar con la calificación entre 1 y 10 y finalmente hacer clic en "Guardar".</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TeacherGuide