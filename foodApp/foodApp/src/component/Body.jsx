import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import {restrautList as restaurantList} from "./../utils/mockData"


function body() {
  const [restrautList,setrestraList] = useState(restaurantList);

  function filteredList(){
    setrestraList(restrautList.filter(restrau => restrau.data.avgRating>4))
  }

  return (
    <div className='space-y-3'>
      <input type="text" placeholder="Search for food..." 
        className='border border-gray-300 rounded-l px-4 py-2 ml-5 focus:outline-none focus:ring-2 focus:ring-orange-500'
      />
      <button className='bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600 transition-colors'
      onClick={filteredList}>
        Search
      </button> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {restrautList.map((item)=>{ 
        return(
        <RestaurantCard key={item.data.id} restaurant={item.data} />
      )})}
    </div>                             
    </div>
    
  )
}

export default body

