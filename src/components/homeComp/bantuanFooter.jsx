import { useRef } from "react";

const BantuanFooter = () => {
    const bantuanRef = useRef(null)
    const showBantuan = () => {
        bantuanRef.current.classList.toggle('flex')
        bantuanRef.current.classList.toggle('hidden')
    }
    
    return(
        <div className="pl-4 md:w-1/5 md:pt-16 md:pl-8">
                <h5 className="text-lg text-white font-medium md:font-semibold mb-4 md:mb-4"
                onClick={showBantuan}>
                    Bantuan
                </h5>
                <div className="hidden md:flex flex-col text-white/60 text-md font-light gap-2 mb-6"
                ref={bantuanRef}>
                    <a href="#">FAQ</a>
                    <a href="#">Kontak Kami</a>
                    <a href="#">Privasi</a>
                    <a href="#">Syarat & Ketentuan</a>
                </div>
         </div>
    )
}
export default BantuanFooter