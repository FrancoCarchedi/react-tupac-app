import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";

const Users = ({users = '', onDelete = () => {}, onAdd = () => {}}) => {

  const [open, setOpen] = useState(false)
  const [userToLoad, setUserToLoad] = useState({
    nombre: "",
    apellido: "",
    nombreUsuario: "",
    email: ""
  })

  return (
    <>
    <table className="table align-middle caption-top">
      <caption>Lista de usuarios</caption>
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
            <Link to={`${u.usuarioId}`}>
            <button type="button" className="btn btn-info btn-sm"><i className="bi bi-eye"></i></button>
            </Link>
            <button type="button" className="btn btn-danger btn-sm" onClick={() => onDelete(u.usuarioId)}><i className="bi bi-trash"></i></button>
            </td>
          </tr>
        )
        })} 
      </tbody>
    </table>

    <div className={`modal ${open == true? `d-flex` : `d-none`}`} tabIndex="-1">
      <div className="modal-dialog w-100">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar usuario</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setOpen(false)}></button>
          </div>
          <div className="modal-body">

          <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              value={userToLoad.nombre}
              onChange={(e) => setUserToLoad({ ...userToLoad, nombre: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              value={userToLoad.apellido}
              onChange={(e) => setUserToLoad({ ...userToLoad, apellido: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={userToLoad.email}
              onChange={(e) => setUserToLoad({ ...userToLoad, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nombreUsuario" className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="nombreUsuario"
              value={userToLoad.nombreUsuario}
              onChange={(e) => setUserToLoad({ ...userToLoad, nombreUsuario: e.target.value })}
            />
          </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setOpen(false)}>Cancelar</button>
            <button type="button" disabled={Object.values(userToLoad).some(property => property === "")} className="btn btn-primary" onClick={() => {onAdd(userToLoad); setOpen(false);}}>Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>Agregar usuario</button>
    </>
  )
}

export default Users