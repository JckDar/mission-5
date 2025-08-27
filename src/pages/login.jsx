
import LoginForm from "../components/loginComp/loginForm"

const LoginPage = () => {

    return(
     <div className="bg-[url(../img/bg-main.jpg)] bg-cover flex w-screen h-screen justify-center items-center">
        <div className="w-4/5 md:w-2xl h-auto m-auto mt-36 md:mt-20 p-3 flex flex-col 
        justify-center items-center bg-gray-900/50 backdrop-blur-md rounded-xl font-poppins">

            <h1 className="text-3xl md:text-5xl font-monoton mt-4 text-red-800">
              CHILL
            </h1>
            <h1 className="text-xl md:text-4xl font-bold mt-1 md:mt-4 text-white text-shadow-sm text-shadow-black/20">
              Masuk
            </h1>
            <p className="text-white text-xs md:text-lg mt-2 mb-8"> 
              Selamat Datang Kembali!
            </p>
            <LoginForm />
            
        </div>
     </div>
    )}

export default LoginPage