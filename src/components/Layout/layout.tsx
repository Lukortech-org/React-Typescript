import CustomNavbar from "../Navbar/customNavbar"

import { Outlet } from "react-router-dom"

import React from "react"

const Layout = () => {
  return (
    <>
      <div className="ImageBgc">
        <CustomNavbar />
      </div>

      <Outlet />
    </>
  )
}

export default Layout
