import useModal from "../store/useModal"
const FilmModal = () => {
    const isOpen = useModal((state) => (state.isOpen))
    const closeModal = useModal ((state)=> (state.closeModal))
    return (

    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm justify-center px-6 items-center flex z-50 font-poppins"
    onClick={closeModal}>
        <div className="bg-black backdrop-blur-2xl rounded-4xl max-w-2xl w-full max-h-[90vh] relative  "
        onClick={(e)=>(e.stopPropagation())}>
            <img src={isOpen.poster} className="w-full"/>
            <div className="absolute min-h-12 w-full bg-linear-to-t from-black via-black/70 via-50% to-black/0 -mt-32 py-8 md:-mt-38 md:py-8">
                <h1 className="text-white ml-8 md:ml-14 text-2xl md:text-4xl font-medium">{isOpen.name}</h1>
                <div>
                    <button className="bg-blue-600 text-white text-md md:text-md px-4 py-1 md:px-8 md:py-2 rounded-4xl ml-8 mt-3 md:ml-14 md:mt-4 hover:bg-blue-800">
                        Mulai
                    </button>
                    <button className="border-1 border-white rounded-full text-white text-md md:text-lg px-4 md:px-4 py-1 md:py-2 ml-2 md:ml-4">
                        +
                    </button>
                </div>
            </div>
            <div className="flex flex-col min-h-40">
                <p className="text-gray-400 w-full mx-6 mt-6 md:mx-8 md:mt-8">{isOpen.year} {isOpen.duration}</p>
                <article className="text-white mx-6 mt-1 mb-10 md:mx-8 md:mt-2 md:mb-12 text-xs md:text-lg md:font-light">
                    {isOpen.desc}
                </article>
            </div>
        </div>
    </div>
    )
}

export default FilmModal