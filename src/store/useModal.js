import { create } from "zustand";

const useModal = create((set) => ({
    isOpen : null,
    id: null,
    setIsOpen : (film,index)=>set({
        isOpen:film, id:index
    }),
    closeModal : ()=>set({
        isOpen:null, id:null
    })
}))

export default useModal