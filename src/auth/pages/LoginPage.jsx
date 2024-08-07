import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [error, setError] = useState("");

  const { login, logout, logged } = useContext( AuthContext )
  const navigate = useNavigate();

  // Redirigir al usuario a la página de inicio si ya está logueado
  useEffect(() => {
    if (logged) {
      logout();
      navigate('/');
    }
  }, [logged, navigate, logout]);
  

  const onLogin = async (event) => {
    event.preventDefault();
    const result = await login(usernameState, passwordState);
    if (result.success) {
      navigate('/');  // Redirigir a la página de inicio después de iniciar sesión
    } else {
      setError(result.message);  // Mostrar mensaje de error
    }
  }

  return (
    <div className="d-flex justify-content-center w-100">
      <form className="d-flex flex-column gap-4 w-25" onSubmit={onLogin}>
        {/* <img className="mb-4 align-center" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
        <h1 className="h3 text-center">Iniciar sesión</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="form-floating">
          <input 
            type="string" 
            className="form-control" 
            id="floatingInput" 
            placeholder="Nombre de usuario"
            value={usernameState}
            onChange={evt => setUsernameState(evt.target.value)}
            />
          <label htmlFor="floatingInput">Usuario</label>
        </div>
        <div className="form-floating">
          <input 
            type="password" 
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={passwordState}
            onChange={evt => setPasswordState(evt.target.value)}
            />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>

        <div className="d-grid gap-2 mx-auto">
          <button className="btn btn-primary py-2 px-4" type="submit">Iniciar sesión</button>
          <a className="btn text-secondary" href="/password_reset">Olvidé mi contraseña</a>
        </div>
      </form>
    </div>
  )
}

export default LoginPage