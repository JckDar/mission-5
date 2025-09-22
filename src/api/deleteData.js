import supabase from "../supabaseClient"

const deleteData = async (name) => {
    const {error} = await supabase 
    .from('daftarSaya')
    .delete()
    .eq('name',name)

    if(error) {
        console.log('error:',error)
        return false
    }
    return true
}

export default deleteData