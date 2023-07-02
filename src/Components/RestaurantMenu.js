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
        <div className="restaurant-menu">
          <div className="restaurant-summary">
            <img
              className="restaurant-img"
              src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
              alt={restaurant?.name}
            />
            <div className="restaurant-summary-details">
              <h2 className="restaurant-title">{restaurant?.name}</h2>
              <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
              <div className="restaurant-details">
                <div className="restaurant-rating" style={
                (restaurant?.avgRating) < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : (restaurant?.avgRating) === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }>
                <i className="fa-solid fa-star"></i>
                  <span>{restaurant?.avgRating}</span>
                </div>
                <div className="restaurant-rating-slash">|</div>
                <div>{restaurant?.sla?.slaString}</div>
                <div className="restaurant-rating-slash">|</div>
                <div>{restaurant?.costForTwoMessage}</div>
              </div>
            </div>
          </div>
    
          <div className="restaurant-menu-content">
            <div className="menu-items-container flex flex-col justify-center w-full">
              <div className="menu-title-wrap">
                <h3 className="menu-title">Recommended</h3>
                <p className="menu-count">
                  {menuItems.length} ITEMS
                </p>
              </div>
              <div className="menu-items-list flex flex-col justify-center">
                {menuItems.map((item) => (
                  <div className="bg-slate-300 m-2 flex w-4/5" key={item?.id}>
                    <div className="menu-img-wrapper m-4  h-40 w-44 overflow-clip">
                      {item?.imageId && (
                        <img
                          className="menu-item-img h-56"
                          src={ITEM_IMG_CDN_URL + item?.imageId}
                          alt={item?.name}
                        />
                      )}
                      
                    </div>
                    <div className="menu-item-details w-max flex flex-col">
                      <h3 className="font-bold">{item?.name}</h3>
                      <p className="item-cost">
                        {item?.price > 0
                          ? new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(item?.price / 100)
                          : " "}
                      </p>
                      <p className="item-desc">{item?.description}</p>
                      <button className="p-3 m-2 bg-blue-600 text-white" onClick={() => addFoodItems(item)}> ADD +</button>
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