const HeroFilm = () => {
    return (
        <div className="content-end bg-[url(../../../src/img/film-page/bg-hero.png)] w-screen min-h-96 md:h-screen bg-cover bg-no-repeat mb-8">
          <div className="flex flex-col w-screen h-1/4 md:h-2/4">
          <div className="w-screen md:h-6/12 pr-8 pl-8 md:pr-16 md:pl-16 font-poppins">
            <h1 className="text-white text-2xl md:text-4xl font-medium">
              Avatar 3
            </h1>
            <p className="max-w-xl text-white text-sm md:text-lg font-light mt-4 md:mt-10 md:mb-8">
             "Avatar 3" melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Na'vi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi. </p>
          </div>
          <div className="w-screen h-1/12 md:h-2/12 pr-8 pl-8 md:pr-16 md:pl-16 mt-6 md:mt-8 font-poppins">
              <span className="bg-blue-800 text-white text-sm md:text-lg rounded-3xl pt-1 pb-1 pl-3 pr-3 md:pt-2 md:pb-2 md:pl-6 md:pr-6 hover:bg-gray-700">
                Mulai
              </span>
              <span 
                className="bg-gray-500 text-white text-sm md:text-lg rounded-3xl pt-1 pb-1 pl-3 pr-3 md:pt-2 md:pb-2 md:pl-6 md:pr-6 ml-2 md:ml-4 hover:bg-gray-700">
                 ℹ︎ Selengkapnya
              </span>
              <span 
                className="border-white border-1 text-sm md:text-lg text-white rounded-3xl pt-1 pb-1 pl-2 pr-2 md:pt-2 md:pb-2 md:pl-6 md:pr-6 ml-2 md:ml-4">
                 18+
              </span>
          </div>
          </div>
        </div>
    )
}

export default HeroFilm