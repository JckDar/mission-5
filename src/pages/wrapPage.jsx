import { Outlet } from "react-router"
import NavBar from "../components/homeComp/navBar"

const WrapPage = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export default WrapPage