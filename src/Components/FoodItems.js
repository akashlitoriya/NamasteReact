import { ITEM_IMG_CDN_URL } from "../config";
const FoodItems = ({
    imageId,
    name,
    price,
    itemAttribute
    
  }) =>{
    return(
      <div className="transition ease-in-out flex p-4 m-3 shadow bg-indigo-100 hover:scale-105 duration-300">
        <img src={
            ITEM_IMG_CDN_URL +
            imageId
          }/>
        <div className = "m-3">
            <h2 className="font-bold text-sky-800">{name}</h2>
            <h3>{itemAttribute.vegClassifier}</h3>
            <h3>Rupee :- {price/100}</h3>
        </div>
       </div>
    )
  }

  export default FoodItems;