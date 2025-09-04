import { Outlet } from "react-router"
import NavBar from "../components/homeComp/navBar"
import Footer from "../components/homeComp/footer"

const WrapPage = () => {
    return (
        <>
            <NavBar/>
                <Outlet/>
            <Footer/>
        </>
    )
}

export default WrapPage