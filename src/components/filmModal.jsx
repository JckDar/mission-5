import useModal from "../store/useModal"
const FilmModal = () => {
    const isOpen = useModal((state) => (state.isOpen))
    const closeModal = useModal ((state)=> (state.closeModal))
    return (

    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm justify-center items-center flex z-50"
    onClick={closeModal}>
        <div className="bg-black/80 backdrop-blur-2xl rounded-lg max-w-2xl w-full max-h-[90vh] relative  "
        onClick={(e)=>(e.stopPropagation())}>
            <img src={isOpen.poster} className="w-full"/>
            <article className="text-white md:mx-8 md:my-6 text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quaerat ea eius perspiciatis fugiat expedita doloremque atque quis minima itaque dolores, odit natus veniam quasi, dolor rem tempora amet optio!</article>
        </div>
    </div>
    )
}

export default FilmModal