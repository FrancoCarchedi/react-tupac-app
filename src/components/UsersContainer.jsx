import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Users from './Users'

const UsersContainer = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get('https://localhost:44351/api/usuarios')
    .then(function (response) {
      // handle success
      setUsers(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, [])

  return (
    <Users users={users}/>
  )
}

export default UsersContainer