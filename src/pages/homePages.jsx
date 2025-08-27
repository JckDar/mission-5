import NavBar from "../components/homeComp/navBar"
import Hero from "../components/homeComp/hero"
import Continue from "../components/homeComp/continue"
import TopRating from "../components/homeComp/topRating"
import TrendFilm from "../components/homeComp/trendFilm"
import FilmBaru from "../components/homeComp/FilmBaru"
import Footer from "../components/homeComp/footer"


const HomePage = () => {
    return (
      <div className="flex flex-col w-screen h-full bg-black/90">
       <NavBar />
       <Hero />
       <Continue />
       <TopRating />
       <TrendFilm />
       <FilmBaru />
       <Footer />
      </div>

    )}

export default HomePage