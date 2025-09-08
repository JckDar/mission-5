import usedaftarsaya from "../../store/useDaftarSaya"
import useModal from "../../store/useModal"
const ConDaftarSaya = () => {
    const listDaftarSaya = usedaftarsaya((state)=>(state.listDaftarSaya))
    const isOpen = useModal((state)=> (state.isOpen))
    const setIsOpen = useModal((state)=> (state.setIsOpen))
    return(
        <div>
          {listDaftarSaya.map((film,index) => (
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
        </div>
    )
}

export default ConDaftarSaya