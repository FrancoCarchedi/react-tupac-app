import React, { useState, useEffect } from 'react';
import Users from './Users';
import { getUsers } from '../../services/user/getUsers';
import { deleteUser } from '../../services/user/deleteUser';
import { createUser } from '../../services/user/createUser';
import { getRoles } from '../../services/roles/getRoles';

const UsersContainer = () => {
  const [usersState, setUsersState] = useState([]);
  const [rolesState, setRolesState] = useState([]);
  const [errorState, setErrorState] = useState("");
  const [errorCreateState, setErrorCreateState] = useState("");
  console.log(errorCreateState)

  useEffect(() => {
    getUsers()
      .then(response => {
        setUsersState(response);
      })
      .catch(error => {
        setErrorState(error)
      })
  }, []);

  useEffect(() => {
    getRoles()
      .then(response => {
        setRolesState(response);
      })
      .catch(error => {
        setErrorState(error)
      })
  }, []);

  const handleSubmit = async (formData) => {
    try {
      await createUser(formData);
      const data = await getUsers(); // Refresh the user list after creating a user
      setUsersState(data);
    } catch (error) {
      setErrorCreateState(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsersState(usersState.filter(user => user.id !== id)); // Update the users list after deletion
    } catch (error) {
      console.log(error)
      setErrorState("Ocurrió un error al eliminar el usuario.");
    }
  };

  return (
    <>
      { !usersState.length > 0 ? <h1>Cargando usuarios...</h1> :
        <>
          <Users users={usersState} roles={rolesState} onDelete={handleDelete} onAdd={handleSubmit}/>
          { errorState && 
          <div class="alert alert-danger alert-dismissible fade show w-50" role="alert">
            { errorState }
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          }
        </>
      }
    </>
    
  )
}

export default UsersContainer