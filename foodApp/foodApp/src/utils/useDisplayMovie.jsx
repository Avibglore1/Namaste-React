import  { useEffect,useState } from 'react'

function useDisplayMovie(movieId) { 
    const [movie,setMovie] = useState(null);

    useEffect(()=>{
        fetchMovieData()
    },[movieId])

    const fetchMovieData = async() =>{
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`);
            const data = await response.json();
            setMovie(data);
        }catch(err){
            console.log('err',err);
            
        }
    }
    return movie;
}

export default useDisplayMovie