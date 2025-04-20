import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../utils/watchListSlice";
import { CDN_LINK } from "../utils/constant";
import {clearWatchList} from "./../utils/watchListSlice"

const WatchList = () => {
  const dispatch = useDispatch();
  const watchListItems = useSelector((store) => store.watchList.items);
  
  const handleRemoveMovie = (movieId) => {
    dispatch(removeItem(movieId));
  };

  const handleclearList = () =>{
    dispatch(clearWatchList());
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Watch List</h2>
      <div className="text-center m-2"><button className="bg-slate-300 border-b-2 p-2 rounded-md shadow-md" onClick={handleclearList}>Clear WatchList</button></div>
      
      {watchListItems.length === 0 ? (
        <p>Your watch list is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {watchListItems.map((movie) => (
            <div key={movie.id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={`${CDN_LINK}${movie.poster_path}`}
                alt={movie.original_title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold mt-2">{movie.original_title}</h3>
                <p className="text-gray-600">{movie.release_date}</p>
                <p className="text-yellow-500 font-bold">⭐ {movie.vote_average}</p>
                <button 
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleRemoveMovie(movie.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;