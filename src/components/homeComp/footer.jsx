import GenreFooter from "./genreFooter"
import BantuanFooter from "./bantuanFooter"
import RightFooter from "./rightFooter"
const Footer = () => {

    return (
        <footer className="flex flex-col md:flex-row min-h-40 md:h-80 w-screen bg-black-/90 border-t-1 border-white/60 font-poppins">
            <RightFooter />
            <GenreFooter/>
            <BantuanFooter />
        </footer>
    )
}

export default Footer