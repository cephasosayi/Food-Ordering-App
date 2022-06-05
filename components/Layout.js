import React from 'react'
import Featured from './Featured'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div >
      {/* <Featured /> */}
        <main >
            {children}
        </main>
    </div>
    <Footer/>

    </>
  )
}

export default Layout