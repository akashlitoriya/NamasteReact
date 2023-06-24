import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) =>{
    return(
      <div className="transition ease-in-out w-56 h-80 p-4 m-3 shadow bg-indigo-100 hover:scale-105 duration-300">
        <img src={
            IMG_CDN_URL +
            cloudinaryImageId
          }/>
        <h2 className="font-bold text-sky-800">{name}</h2>
        <h4 className="text-xs">{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <span>
          <h4>{avgRating}</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    )
  }

  export default RestaurantCard;