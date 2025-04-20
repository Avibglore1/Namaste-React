import React, { useContext } from "react"
import { CDN_LINK } from "../utils/constant"
import UserContext from "../utils/UserContext"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/watchListSlice"

function MovieCard({ movie }){
  const dispatch = useDispatch();
  const handleAddBtn =(movie)=>{
    dispatch(addItem(movie));
  }

  const {loggedinUser} = useContext(UserContext)
    return(
    <div className="border p-4 rounded-lg shadow-lg">
      <img
            src={`${CDN_LINK}${movie.poster_path}`}
            // alt={movie.name}
            className="w-full h-40 object-cover rounded-lg"
          />
      <div className="flex justify-between items-center">
          <div>
              <h2 className="text-xl font-bold mt-2">{movie.original_title}</h2>
              <p className="text-gray-600">{movie.release_date}</p>
              <p className="text-gray-800 font-semibold">{movie.popularity}</p>
              <p className="text-yellow-500 font-bold">⭐ {movie.vote_average}</p>
              <p>{loggedinUser}</p>
          </div>
        <div>
          <button className="px-2 py-2  border-b-2" onClick={()=>{handleAddBtn(movie)}}>Add to watchList</button>
        </div>
      </div>
        
    </div>
    )
}

export default MovieCard
