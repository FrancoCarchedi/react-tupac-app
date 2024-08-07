import React, { useEffect, useState } from 'react'
import { getEnrollments } from '../../services/enrollments/getEnrollments';
import { createEnrollment } from '../../services/enrollments/createEnrollment';
import { updateEnrollment } from '../../services/enrollments/updateEnrollment';
import { getSubjects } from '../../services/subject/getSubjets';
import Enrollments from './Enrollments';

const EnrollmentsContainer = () => {
  const [enrollmentsState, setEnrollmentsState] = useState([]);
  const [subjectsState, setSubjectsState] = useState([]);
  const [errorState, setErrorState] = useState("");

  useEffect(() => {
    getEnrollments()
      .then(response => {
        setEnrollmentsState(response);
      })
      .catch(error => {
        setErrorState(error)
      })
  }, []);

  useEffect(() => {
    getSubjects()
      .then(response => {
        setSubjectsState(response);
      })
      .catch(error => {
        setErrorState(error)
      })
  }, []);

  const handleCreateSubmit = async (formData) => {
    try {
      await createEnrollment(formData);
      const data = await getEnrollments(); // Refresh the user list after creating a career
      setEnrollmentsState(data);
    } catch (error) {
      setErrorState(error);
    }
  };

  const handleUpdateSubmit = async (id, formData) => {
    try {
      await updateEnrollment(id, formData);
      const data = await getEnrollments(); // Refresh the user list after creating a career
      setEnrollmentsState(data);
    } catch (error) {
      setErrorState(error);
    }
  };

  return (
    <>
    {
      !enrollmentsState.length > 0 ? <h1>Cargando cursadas...</h1> :
      <Enrollments enrollments={enrollmentsState} subjects={subjectsState} onAdd={handleCreateSubmit} onUpdate={handleUpdateSubmit}/>
    }
    </>
  )
}

export default EnrollmentsContainer