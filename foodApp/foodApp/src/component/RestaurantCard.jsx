import React from "react"
import { CDN_LINK } from "../utils/constant"

function RestaurantCard({ restaurant }){
    return(
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={`${CDN_LINK}/${restaurant.cloudinaryImageId}`}
        alt={restaurant.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-2">{restaurant.name}</h2>
      <p className="text-gray-600">{restaurant.cuisines.join(", ")}</p>
      <p className="text-gray-800 font-semibold">{restaurant.costForTwoString}</p>
      <p className="text-yellow-500 font-bold">⭐ {restaurant.avgRating} ({restaurant.totalRatingsString})</p>
      <p className="text-green-600">{restaurant.slaString}</p>
    </div>
    )
}

export default RestaurantCard
