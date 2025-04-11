import React from 'react'
import RestaurantCard from './RestaurantCard'
import { restrautList } from '../utils/mockData'
function body() {
  return (
    <div className='space-y-3'>
      <input type="text" placeholder="Search for food..." 
        className='border border-gray-300 rounded-l px-4 py-2 ml-5 focus:outline-none focus:ring-2 focus:ring-orange-500'
      />
      <button className='bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600 transition-colors'>
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

// {restrautList.map((item) => (
//   <RestaurantCard key={item.data.id} restaurant={item.data} />
// ))}