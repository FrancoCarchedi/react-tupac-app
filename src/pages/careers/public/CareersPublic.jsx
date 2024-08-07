import { useState, useEffect } from "react";
import { getCareers } from "../../../services/career/getCareers";

const CareersPublic = () => {
  const [careersState, setCareersState] = useState([]);
  const [errorState, setErrorState] = useState("");
  console.log(careersState)

  // GET USERS CON WEBAPI

  useEffect(() => {
    getCareers()
      .then(response => {
        setCareersState(response);
      })
      .catch(error => {
        setErrorState(error)
      })
  }, []);
  
  return (
    <>
      <div className="mb-5">
        <h1 >Carreras de posgrado</h1>
        <p>Explora nuestra oferta académica, y sus planes de estudio.</p>
      </div>
      <div className="d-flex gap-4">
        { careersState.map( (c) => (
          <div key={c.carreraId} className="card" style={{ width: '18rem' }}>
            <img src={ c.portada } className="card-img-top" alt={ c.nombre } />
            <div className="card-body">
              <h5 className="card-title">{ c.nombre }</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Duración: { c.duracion } años</h6>
              <p className="card-text truncate">{ c.descripcion }</p>
              <div className="text-end">
                <a href={`/careers/${ c.slug }`} className="btn btn-primary">Ver detalle</a>
              </div>
            </div>
          </div>
        )
        )}
      </div>
    </>
  ); 
}

export default CareersPublic