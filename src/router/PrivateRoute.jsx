import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, path, to }) => {

  const { logged } = useContext( AuthContext );

  if (logged) {
    return children;
  }
  else {
    console.log("No estas logeado, es una ruta privada")
    return <Navigate to={"/login"}/>
  }
}
