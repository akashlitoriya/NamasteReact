import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    costForTwo,
    avgRating,
    
  }) =>{
    return(
      <div className="transition ease-in-out w-64 m-4 shadow hover:scale-105 duration-300 rounded-xl hover:shadow-lg">
        <img 
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
          className="w-full rounded-xl"
        />

        <div className="w-full p-2">  
          <h2 className="font-bold text-lg font-sans text-gray-800 line-clamp-1 break-words mt-1">{name}</h2>
          <div className="flex flex-row justify-between mt-2">
            <h4 className={"text-xs w-14 rounded-lg text-white text-center py-1 font-semibold"+" " + (avgRating >= 4? "bg-[#48c479]" : avgRating < 3?"bg-[#e1b055]" : "bg-[#db7c38]")}><i className="fa-regular fa-star font-semibold"></i>{avgRating}</h4>
            <h4 className="text-sm font-medium text-gray-600">{costForTwo}</h4>
          </div>

          <h4 className="text-xs line-clamp-1 font-semibold text-gray-600 mt-2">{cuisines.join(", ")}</h4>
          <h4 className="text-xs font-semibold text-gray-600 mt-2">{areaName}</h4>
        </div>
      </div>
    )
  }

  export default RestaurantCard;