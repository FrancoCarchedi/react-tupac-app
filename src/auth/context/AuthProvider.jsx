import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'
import axios from 'axios'

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user: user
  }
}

const AuthProvider = ({children}) => {

  const [ authState, dispatch ] = useReducer( authReducer, {}, init );

  const login = async ( username, password ) => {

    const userToLogin = { username, password };
    console.log(userToLogin)

    try {
      const login = await axios.post('https://localhost:7157/api/auth/login', userToLogin);

      const token = {
        token: login.data.token
      }

      const getUser = await axios.post('https://localhost:7157/api/auth/profile', token);

      const action = {
        type: types.login,
        payload: getUser.data
      };

      localStorage.setItem('user', JSON.stringify(getUser.data));
      dispatch(action);

      return { success: true };  // Indicar éxito
    } catch (error) {
      return { success: false, message: error.message };  // Indicar error
    }
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type: types.logout,
    }
    dispatch(action)
  }


  return (
    <AuthContext.Provider value={{ 
      ...authState,
      login: login,
      logout: logout
     }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider