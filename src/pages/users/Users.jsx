import React from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

const Users = ({ users = [], roles = [], onDelete = () => {}, onAdd = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    userName: '',
    password: '',
    roles: [],
    file: null
  });
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [modalCreateOpen, setModalCreateOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  const handleFormChange  = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    console.log(data.entries)
    onAdd(data);
    setModalCreateOpen(false);
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      userName: '',
      password: '',
      roles: [],
      file: null
    });
  };

  const filteredData = users.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 5;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);


  return (
    <>
    <div className="d-flex justify-content-between mb-3">
      <div className='input-group w-auto'>
        <span className="input-group-text"><i className="bi bi-search"></i></span>
        <input
          type="text"
          id="inputSearch"
          className="form-control"
          placeholder="Buscar..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={() => setModalCreateOpen(true)}>Agregar usuario</button>
    </div>

    <div className="flex-grow-1">
    <table className="table align-middle caption-top">
      <caption>Lista de usuarios</caption>
      <thead>
        <tr>
          <th scope="col">Id de usuario</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Usuario</th>
          <th scope="col">Correo electrónico</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {paginatedData.map((u) => {
          return (
            <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.nombre}</td>
            <td>{u.apellido}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td className="d-flex gap-2">
            <Link to={`${u.id}`}>
              <button type="button" className="btn btn-info btn-sm">
                Ver detalle
              </button>
            </Link>
            <button type="button" className="btn btn-danger btn-sm" onClick={() => {setModalDeleteOpen(true); setUserIdToDelete(u.id)}}><i className="bi bi-trash"></i></button>
            </td>
          </tr>
        )
        })} 
      </tbody>
    </table>
    </div>

    {/* Modal para eliminar */}
    <div className={`modal ${modalDeleteOpen == true? `d-flex` : `d-none`}`} tabIndex="-1">
      <div className="modal-dialog w-100">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Eliminar usuario</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalDeleteOpen(false)}></button>
          </div>
          <div className="modal-body">
            <p>Esta acción eliminará el usuario {userIdToDelete}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setModalDeleteOpen(false)}>Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={() => {onDelete(userIdToDelete); setModalDeleteOpen(false)}}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>

    {/* Modal para crear usuario */}
    <div className={`modal ${modalCreateOpen == true? `d-flex` : `d-none`}`} tabIndex="-1">
      <div className="modal-dialog w-100">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar usuario</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalCreateOpen(false)}></button>
          </div>
          <div className="modal-body">

          <div className='d-flex gap-2'>
            <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleFormChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
            />
          </div>

          <div className='d-flex gap-2'>
            <div className="mb-3">
              <label htmlFor="nombreUsuario" className="form-label">Usuario</label>
              <input
                type="text"
                className="form-control"
                id="nombreUsuario"
                name="userName"
                value={formData.userName}
                onChange={handleFormChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="nombreUsuario" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="foto" className="form-label">Foto</label>
            <input
              type="file"
              className="form-control"
              id="file"
              name="file"
              onChange={handleFormChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="roles" className="form-label">Roles</label>
            <select 
              multiple
              className="form-select"
              aria-label="Roles Select" 
              name="rol"
              value={formData.roles}
              onChange={(e) => {
                const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
                setFormData({ ...formData, roles: selectedOptions });
              }}>
              {roles.map(r => (
                <option key={r.id} value={r.name}>{r.name}</option>
              ))}
            </select>
          </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setOpen(false)}>Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Agregar</button>
          </div>
        </div>
      </div>
    </div>

    {/* paginación va aca */}

    <nav aria-label="Page navigation" className="">
      <ReactPaginate
        containerClassName={'pagination justify-content-center'}
        activeClassName={'active'}
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        nextLabel={"Siguiente"}
        previousLabel={"Anterior"}
        pageCount={Math.ceil(filteredData.length / perPage)}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        />
    </nav>
    </>
  )
}

export default Users