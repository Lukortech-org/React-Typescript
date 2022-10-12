import "./layout.css"

import { ThemeProvider, createTheme } from "@mui/material/styles"

import CustomContainer from "../Navbar/customContainer"
import CustomNavbar from "../Navbar/customNavbar"
import { Outlet } from "react-router-dom"
import React from "react"
import Section from "../section/section"

const theme = createTheme({
  palette: {
    primary: {
      main: "#cce5ff",
    },
  },
})

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Section>
          <div>
            <CustomNavbar />

            <CustomContainer />
          </div>
        </Section>
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export default Layout
