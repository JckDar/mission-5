import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const usedaftarsaya = create(persist((set) => ({
    listDaftarSaya : [],
    setListDaftarSaya : (film)=>set((state) => (
        {listDaftarSaya: [film, ...state.listDaftarSaya]}
    )),
    removeFilm : (id)=>set((state)=>{
        const newList = [...state.listDaftarSaya]
        newList.splice(id,1)
        console.log(newList)
        console.log(id)
        return {
            listDaftarSaya : newList
        }
    })

}),{
    name: 'daftarFilmSaya',
    storage: createJSONStorage(()=> (localStorage))
    }
))

export default usedaftarsaya