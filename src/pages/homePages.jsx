import NavBar from "../components/homeComp/navBar"
import Hero from "../components/homeComp/hero"
import Continue from "../components/homeComp/continue"
import TopRating from "../components/homeComp/topRating"
import TrendFilm from "../components/homeComp/trendFilm"
import FilmBaru from "../components/homeComp/FilmBaru"

const HomePage = () => {
    return (
      <div className="flex scroll-smooth flex-col w-screen h-full bg-black/90">
       <Hero />
       <Continue />
       <TopRating />
       <TrendFilm />
       <FilmBaru />
      </div>
    )}

export default HomePage