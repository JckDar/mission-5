import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const usedaftarsaya = create(persist((set) => ({
    listDaftarSaya : [],
    setListDaftarSaya : (film)=>set((state) => (
        {listDaftarSaya: [film, ...state.listDaftarSaya]}
    )),
    removeFilm : (name)=>set((state)=>(
        {listDaftarSaya : state.listDaftarSaya.filter((f)=> f.name !== name)}
    ))

}),{
    name: 'daftarFilmSaya',
    storage: createJSONStorage(()=> (localStorage))
    }
))

export default usedaftarsaya