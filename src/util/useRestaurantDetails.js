import { useState, useEffect } from "react";
import { swiggy_menu_api_URL } from "../config";

const useRestaurantDetails = (resId) =>{
    const [restaurantDetails, setRestaurantDetails] = useState([]);

    async function getRestaurant(){
        const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await data.json();
        
        const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                              groupedCard?.cardGroupMap?.REGULAR?.
                              cards?.map(x => x.card?.card)?.
                              filter(x=> x['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress')
                              || [];
        
        
        setRestaurantDetails(menuItemsData);
    }

    useEffect(() => {
        getRestaurant();
    },[]);

    return restaurantDetails;
}
export default useRestaurantDetails;