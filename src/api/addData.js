import supabase from "../supabaseClient";

const addData = async (name, image, poster, star, duration, year, desc) => {
    const {data,error} = await supabase
    .from('daftarSaya')
    .insert([{
        name,
        image,
        poster,
        star,
        duration,
        year,
        desc,
    }])

    if(error) {
        console.log('error :', error)
    } else {
        alert('Film Berhasil Ditambah')
    }
}

export default addData