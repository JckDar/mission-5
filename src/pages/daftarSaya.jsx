import usedaftarsaya from "../store/useDaftarSaya"
import NoneText from "../components/daftarSayaComp/noneText"
import ConDaftarSaya from "../components/daftarSayaComp/conDaftarSaya"
import { useEffect, useState } from "react"
import getData from "../api/getData"


const DaftarSaya = () => {
    const listDaftarSaya = usedaftarsaya((state)=>(state.listDaftarSaya))
    const setListDaftarSaya = usedaftarsaya((state)=>(state.setListDaftarSaya))

    useEffect(() => {
        async function fetchData() {
          const data = await getData()
          setListDaftarSaya(data)}
    
        fetchData()
      }, [])

    return (
        <div className="flex scroll-smooth flex-col w-screen min-h-screen md:py-20 bg-black/90 font-poppins">
            <h1 className="text-white text-2xl md:text-4xl mt-20 md:mt-12 mx-12">Daftar Saya</h1>
            {listDaftarSaya.length == 0 ? <NoneText/> : <ConDaftarSaya/>}
        </div>
    )
}

export default DaftarSaya