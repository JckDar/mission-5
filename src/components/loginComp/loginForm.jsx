import { Link } from "react-router"
import { useNavigate } from "react-router"
const LoginForm = () => {
  const navigate = useNavigate()

  return ( 
  <div className="flex w-4/5 md:w-2xl min-h-28 items-center content-center justify-evenly">
    <form className="flex flex-col w-xl text-nowrap  ">
      <label
        className="text-white mb-2 text-xs md:text-lg">
          Username :
      </label>
      <input
        className="block border-1 border-white rounded-4xl w-full h-4 md:h-8 p-4
          mb-3 md:mb-6 text-white text-xs md:text-lg" type="text" placeholder="Masukkan Username" />
      <label className="text-white mb-1 md:mb-2 text-xs md:text-lg">
        Password :
      </label>
      <input 
        className="block border-1 border-white rounded-4xl w-full h-4 md:h-8 p-4
          mb-3 md:mb-6 text-white text-xs md:text-lg" type="password" placeholder="Masukkan Password" />
      <p className="text-xs md:text-sm p-2 mb-5 md:mb-8 text-gray-400">
        Belum mempunyai akun ? 
          <Link to='/register' className="text-white hover:text-red-900 text-xs md:text-sm">
            Daftar disini
          </Link>
      </p>
      <button className="w-full h-8 md:h-10 rounded-4xl text-xs md:text-sm bg-gray-500 text-white m-auto
        hover:bg-gray-800 shadow shadow-black/5 "
         onClick={()=> {
          navigate("/homepage")
          }}>
            Submit
      </button>
      <p className="text-gray-400 text-center text-xs md:text-sm font-medium mt-2 mb-2 ">
        atau
      </p>
      <button className="w-full h-8 md:h-10 mb-12 rounded-4xl text-xs md:text-sm border-1 border-white text-white m-auto
        hover:bg-gray-800 hover:border-0 hover:shadow hover:shadow-black">
            Login dengan Google
      </button>
     </form>
   </div>
  )
}

export default LoginForm