const URL_BASE = 'https://api.themoviedb.org/3';
export const URL_BASE_IMG = 'https://image.tmdb.org/t/p/original';
const API_KEY = 'b4cad17947e2657477277539bb661a6c';


export const getMovies =async (pagina)=>{
  try {
    const res = await fetch(`${URL_BASE}/movie/popular?language=es&api_key=${API_KEY}&page=${pagina}`);
    const data = await res.json();

    return data.results;
  } catch (error) {
    console.log("Error al obtener las peliculas");
  }
}

export const getInfoPelicula =async(idPelicula)=>{
  try {
    const res = await fetch(`${URL_BASE}/movie/${idPelicula}?language=es&api_key=${API_KEY}`); 
    const data = await res.json();

    const resActors = await fetch(`${URL_BASE}/movie/${idPelicula}/credits?language=es&api_key=${API_KEY}`);
    const actors = await resActors.json();
    console.log(actors)
    const infoMovie ={
      ...data,
      actors:[...actors.cast.slice(0,3)]
    }
    return infoMovie;
  } catch (error) {
    console.log("No se obtuvo la informacion");
  }
}

export const getGenerous = async ()=>{
  try{
    const res = await fetch(`${URL_BASE}/genre/movie/list?language=es&api_key=${API_KEY}`);
    const data = await res.json();
    console.log(data)
    return data.genres;

  }catch(error){
    console.log(error)
  }
}

