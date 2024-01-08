import { useState, useEffect } from "react";
import { isMobile } from "./utilityFunctions";
import { swiggy_api_URL, swiggy_mobile_api_URL } from "../config";
import { getRestaurantData } from "../services/apiConnector";
const useRestaurant = () =>{
    const [restaurant, setRestaurant] = useState(null);
    async function getRestaurant(){
        const url = 
            isMobile()? 
            swiggy_mobile_api_URL: swiggy_api_URL;
         
          const json = await getRestaurantData(url);
          
          // updated state variable restaurants with Swiggy API data
            let topRestaurant;
            if(isMobile()){
              topRestaurant = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
              ?.restaurants;
            }else{
              // topRestaurant = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
              topRestaurant = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            }
        
        setRestaurant(topRestaurant);
        
    }

    useEffect(() => {
        getRestaurant();
    },[]);

    return restaurant;
}
export default useRestaurant;