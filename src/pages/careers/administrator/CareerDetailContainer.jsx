import React, { useEffect, useState } from 'react'
import CareerDetail from './CareerDetail'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CareerDetailContainer = () => {

  const [career, setCareer] = useState({
    data: {},
    loading: true,
  })

  const {id} = useParams();

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get(`https://localhost:7157/api/carreras/${id}`)
    .then(function (response) {
      // handle success
      setCareer({data: response.data, loading: false})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, [])

  return (
    <>
      <CareerDetail career={career.data}/>
    </>
  )
}

export default CareerDetailContainer