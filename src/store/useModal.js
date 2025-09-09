import { create } from "zustand";

const useModal = create((set) => ({
    isOpen : null,
    id: null,
    setIsOpen : (film,index)=>set({isOpen : film, key : index}),
    closeModal : ()=>set({isOpen:null})
}))

export default useModal