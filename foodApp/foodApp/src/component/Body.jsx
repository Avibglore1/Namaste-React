import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import Shimmer from './Shimmer';


function Body() {
  const [movieList,setMovieList] = useState([]);
  const [searchText,setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    const json = await data.json();
    setMovieList(json.results)
    console.log(json);
  }
  
  function filteredList(){
    setMovieList(movieList.filter(movie => movie.vote_average>7.5))
  }

  return movieList.length === 0 ? (<Shimmer />) :(
    <div className='space-y-3'>
      <input type="text" placeholder="Search for movie..." 
        className='border border-gray-300 rounded-l px-4 py-2 ml-5 focus:outline-none focus:ring-2 focus:ring-orange-500'
        value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }}
      />
      <button className='bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600 transition-colors'
      onClick={()=>{
        const searchMovieList = movieList.filter((movie)=>movie.original_title.includes(searchText));
        setMovieList(searchMovieList);
      }}
      >
        Search
      </button> 
      <button className='bg-slate-500 text-white px-4 py-2 rounded-r hover:bg-slate-600 transition-colors ml-80'
      onClick={filteredList}>fiteredMovie</button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {movieList.map((item)=>{ 
        return(
        <MovieCard key={item.id} movie={item} />
      )})}
    </div>                             
    </div>
  
  )
}

export default Body

