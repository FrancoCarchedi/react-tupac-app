import React, { useContext } from 'react'
import AdministratorGuide from './AdministratorGuide'
import StudentGuide from './StudentGuide'
import TeacherGuide from './TeacherGuide'
import { AuthContext } from '../../auth/context/AuthContext'

const Guide = () => {

  const { user } = useContext( AuthContext )

  const renderGuides = () => {
    if (!user || !user.roles) return null;

    return (
      <>
        {user.roles.includes('Administrador') && <AdministratorGuide />}
        {user.roles.includes('Docente') && <TeacherGuide />}
        {user.roles.includes('Alumno') && <StudentGuide />}
      </>
    );
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <h1 className="fw-semibold text-center">Guía de usuario</h1>
          <p className="text-center">Sigue estos pasos para sacar el máximo provecho a nuestro sistema.</p>
        </div>

        {renderGuides()}

      </div>
    </div>
  )
}

export default Guide