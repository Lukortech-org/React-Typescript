import { BrowserRouter, Routes, Route } from "react-router-dom"
import makeServer from "./server"
import App from "./App"
import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
