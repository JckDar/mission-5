import { useRef } from "react"
const Continue = () => {
  const containerRef = useRef(null)
  const scrollLeft = () => {
    containerRef.current.scrollby({ left: 200, behavior: "smooth" })
  }
  const scrollRight = () => {
    containerRef.current.scrollby({ left: -200, behavior: "smooth" })
  }

    return (
        <div className="w-screen h-60 md:h-80 font-poppins pl-8 pr-8 md:pl-16 md:pr-16">
            <h1 className="text-2xl md:text-4xl text-white mb-6 md:mb-12">Melanjutkan Nonton</h1>
            <div ref={containerRef} 
            className="flex flex-row gap-3 md:gap-4 max-w-screen md:h-48 overflow-x-auto overflow-y-hidden scroll-smooth" >
                <button className="hidden md:block md:absolute text-white bg-gray-700/90 border-1 border-white rounded-4xl text-2xl md:size-14 self-center -ml-8 z-20 shadow-2xl shadow-black hover:scale-110"
                onClick={scrollLeft}>
                    ◀︎
                </button>
                <div className="shrink-0 relative md:w-84 md:h-48 content-center justify-center">
                    <img src="../../../src/img/con-film/lanjut1.png"
                     className=" shrink-0 w-76 h-40 m-auto md:mb-4 z-0 hover:scale-105" />
                     <h5 className="absolute w-76 md:w-84 text-left pl-4 md:pl-8 -mt-10 md:-mt-12 text-white font-light">
                        Don't Look Up
                    </h5>
                    <p className="absolute w-76 md:w-84 text-right pr-4 md:pr-8 -mt-10 md:-mt-12 text-white font-light">☆ 4.5/5</p>
                </div>
                <div className=" shrink-0 relative md:w-84 md:h-48 content-center justify-center">
                    <img src="../../../src/img/con-film/lanjut2.png"
                     className=" shrink-0 w-76 h-40 m-auto md:mb-4 z- hover:scale-105" />
                     <h5 className="absolute w-76 md:w-84 text-left pl-4 md:pl-8 -mt-10 md:-mt-12 text-white font-light">
                        The Batman
                    </h5>
                    <p className="absolute w-76 md:w-84 text-right pr-4 md:pr-8 -mt-10 md:-mt-12 text-white font-light">☆ 4.2/5</p>
                </div>
                <div className=" shrink-0 relative md:w-84 md:h-48 content-center justify-center">
                    <img src="../../../src/img/con-film/lanjut3.png"
                     className=" shrink-0 w-76 h-40 m-auto md:mb-4 z- hover:scale-105" />
                     <h5 className="absolute w-76 md:w-84 text-left pl-4 md:pl-8 -mt-10 md:-mt-12 text-white font-light">
                        Blue Lock
                    </h5>
                    <p className="absolute w-76 md:w-84 text-right pr-4 md:pr-8 -mt-10 md:-mt-12 text-white font-light">☆ 4.6/5</p>
                </div>
                <div className=" shrink-0 relative md:w-84 md:h-48 content-center justify-center">
                    <img src="../../../src/img/con-film/lanjut4.png"
                     className=" shrink-0 w-76 h-40 m-auto md:mb-4 z- hover:scale-105" />
                     <h5 className="absolute w-76 md:w-84 text-left pl-4 md:pl-8 -mt-10 md:-mt-12 text-white font-light">
                        A Man Called Otto
                    </h5>
                    <p className="absolute w-76 md:w-84 text-right pr-4 md:pr-8 -mt-10 md:-mt-12 text-white font-light">☆ 4.4/5</p>
                </div>
                <button className="hidden md:block absolute text-white bg-gray-700/90 border-1 border-white rounded-4xl text-2xl md:size-14 self-center right-4 z-20 shadow-2xl shadow-black hover:scale-110"
                onClick={scrollRight}>
                    ▶︎
                </button>
            </div>
        </div>
    )
}

export default Continue