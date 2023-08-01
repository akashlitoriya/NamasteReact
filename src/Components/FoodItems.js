
import { ITEM_IMG_CDN_URL } from "../config";

const FoodItems = ({
    imageId,
    name,
    price,
    itemAttribute,
    id,
    isVeg
    
  })=>{

    

    return(
      <div className="flex justify-between p-4 m-3 w-full ">
        <div className = "flex">
          <div className={(isVeg)? "text-green-700" : "text-red-700"}>
            <i class="fa-regular fa-circle-stop"></i>
          </div>
          <h2 className="font-semibold text-gray-600 ml-2">{name}</h2>
        </div>
        <div>
          <h3> 
            {price > 0? new Intl.NumberFormat("en-IN", {style: "currency", currency: "INR",}).format(price / 100) : " "}
          </h3>
        </div>
        
      </div>
    )
  }

  export default FoodItems;