import lanjutFilm from "../../store/listLanjutFilm"
import useModal from "../../store/useModal"
import FilmModal from "../filmModal"

const FilmContinue = () => {
  const isOpen = useModal((state)=> (state.isOpen))
  const setIsOpen = useModal((state)=> (state.setIsOpen))
  const listLanjutFilm = lanjutFilm

    return (
        <div className="w-screen h-60 md:h-80 font-poppins pl-8 pr-8 md:pl-16 md:pr-16">
            <h1 className="text-2xl md:text-4xl text-white mb-6 md:mb-12">Melanjutkan Nonton</h1>
            <div  
            className="flex flex-row gap-3 md:gap-4 max-w-screen md:h-48 overflow-x-auto overflow-y-hidden scroll-smooth" >
                <button className="hidden md:block md:absolute text-white bg-gray-700/90 border-1 border-white rounded-4xl text-2xl md:size-14 self-center -ml-8 z-20 shadow-2xl shadow-black hover:scale-110">
                    ◀︎
                </button>
                {listLanjutFilm.map((film, index) => (
                    <div className="shrink-0 relative md:w-84 md:h-48 content-center justify-center "
                    key={index}
                    onClick={()=>(
                      setIsOpen(film)
                    )}>
                    <img src={film.poster}
                     className=" shrink-0 w-76 h-40 m-auto md:mb-4 z-0 hover:scale-105" />
                     <h5 className="absolute w-76 md:w-84 text-left pl-4 md:pl-8 -mt-10 md:-mt-12 text-white font-light">
                       {film.name}
                    </h5>
                    <p className="absolute w-76 md:w-84 text-right pr-4 md:pr-8 -mt-10 md:-mt-12 text-white font-light">{film.star}</p>
                </div>
                ))}
               
                <button className="hidden md:block absolute text-white bg-gray-700/90 border-1 border-white rounded-4xl text-2xl md:size-14 self-center right-4 z-20 shadow-2xl shadow-black hover:scale-110">
                    ▶︎
                </button>
                {isOpen && <FilmModal/>}
            </div>
        </div>
    )
}

export default FilmContinue