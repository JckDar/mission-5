import { Routes,Route } from "react-router"

import HomePage from "./pages/homePages"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/registerPage"
import FilmPage from "./pages/filmPage"
import WrapPage from "./pages/wrapPage"
import DaftarSaya from "./pages/daftarSaya"


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<WrapPage/>}>
        <Route path="homepage" element={<HomePage/>}/>
        <Route path="film" element={<FilmPage />}/>
        <Route path="daftarsaya" element={<DaftarSaya />}/>
      </Route>

      <Route index element={<LoginPage/>} />
      <Route path='register' element={<RegisterPage/>} />

    </Routes>
  )
}

export default App