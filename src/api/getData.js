import supabase from "../supabaseClient";


    const getData = async () => {
        const {data,error} = await supabase
        .from('daftarSaya')
        .select('*')

        if (error) {
            alert('error :',error)
            return[]
            
        } else {
           
            return data
        }
    }
export default getData

  

