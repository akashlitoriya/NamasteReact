import { useState, useEffect } from "react";
import { swiggy_menu_api_URL } from "../config";
import { MENU_ITEM_TYPE_KEY } from "../config";
import { getRestaurantData } from "../services/apiConnector";
const useMenuItems = (resId) =>{
    const [menuItems, setmenuItems] = useState([]);

    async function getRestaurant(){
        //const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await getRestaurantData(swiggy_menu_api_URL + resId);
        console.log(json);
        const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                              groupedCard?.cardGroupMap?.REGULAR?.
                              cards?.map(x => x.card?.card)?.
                              filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                              map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
        
        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find(x => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        })
        //console.log(uniqueMenuItems);
        setmenuItems(uniqueMenuItems);
    }

    useEffect(() => {
        getRestaurant();
    },[]);

    return menuItems;
}
export default useMenuItems;