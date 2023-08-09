import React from 'react'

const UserDetail = ({user = {}, onEnrollment = () => {}}) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="mb-3 row">
            <label htmlFor="nombre" className="col-4 col-form-label"><strong>Nombre:</strong></label>
            <div className="col-8">
            <input type="text" className="form-control-plaintext" id="nombre" value={user.nombre} readOnly onChange={e => setFirstName(e.target.value)}/>
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="nombre" className="col-4 col-form-label"><strong>Apellido:</strong></label>
            <div className="col-8">
            <input type="text" className="form-control-plaintext" id="nombre" value={user.apellido} readOnly/>
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="nombre" className="col-4 col-form-label"><strong>Usuario:</strong></label>
            <div className="col-8">
            <input type="text" className="form-control-plaintext" id="nombre" value={user.nombreUsuario} readOnly/>
            </div>
          </div>

          <div className="mb-3 row">
            <label for="nombre" className="col-4 col-form-label"><strong>Correo electrónico:</strong></label>
            <div className="col-8">
            <input type="email" className="form-control-plaintext" id="nombre" value={user.email} readOnly/>
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-4 col-form-label"><strong>Cursadas</strong></label>
            <div className="col-8">
            {user.cursadas.map((c) => {
              console.log(c);
              return (
                <div className="d-flex">
                  <input type="text" className="form-control-plaintext" value={`${c.materia.nombre} ${c.materia.calificacion != undefined? `Nota: ${c.materia.calificacion}` : ''}`} readOnly/>
                </div>
              )
            })}
            </div>
          </div>

          <button type="button" className="btn btn-primary" onClick={() => onEnrollment}>Agregar usuario</button>
      </div>
      </div>
    </div>
  )
}

export default UserDetail