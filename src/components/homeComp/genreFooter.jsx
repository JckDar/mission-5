import { useRef } from "react";

const GenreFooter = () => {
    const genreRef = useRef(null)
    const showGenre = () => {
        genreRef.current.classList.toggle('flex')
        genreRef.current.classList.toggle('hidden')
    }

    return (
        <div className="pl-4 pt-4 md:pl-8 md:pt-8 md:w-3/6">
                <h5 className="text-white text-lg font-medium md:text-lg md:font-semibold md:mt-8 mb-4 md:mb-4"
                onClick={showGenre}>
                    Genre
                </h5>
                <div className="hidden md:flex flex-col flex-wrap text-md text-white/60 md:h-36 md:w-4/5 gap-2 font-light mb-4"
                 ref={genreRef} >
                    <a href="#">Aksi</a>
                    <a href="#">Anak-anak</a>
                    <a href="#">Anime</a>
                    <a href="#">Britania</a>
                    <a href="#">Drama</a>
                    <a href="#">Fantasi Ilmiah & Fantasi</a>
                    <a href="#">Kejahatan</a>
                    <a href="#">Kdrama</a>
                    <a href="#">Komedi</a>
                    <a href="#">Petualangan</a>
                    <a href="#">Perang</a>
                    <a href="#">Romantis</a>
                    <a href="#">Sain & Alam</a>
                    <a href="#">Thriller</a>
                </div>
            </div>
    )
}
export default GenreFooter