import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import makeServer from "./server"

export default function App() {
  makeServer()
  fetch("/api/users")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App />)
