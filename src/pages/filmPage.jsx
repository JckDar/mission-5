import FilmContinue from "../components/filmPageComp/film-continue"
import FilmTrend from "../components/filmPageComp/filmTrend"
import HeroFilm from "../components/filmPageComp/heroFilm"
import PersembahanChill from "../components/filmPageComp/persembahanChill"
import FilmRilisBaru from "../components/filmPageComp/rilisBaru"
import TopRatingFilm from "../components/filmPageComp/topReting"

const FilmPage = () => {
    return (
      <div className="flex scroll-smooth flex-col w-screen h-full bg-black/90">
          <HeroFilm/>
          <FilmContinue/>
          <PersembahanChill/>
          <TopRatingFilm />
          <FilmTrend/>
          <FilmRilisBaru/>
        </div>
    )
}

export default FilmPage