import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../../services/user/getUser';
import { getRolesByUsuario } from '../../services/roles/getRolesByUsuario';
import TeacherEnrollments from './TeacherEnrollments';
import { getEnrollmentsByUsuario } from '../../services/enrollments/getEnrollmentsByUsuario';
import { getEnrollmentsByDocente } from '../../services/enrollments/getEnrollmentsByDocente';
import StudentEnrollments from './StudentEnrollments';
import { updateEnrollment } from '../../services/enrollments/updateEnrollment';

const USER_INITIAL = {
  id: "",
  nombre: "",
  apellido: "",
  username: "",
  email: "",
  foto: "",
  roles: []
}

const UserEnrollmentsContainer = () => {
  const [userState, setUserState] = useState(USER_INITIAL);
  const [studentEnrollmentsState, setStudentEnrollmentsState] = useState([]);
  const [teacherEnrollmentsState, setTeacherEnrollmentsState] = useState([]);
  const [errorState, setErrorState] = useState("");

  console.log(userState)
  console.log(studentEnrollmentsState)
  console.log(teacherEnrollmentsState)

  const {userid} = useParams()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await getUser(userid);
        const rolesResponse = await getRolesByUsuario(userid);
        const roles = rolesResponse.map(r => r.name);

        setUserState({
          id: userResponse.id,
          nombre: userResponse.nombre,
          apellido: userResponse.apellido,
          username: userResponse.username,
          email: userResponse.email,
          foto: userResponse.foto,
          roles: roles
        });

        // Fetch enrollments based on role
        if (roles.includes('Docente')) {
          
          const docenteEnrollments = await getEnrollmentsByDocente(userid);
          setTeacherEnrollmentsState(docenteEnrollments);
        }

        if (roles.includes('Alumno')) {
          const usuarioEnrollments = await getEnrollmentsByUsuario(userid);
          setStudentEnrollmentsState(usuarioEnrollments);
        }

      } catch (error) {
        setErrorState(error.message);
      }
    };

    fetchUserData();
  }, [userid]);

  const handleUpdateSubmit = async (id, formData) => {
    try {
      await updateEnrollment(id, formData);
      const data = await getEnrollmentsByDocente(userid); // Refresh the user list after creating a career
      setTeacherEnrollmentsState(data);
    } catch (error) {
      setErrorState(error);
    }
  };

  return (
    <>
      {errorState ? (
        <div>Error: {errorState}</div>
      ) : (
        <>
          {userState.roles.includes('Docente') && (
            <div>
              <TeacherEnrollments enrollments={teacherEnrollmentsState} onUpdate={handleUpdateSubmit}/>
            </div>
          )}
          {userState.roles.includes('Alumno') && (
            <div>
              <StudentEnrollments enrollments={studentEnrollmentsState}/>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default UserEnrollmentsContainer