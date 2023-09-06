import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState, useEffect, useContext } from "react";
import { swiggy_api_URL, swiggy_mobile_api_URL } from "../config";
import { ShimmerUI } from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../util/helper";
import useOnline from "../util/useOnline";
import UserContext from "../util/UserContext";
import { ErrorPage } from "./ErrorPage"
import Carousel from "./Carousel";


const BodyComponent= () =>{
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const {user, setUser} = useContext(UserContext);


  useEffect(() => {
    getRestaurants();
  }, []);

  //Function to check if mobile or not
  function isMobile(){
    return window.innerWidth <= 768;
  }
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch(
        isMobile()? 
        swiggy_mobile_api_URL: swiggy_api_URL
      );
      const json = await data.json();
      
      // updated state variable restaurants with Swiggy API data
        let topRestaurant;
        if(isMobile()){
          topRestaurant = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants;
        }else{
          // topRestaurant = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          topRestaurant = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        }
      
      // const allRestaurant = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      //const restau = allRestaurant.concat(topRestaurant);
      
      setAllRestaurants(topRestaurant);
      setFilteredRestaurants(topRestaurant);
    } catch (error) {
      console.log(error);
    }
  }

 
  
  // use searchData function and set condition if data is empty show error message

  useEffect(()=>{
    searchData(searchText, allRestaurants)
  },[searchText]);
  function searchData (searchText, restaurants){
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };
  

  // const isOnline = useOnline();
  // if(!isOnline){
  //   return (
  //     <ErrorPage />
  //   )
  // }
  // if allRestaurants is empty don't render restaurants cards
  // if (!allRestaurants) return <h1>This is early return</h1>;

  return (
    <>
    <Carousel />
      <div className="flex justify-center mt-12 lg:mt-12">
        
        <input
          data-testid = "search-input"
          type="text"
          className="search-input border-2 px-5 py-2 rounded-l-full bg-gray-50 focus:border-orange-300"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          data-testid = "search-btn"
          className="rounded-r-full border-2 px-5 py-2 bg-orange-600 text-white"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
        {/* <input type="text" value = {user.name}
          onChange={e => setUser({
            name: e.target.value,
            email: "example@gmail.com"
          })}
        ></input> */}
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {!allRestaurants || allRestaurants?.length === 0 ? (
        <ShimmerUI />
      ) : (
        <div className="flex flex-wrap justify-center" data-testid = "res-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
export default BodyComponent;

