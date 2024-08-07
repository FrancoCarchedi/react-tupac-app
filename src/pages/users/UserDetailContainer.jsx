import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserDetail from './UserDetail'
import axios from 'axios'
import { updateUser } from '../../services/user/updateUser'

const UserDetailContainer = () => {

  const [user, setUser] = useState({
    data: {},
    loading: true,
  })

  const [enrollment, setEnrollment] = useState({
    data: {},
    loading: true,
  })

  const {id} = useParams()

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get(`https://localhost:7157/api/usuarios/${id}`)
    .then(function (response) {
      // handle success
      setUser({data: response.data, loading: false})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, [])

  const handleSubmit = async (formData) => {
    try {
      await updateUser(id, formData);
      window.location.reload();
    } catch (error) {
      setErrorCreateState(error);
    }
  };

  return (
    <div>
    { user.loading == true?
    <div className="spinner-border">
      <span className="visually-hidden">Loading...</span>
    </div> :
    <UserDetail user={user.data} onUpdate={handleSubmit} /> }
    </div>
  )
}

export default UserDetailContainer