import FilmContinue from "../components/filmPageComp/film-continue"
import HeroFilm from "../components/filmPageComp/heroFilm"
import PersembahanChill from "../components/filmPageComp/persembahanChill"

const FilmPage = () => {
    return (
      <div className="flex flex-col w-screen h-full bg-black/90">
          <HeroFilm/>
          <FilmContinue/>
          <PersembahanChill/>
        </div>
    )
}

export default FilmPage