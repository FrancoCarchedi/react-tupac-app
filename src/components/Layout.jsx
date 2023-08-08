import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
      <div className="container py-5 flex-shrink-0">
      {children}
      </div>
    <Footer/>
    </>
  )
}

export default Layout