import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-900">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
