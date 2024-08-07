import React from 'react'
import { Link } from 'react-router-dom'

const AdministratorGuide = () => {
  return (
    <div className='my-5'>
      <div className="col-12 mb-5">
        <h3 className="fw-semibold mb-3">Administrador</h3>
        <p>Como administrador puedes administrar Carreras, Materias y Usuarios</p>
      </div>

      {/* Gestion de usuarios */}
      <div className="col-12 mb-3">
        <div className="">
          <h5 className="fw-semibold mb-3">Gestión de usuarios</h5>
          <p>Para administrar y gestionar usuarios, en la barra de navegación hacer clic en "Adminitración" y luego clic en "Usuarios". También puedes dirigirte a la sección haciendo <Link to={"/app/users"}>clic aquí</Link>.</p>
          <ul>
            <li>Listar usuarios: En la sección de "Usuarios" podrás ver un listado de usuarios, podrás buscar y filtrar por "Nombre de usuario".</li>
            <li>Crear usuarios: hacer clic en "Agregar usuario", completar con la información del usuario y finalmente hacer clic en "Guardar".</li>
            <li>Ver información de un usuario: En la sección de "Usuarios", hacer clic en "Ver detalle" en la fila del usuario que se desea consultar.</li>
            <li>Editar usuarios: En la pantalla de información del usuario, hacer clic en "Editar" para actualizar la información del usuario y finalmente en "Guardar".</li>
            <li>Eliminar usuarios: En la pantalla de información del usuario, hacer clic en "Eliminar" y luego confirmar.</li>
          </ul>
        </div>
      </div>

      {/* Gestion de carreras */}
      <div className="col-12 mb-3">
        <div className="">
          <h5 className="fw-semibold mb-3">Gestión de carreras</h5>
          <p>Para administrar y gestionar carreras, en la barra de navegación hacer clic en "Adminitración" y luego clic en "Carreras". También puedes dirigirte a la sección haciendo <Link to={"/app/careers"}>clic aquí</Link>.</p>
          <ul>
            <li>Listar carreras: En la sección de "Carreras" podrás ver un listado de carreras, podrás buscar y filtrar por "Nombre de carrera".</li>
            <li>Crear carreras: hacer clic en "Agregar usuario", completar con la información del usuario y finalmente hacer clic en "Guardar".</li>
            <li>Ver información de un usuario: En la sección de "Usuarios", hacer clic en "Ver detalle" en la fila del usuario que se desea consultar.</li>
            <li>Editar usuarios: En la pantalla de información del usuario, hacer clic en "Editar" para actualizar la información del usuario y finalmente en "Guardar".</li>
            <li>Eliminar usuarios: En la pantalla de información del usuario, hacer clic en "Eliminar" y luego confirmar.</li>
          </ul>
        </div>
      </div>

      {/* Gestion de materias */}
      <div className="col-12">
        <div className="">
          <h5 className="fw-semibold mb-3">Gestión de materias</h5>
          <p>Para administrar y gestionar materias, en la barra de navegación hacer clic en "Adminitración" y luego clic en "Materias". También puedes dirigirte a la sección haciendo <Link to={"/app/subjects"}>clic aquí</Link>.</p>
          <ul>
            <li>Listar materias: En la sección de "Materias" podrás ver un listado de materias, podrás buscar y filtrar por "Nombre de materia".</li>
            <li>Crear materias: hacer clic en "Agregar materia", completar con la información de la materia y la carrera a la que corresponde. Finalmente hacer clic en "Guardar".</li>
            <li>Editar materias: En la pantalla de información del usuario, hacer clic en "Editar" para actualizar la información del usuario y finalmente en "Guardar".</li>
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
            <li>Listar cursadas: En la sección de "Cursadas" podrás ver un listado de cursadas.</li>
            <li>Crear cursadas: En la sección de "Cursadas" hacer clic en "Crear cursada", completar con la información de la materia, el docente, y los alumnos. Finalmente clic en "Guardar".</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdministratorGuide