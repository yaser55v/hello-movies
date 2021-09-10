import React from "react"
import Home from "../components/Home"
import List from "../components/List"
import Navbar from "../components/Navbar"

const index = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Home />
      <List />
    </div>
  )
}

export default index
