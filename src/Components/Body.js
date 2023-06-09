import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

function filteredContent(searchText, filteredList){
  const filteredData = restaurantList.filter((restaurantList) =>
  restaurantList.data.name.includes(searchText)
  );
  return filteredData;
}

const BodyComponent= () =>{
  const [searchText, setSearchText] = useState();
  const[filteredList, getFilteredRestaurantList] = useState(restaurantList);
    return (
      <>
        <div className = "search-section">
          <input 
            className="search-input" 
            type="text" 
            placeholder="Search here" 
            value = {searchText} 
            onChange = {(e) => {
              setSearchText(e.target.value);
            }}
            />
          <button className="search-btn" onClick={() => {
            const data = filteredContent(searchText, filteredList);
            getFilteredRestaurantList(data);
            
            }}>Search</button>
          
        </div>
        <div className="restaurant-list">
          {filteredList.map((restaurant) => {
            return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
          })}
        </div>
      </>
    );
};
export default BodyComponent;

