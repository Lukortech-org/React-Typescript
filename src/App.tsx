import { Auth, Home, Table } from "./pages"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/layout"
import { CssBaseline } from "@mui/material"
import React from "react"

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="table" element={<Table />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
