import "./layout.css"

import CustomNavbar from "../Navbar/customNavbar"
import { Outlet } from "react-router-dom"

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
