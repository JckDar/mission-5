import usedaftarsaya from "../store/useDaftarSaya"
import NoneText from "../components/daftarSayaComp/noneText"
import ConDaftarSaya from "../components/daftarSayaComp/conDaftarSaya"

const DaftarSaya = () => {
    const listDaftarSaya = usedaftarsaya((state)=>(state.listDaftarSaya))
    const setListDaftarSaya = usedaftarsaya((state)=>(state.setListDaftarSaya))

    return (
        <div className="flex scroll-smooth flex-col w-screen min-h-96 md:py-20 bg-black/90 font-poppins">
            <h1 className="text-white text-4xl mt-12 mx-12">Daftar Saya</h1>
            {listDaftarSaya.length == 0 ? <NoneText/> : <ConDaftarSaya/>}
        </div>
    )
}

export default DaftarSaya