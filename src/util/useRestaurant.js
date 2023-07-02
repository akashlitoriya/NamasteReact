import { useState, useEffect } from "react";
import { swiggy_menu_api_URL } from "../config";
import { RESTAURANT_TYPE_KEY } from "../config";
const useRestaurant = (resId) =>{
    const [restaurant, setRestaurant] = useState(null);

    async function getRestaurant(){
        const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await data.json();
        const restaurantData = json?.data?.cards?.map(x => x.card)?.
                               find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
        setRestaurant(restaurantData);
        
    }

    useEffect(() => {
        getRestaurant();
    },[]);

    return restaurant;
}
export default useRestaurant;