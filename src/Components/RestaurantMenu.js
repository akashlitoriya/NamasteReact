// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { IMG_CDN_URL, swiggy_menu_api_URL } from "../config";
// import { ShimmerUI } from "./ShimmerUI";
// import { swiggy_api_URL } from "../config";

// const RestaurantMenu = () => {
//     //useParam is used to read the url

//     const{resId} = useParams();
//     const[ restaurant, setRestaurant] = useState(null);
//     useEffect(() => {
//         getRestaurantInfo();
//     },[]);

//     async function getRestaurantInfo(){
//         const data = await fetch(swiggy_menu_api_URL + resId);
//         const json = data.json();
       
//         setRestaurant(json.data);
//         console.log(restaurant);
//     }
    
//     if(!restaurant){
//         return (
//             <h1>Items not comes successfully</h1>
//         )
//     }
// return (
//     <div className = "menu">
//         <div>
//             <h1>Restaurant id : {resId}</h1>
//             <h2>{restaurant?.name}</h2>
//             <h3>{restaurant?.area}</h3>
//             <h3>{restaurant?.city}</h3>
//             <h3>{restaurant?.avgRating} stars</h3>
//         </div>
//         <div>
//             <h1>Menu</h1>
//             <ul>
//                 {Object.values(restaurant?.menu?.items).map((item) => (
//                     <li key = {item.id}>{item.name}</li>
//                 ))}
//             </ul>
//         </div>
//     </div>
// )
// }
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../config";
import {ShimmerUI} from "./ShimmerUI";
import useRestaurant from "../util/useRestaurant";
import useMenuItems from "../util/useMenuItems";
import { useDispatch } from "react-redux";
import { addItem } from "../util/cartSlice";
const RestaurantMenu = () => {
    const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
    // const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
    // const [menuItems, setMenuItems] = useState([]);
    const restaurant = useRestaurant(resId);
    const menuItems = useMenuItems(resId);
    
    const dispatch = useDispatch();
    const addFoodItems = (item) =>{
      dispatch(addItem(item));
    }
                               
    // useEffect(() => {
    //   getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
    // }, []);
  
    // async function getRestaurantInfo() {
    //   try {
    //     const response = await fetch(swiggy_menu_api_URL + resId);
    //     const json = await response.json();
  
    //     // Set restaurant data
    //     const restaurantData = json?.data?.cards?.map(x => x.card)?.
    //                            find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
    //     setRestaurant(restaurantData);
  
    //     // Set menu item data
    //     const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
    //                           groupedCard?.cardGroupMap?.REGULAR?.
    //                           cards?.map(x => x.card?.card)?.
    //                           filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
    //                           map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
        
    //     const uniqueMenuItems = [];
    //     menuItemsData.forEach((item) => {
    //       if (!uniqueMenuItems.find(x => x.id === item.id)) {
    //         uniqueMenuItems.push(item);
    //       }
    //     })
    //     setMenuItems(uniqueMenuItems);
    //   } catch (error) {
    //     setMenuItems([]);
    //     setRestaurant(null);
    //     console.log(error);
    //   }
    // }
    return !restaurant ? (
        <ShimmerUI />
      ) : (
        <div className="w-screen mx-auto mt-10">
          <div className="w-2/3 p-4 m-auto flex flex-row justify-between border-b-2">
            <div className="">
              <h2 className="text-xl font-bold text-gray-700 mb-4">{restaurant?.name}</h2>
              <p className="text-lg font-semibold text-gray-600">{restaurant?.cuisines?.join(", ")}</p>
            </div>
            <div className="flex items-center">
              <div className={"font-bold" + " " + (restaurant.avgRating >= 4? "text-[#48c479]" : (restaurant.avgRating < 3) ? "text-[#e1b055]" : "text-[#db7c38]")}><i className="fa-solid fa-star"></i>{restaurant.avgRating}</div>
            </div>
          </div>
    
          <div className="w-2/3 m-auto">
            <div className="flex flex-col justify-center w-full">
              <div className="flex flex-row justify-between mt-8 mb-8 p-4">
                <h3 className="text-lg font-semibold text-gray-600">Recommended</h3>
                <p className="text-md font-semibold text-gray-600">
                  {menuItems.length} ITEMS
                </p>
              </div>
              <div className="box-border flex flex-col" data-testid = "menu">
                {menuItems.map((item) => (
                  <div className="bg-slate-50 m-2 flex justify-between w-full p-5 rounded-lg" key={item?.id}>
                    <div className="w-max flex flex-col">
                      <div className={"w-4 h-4 mb-3 " + (item.isVeg == 1 ? "text-green-700" : "text-red-700")}><i class="fa-regular fa-circle-stop"></i></div>
                        <h3 className="font-semibold text-lg text-gray-800">{item?.name}</h3>
                        <p className="font-semibold text-md text-gray-600">
                          {item?.price > 0
                            ? new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR",
                              }).format(item?.price / 100)
                            : " "}
                        </p>
                        <p className="font-semibold text-md text-gray-500">{item?.description}</p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="w-32 h-28 overflow-clip rounded-lg">
                        {item?.imageId && (
                          <img
                            className="w-full h-full scale-150 "
                            src={ITEM_IMG_CDN_URL + item?.imageId}
                            alt={item?.name}
                          />
                        )}
                      </div>
                      <button data-testid = "add-btn" className="relative -top-2 bg-slate-200 w-max m-auto py-1 px-2 rounded-md font-semibold transition-all ease-in hover:bg-slate-300" onClick={() => addFoodItems(item)}> ADD +</button>
                    </div>
                
                  </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      );
    };

export default RestaurantMenu;