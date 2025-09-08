import { create } from "zustand";

const usedaftarsaya = (create(set => ({
    listDaftarSaya : [],
    setListDaftarSaya : (film)=>set((state) => (
        {listDaftarSaya: [film, ...state.listDaftarSaya]}
    )),
    removeFilm : (name)=>set((state)=>{
        const newList = [...state.listDaftarSaya]
        newList.filter(film => film.name !== name)

        return {
            listDaftarSaya : newList
        }
    })

})))

export default usedaftarsaya