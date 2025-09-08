import { create } from "zustand";

const useModal = create((set) => ({
    isOpen : null,
    setIsOpen : (film)=>set({isOpen : film}),
    closeModal : ()=>set({isOpen:null})
}))

export default useModal