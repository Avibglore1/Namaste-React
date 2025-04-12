import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import Shimmer from './Shimmer';


function Body() {
  const [movieList,setMovieList] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7874577ec3f51229c6a0ae7a197a2dee`);
    const json = await data.json();
    setMovieList(json.results)
    console.log(json);
    
  }
  
  function filteredList(){
    setMovieList(movieList.filter(restrau => restrau.data.avgRating>4))
  }

  if(movieList.length === 0){
    return <Shimmer />
  }

  return (
    <div className='space-y-3'>
      <input type="text" placeholder="Search for movie..." 
        className='border border-gray-300 rounded-l px-4 py-2 ml-5 focus:outline-none focus:ring-2 focus:ring-orange-500'
      />
      <button className='bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600 transition-colors'
      onClick={filteredList}>
        Search
      </button> 
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

