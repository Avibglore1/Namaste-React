import React from "react"
import { CDN_LINK } from "../utils/constant"

function MovieCard({ movie }){
    return(
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={`${CDN_LINK}${movie.poster_path}`}
        // alt={movie.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-2">{movie.original_title}</h2>
      <p className="text-gray-600">{movie.release_date}</p>
      <p className="text-gray-800 font-semibold">{movie.popularity}</p>
      <p className="text-yellow-500 font-bold">⭐ {movie.vote_average}</p>
    </div>
    )
}

export default MovieCard
