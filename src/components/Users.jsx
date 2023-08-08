import React from 'react'

const Users = ({users = ''}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Correo electrónico</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => {
          return (
            <tr key={u.usuarioId}>
            <th scope="row">{u.usuarioId}</th>
            <td>{u.nombre}</td>
            <td>{u.apellido}</td>
            <td>{u.email}</td>
            <td className="d-flex gap-2">
            <button type="button" className="btn btn-info btn-sm"><i class="bi bi-eye"></i></button>
            <button type="button" className="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
            </td>
          </tr>
        )
        })} 
      </tbody>
    </table>
  )
}

export default Users