import { create } from "zustand"


const usedaftarsaya = create((set) => ({
    listDaftarSaya : [],
    setListDaftarSaya : (film)=>set(() => (
        {listDaftarSaya: film}
    )),

    removeFilm : (name)=>set((state)=>(
        {listDaftarSaya : state.listDaftarSaya.filter((f)=> f.name !== name)}
    ))

}))
export default usedaftarsaya