import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './components/Home'
import Layout from './components/Layout'
import UsersContainer from './components/UsersContainer'
import UserDetailContainer from './components/UserDetailContainer'

function App() {

  return (
    <>
    <Layout>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/users' element={<UsersContainer/>}/>
        <Route exact path='/users/:id' element={<UserDetailContainer/>}/>
        {/* <Route exact path='/*' element={<Navigate to="/"/>}/> */}
      </Routes>
    </BrowserRouter>
    </Layout>
    </>
  )
}

export default App
