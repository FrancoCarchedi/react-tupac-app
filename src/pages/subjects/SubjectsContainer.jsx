import React, { useEffect, useState } from 'react'
import { createSubject } from '../../services/subject/createSubject';
import { getSubjects } from '../../services/subject/getSubjets';
import Subjects from './Subjects';
import { updateSubject } from '../../services/subject/updateSubject';

const SubjectsContainer = () => {
  const [subjectsState, setSubjectsState] = useState([]);
  const [errorState, setErrorState] = useState("");

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
      await createSubject(formData);
      const data = await getSubjects(); // Refresh the user list after creating a career
      setSubjectsState(data);
    } catch (error) {
      setErrorState(error);
    }
  };

  const handleUpdateSubmit = async (id, formData) => {
    try {
      await updateSubject(id, formData);
      const data = await getSubjects(); // Refresh the user list after creating a career
      setSubjectsState(data);
    } catch (error) {
      setErrorState(error);
    }
  };

  return (
    <>
    {
      !subjectsState.length > 0 ? <h1>Cargando materias...</h1> :
      <Subjects subjects={subjectsState} onAdd={handleCreateSubmit} onUpdate={handleUpdateSubmit}/>
    }
    </>
  )
}

export default SubjectsContainer