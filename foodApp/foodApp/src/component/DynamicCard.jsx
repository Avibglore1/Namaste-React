import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';

function DynamicCard() {
    const {movieId} = useParams()
    const [movie,setMovie] = useState(null);

    const fetchMovieData = async() =>{
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`);
            const data = await response.json();
            setMovie(data);
        }catch(err){
            console.log('err',err);
            
        }
    }
    useEffect(()=>{
        fetchMovieData();
    },[movieId])

    if(!movie) return <Shimmer/>


  return (
    <div className="movie-detail container mx-auto p-4">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-500 mb-4">{movie.tagline}</p>
        
        <div className="mb-4">
          <span className="font-bold">Rating:</span> {movie.vote_average} / 10
          <span className="ml-4 font-bold">Runtime:</span> {movie.runtime} minutes
        </div>
        
        <div className="mb-4">
          <span className="font-bold">Release Date:</span> {movie.release_date}
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Overview</h2>
          <p>{movie.overview}</p>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-2">Genres</h2>
          <div className="flex flex-wrap gap-2">
            {movie.genres.map(genre => (
              <span 
                key={genre.id}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DynamicCard