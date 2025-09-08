import useModal from "../../store/useModal"
import topRating from "../../store/listTopRating"
import LabelEpisode from "../labelEpisode"
import FilmModal from "../filmModal"

const TopRatingFilm = () => {

    const listTopRating = topRating
    const isOpen = useModal((state)=> (state.isOpen))
    const setIsOpen = useModal((state)=> (state.setIsOpen))

    return (
    <div className="w-screen md:min-h-96 pl-8 pr-8 mb-8 md:pl-16 md:pr-16 md:mb-16">
        <h1 className="text-white text-2xl md:text-4xl mb-6 md:mb-8">Top Rating Film Hari Ini</h1>
        <div className="flex flex-row max-w-screen h-72 md:h-80 gap-4 md:gap-7 pl-6 pr-6 md:pl-8 md:pr-8 m-auto overflow-y-hidden overflow-x-auto">
            <button className="hidden md:block absolute text-white bg-gray-700/90 border-1 border-white rounded-4xl text-2xl size-14 self-center -ml-8 z-20 shadow-2xl shadow-black hover:scale-110">
                ◀︎
            </button>
            {listTopRating.map((film,index) => (
                 <div key={index}
                  className="shrink-0 relative h-72 w-52 md:h-80 md:w-56 hover:scale-95"
                  onClick={() => (
                    setIsOpen(film)
                  )}>
                 <img src={film.image}
                  className="shrink-0 h-72 w-48 md:h-80 md:w-56"/>
                {film.name === 'Suzume' && (<LabelEpisode/>) }
                {film.name === 'All Of Us' && (<LabelEpisode/>) }
             </div>
            ))}
            <button className="hidden md:block absolute text-white bg-gray-700/90 border-1 border-white rounded-4xl text-2xl md:size-14 self-center right-12 z-20 shadow-2xl shadow-black hover:scale-110">
                ▶︎
            </button>
            {isOpen && (<FilmModal />)}
        </div>
    </div>
    )
}

export default TopRatingFilm 