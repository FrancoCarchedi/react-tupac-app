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
          <p>Para ver y actualizar la información de perfil, en la barra de navegación hacer clic sobre el ícono de usuario y luego en "Perfil". También puedes dirigirte a la sección haciendo <Link to={"/app/profile"}>clic aquí</Link>.</p>
          <ul>
            <li>Actualizar información: En la sección de "Mi perfil" podrás ver información personal, hacer clic en "Editar" y actualizar la información que desees. Finalmente clic en "Guardar".</li>
            <li>Consultar cursadas: Al hacer click sobre el ícono de usuario, en el menú desplegable hacer clic en "Mis cursadas".</li>
          </ul>
        </div>
      </div>

      {/* Gestion de cursadas */}
      <div className="col-12">
        <div className="">
          <h5 className="fw-semibold mb-3">Gestión de cursadas</h5>
          <p>Para crear cursadas, en la barra de navegación hacer clic en "Adminitración" y luego clic en "Cursadas". También puedes dirigirte a la sección haciendo <Link to={"/app/enrollments"}>clic aquí</Link>.</p>
          <p>Como administrador solo es posible crear cursadas. Para cada cursada podremos asignar un docente, y uno o varios alumnos según corresponda.</p>
          <ul>
            <li>Listar usuarios: En la sección de "Usuarios" podrás ver un listado de usuarios, podrás buscar y filtrar por "Nombre de usuario".</li>
            <li>Crear usuarios: hacer clic en "Agregar usuario", completar con la información del usuario y finalmente hacer clic en "Guardar".</li>
            <li>Ver información de un usuario: En la sección de "Usuarios", hacer clic en "Ver detalle" en la fila del usuario que se desea consultar.</li>
            <li>Editar usuarios: En la pantalla de información del usuario, hacer clic en "Editar" para actualizar la información del usuario y finalmente en "Guardar".</li>
            <li>Eliminar usuarios: En la pantalla de información del usuario, hacer clic en "Eliminar" y luego confirmar.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TeacherGuide