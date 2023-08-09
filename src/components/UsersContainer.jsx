import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Users from './Users'

const UsersContainer = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    axios.get('https://localhost:7157/api/usuarios')
    .then(function (response) {
      // handle success
      setUsers(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error.response.data.title);
    })
  }

  const addUser = (user) => {
    axios.post('https://localhost:7157/api/usuarios', user)
    .then(function (response) {
      // handle success
      getUsers();
    })
    .catch(function (error) {
      // handle error
      console.log(error.message);
    })
  }

  const deleteUser = (id) => {
    axios.delete(`https://localhost:7157/api/usuarios/${id}`)
    .then(function (response) {
      // handle success
      const newUsers = users.filter(user => user.usuarioId != id)
      setUsers(newUsers);
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  return (
    <Users users={users} onDelete={deleteUser} onAdd={addUser}/>
  )
}

export default UsersContainer