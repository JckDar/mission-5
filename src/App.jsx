import { Routes,Route } from "react-router"

import HomePage from "./pages/homePages"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/registerPage"


const App = () => {
  return (
    <Routes>
      <Route path="homepage" element={<HomePage/>} />
      <Route index element={<LoginPage/>} />
      <Route path='register' element={<RegisterPage/>} />
    </Routes>
  )
}

export default App