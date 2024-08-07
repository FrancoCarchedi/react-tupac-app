import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './components/Home'
import Layout from './components/Layout'
import UsersContainer from './pages/users/UsersContainer'
import UserDetailContainer from './pages/users/UserDetailContainer'
import AuthProvider from './auth/context/AuthProvider'
import LoginPage from './auth/pages/LoginPage'
import AppRouter from './router/AppRouter'

function App() {

  return (
    <>
    <AuthProvider>
      
      <BrowserRouter>
        <Layout>
          <AppRouter/>
            {/* <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element={<LoginPage/>}/>
            <Route exact path='/users' element={<UsersContainer/>}/>
            <Route exact path='/users/:id' element={<UserDetailContainer/>}/> */}
        </Layout>
      </BrowserRouter>
      
    </AuthProvider>
    </>
  )
}

export default App
