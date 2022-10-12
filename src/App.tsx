import { Auth, Home } from "./pages"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import { CssBaseline } from "@mui/material"
import Layout from "./components/Layout/layout"
import React from "react"
import makeServer from "./server"

const theme = createTheme({
  palette: {
    primary: {
      main: "#cce5ff",
    },
  },
})

const App: React.FC = () => {
  makeServer()
  fetch("/api/users")
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="auth" element={<Auth />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
