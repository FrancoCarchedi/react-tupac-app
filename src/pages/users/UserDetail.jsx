import React, { useState } from 'react'

const UserDetail = ({ user = {}, onUpdate = () => {} }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    userName: '',
    file: null,
  });
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);

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
    onUpdate(data);
    setModalUpdateOpen(false);
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      userName: '',
      file: null
    });
  };

  return (
    <>
      <div className="rounded w-50 border m-auto">
        <div className="container border-bottom">
          <div className="row p-3 mw-75 justify-content-between">
            <div className="col-8 text-start">
              <h3 className="mb-0">Información del usuario</h3>
            </div>
            <div className="col-4 text-end">
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalUpdateOpen(true)}>Editar</button>
            </div>
          </div>
        </div>
        <div className="container border-bottom">
          <div className="row p-3 mw-75 justify-content-between align-items-center">
            <div className="col-4 text-start">
              <span className="text-body-tertiary">Foto</span>
            </div>
            <div className="col-8 text-start">
              <img src={user.foto} alt={user.nombre} width={100} height={100} className="rounded-circle"/>
            </div>
          </div>
        </div>
        <div className="container border-bottom">
          <div className="row p-3 mw-75 justify-content-between">
            <div className="col-4 text-start">
              <span className="text-body-tertiary">Nombre</span>
            </div>
            <div className="col-8 text-start">
              <p className="mb-0">{ user.nombre }</p>
            </div>
          </div>
        </div>
        <div className="container border-bottom">
          <div className="row p-3 mw-75 justify-content-between">
            <div className="col-4 text-start">
              <span className="text-body-tertiary">Apellido</span>
            </div>
            <div className="col-8 text-start">
              <p className="mb-0">{ user.apellido }</p>
            </div>
          </div>
        </div>
        <div className="container border-bottom">
          <div className="row p-3 mw-75 justify-content-between">
            <div className="col-4 text-start">
              <span className="text-body-tertiary">Nombre de usuario</span>
            </div>
            <div className="col-8 text-start">
              <p className="mb-0">{ user.username }</p>
            </div>
          </div>
        </div>
        <div className="container border-bottom">
          <div className="row p-3 mw-75 justify-content-between">
            <div className="col-4 text-start">
              <span className="text-body-tertiary">Correo electrónico</span>
            </div>
            <div className="col-8 text-start">
              <p className="mb-0">{ user.email }</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para crear usuario */}
      <div className={`modal ${modalUpdateOpen == true? `d-flex` : `d-none`}`} tabIndex="-1">
        <div className="modal-dialog w-100">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modificar usuario</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalUpdateOpen(false)}></button>
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

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setModalUpdateOpen(false)}>Cancelar</button>
              <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetail