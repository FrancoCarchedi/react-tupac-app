import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
      <div className="container d-flex flex-column justify-content-center py-5 flex-grow-1">
      {children}
      </div>
    <Footer/>
    </>
  )
}

export default Layout