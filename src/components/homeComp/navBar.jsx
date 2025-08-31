import { useNavigate } from "react-router"

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <nav className="flex flex-row w-screen h-14 justify-between bg-black/70 backdrop-blur-lg z-50 fixed">
            <div className="flex flex-row md:w-1/3 justify-between items-center md:p-2.5 font-poppins">
                <h1 className="text-3xl md:text-3xl font-monoton text-red-800 ml-3.5 md:ml-4">CHILL</h1>
                <span className="hidden md:flex md:text-md text-white font-light hover:text-red-500">Series</span>
                <span className="hidden md:flex md:text-md text-white font-light hover:text-red-500"
                 onClick={()=>{
                    navigate('/film')
                 }}>
                    Film
                </span>
                <span className="hidden md:flex md:text-md text-white font-light hover:text-red-500">Daftar Saya</span>
            </div>
            <div className="shrink-0 flex flex-row w-1/12 justify-evenly items-center p-1 md:p-2.5 font-poppins mr-4">
                <img 
                  className="size-8 rounded-4xl"
                  src="../../../src/img/admin.jpg" 
                  alt="" />
                <span className="text-md md:text-lg text-white font-light hover:text-red-500 md:mr-8">▾</span>
            </div>
            
        </nav>
    )
}

export default NavBar