import React, { useEffect, useState } from 'react'
import Careers from './Careers'
import { getCareers } from '../../../services/career/getCareers';
import { createCareer } from '../../../services/career/createCareer';
import { updateCareer } from '../../../services/career/updateCareer';

const CareersContainer = () => {
  const [careersState, setCareersState] = useState([]);
  const [errorState, setErrorState] = useState("");
  
  useEffect(() => {
    getCareers()
      .then(response => {
        setCareersState(response);
      })
      .catch(error => {
        setErrorState(error)
      })
  }, []);

  const handleCreateSubmit = async (formData) => {
    try {
      await createCareer(formData);
      const data = await getCareers(); // Refresh the user list after creating a career
      setCareersState(data);
    } catch (error) {
      setErrorState(error);
    }
  };

  const handleUpdateSubmit = async (id, formData) => {
    try {
      await updateCareer(id, formData);
      const data = await getCareers(); // Refresh the user list after creating a career
      setCareersState(data);
    } catch (error) {
      setErrorState(error);
    }
  };

  return (
    <>
    {
      !careersState.length > 0 ? <h1>Cargando carreras...</h1> :
      <Careers careers={careersState} onAdd={handleCreateSubmit} onUpdate={handleUpdateSubmit}/>
    }
    </>
  )
}

export default CareersContainer