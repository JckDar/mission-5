import supabase from "../supabaseClient";


    const getData = async () => {
        const {data,error} = await supabase
        .from('daftarSaya')
        .select('*')

        if (error) {
            console.log('error :',error)
            return[]
            
        } else {
            console.log('berhasil :',data)
            return data
        }
    }
export default getData

  

