import React, { useState } from 'react'

const ResetPage = () => {
  const [email, setEmail] = useState();

  const onSend = (email) => {

    alert(`El usuario ${email} ha solicitado un cambio de contraseña`)
  }

  return (
    <div className="d-flex justify-content-center w-100">
      <form className="d-flex flex-column gap-4 w-25">
        <h1 className="h3 text-center">Recuperar contraseña</h1>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Correo electrónico</label>
        </div>

        <div className="d-grid gap-2 mx-auto">
          <button className="btn btn-primary py-2 px-4" onClick={ () => onSend("Franco") }>Enviar código</button>
        </div>
      </form>
    </div>
  )
}

export default ResetPage