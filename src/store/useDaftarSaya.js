import { create } from "zustand";

const usedaftarsaya = (create(set => ({
    listDaftarSaya : [],
    setListDaftarSaya : (film) => set((state) => ({listDaftarSaya: [data, ...state.listDaftarSaya] }))

})))

export default usedaftarsaya