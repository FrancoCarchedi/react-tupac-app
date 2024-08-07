import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../../../components/NotFound';
import axios from 'axios';

const CareerPublic = () => {

  const { slug } = useParams();
  const [careerDetailState, setCareerDetailState] = useState({
    data: {},
    loading: true
  })
  const [error, setError] = useState("");

  console.log(careerDetailState)

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get(`https://localhost:7157/api/carreras/slug/${slug}`)
    .then(function (response) {
      // handle success
      setCareerDetailState({data: response.data, loading: false})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setError(error)
    })
  }, [])

  if (error) {
    return <NotFound />
  }
  else {
    return (
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={careerDetailState.data.portada} className="img-fluid rounded-start" alt={careerDetailState.data.nombre} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title mb-3">{careerDetailState.data.nombre}</h4>
                <p className="card-text">{careerDetailState.data.descripcion}</p>
                <p className="card-text"><small className="text-body-secondary">Duración: {careerDetailState.data.duracion} años</small></p>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src={careerDetailState.data.plan}
          width="100%"
          height="500px"
          frameBorder="0"
        />
      </div>
    )
  }
}

export default CareerPublic