/*
Named exported Title component
Imported as 
import {Title} from ".Component/Header.js"
*/
import UserContext from "../util/UserContext";
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import store from "../util/store";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.png";
export const Title = ()=>{
  
    return( 
      <div className="flex flex-row items-center justify-center">
          <img
            className="h-20 p-5"
            data-testid = "logo"
            alt="This is a logo"
            src={Logo}
          />
          <div className="text-2xl text-orange-600 font-sans font-bold">
            FoodVilla
          </div>
      </div>
      
    );
    
  };
  const HeaderComponent = ()=>{
    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    return (
      <div className="flex justify-between items-center h-28 shadow-xl">
        <Title />
        <div className="nav-items">
          <ul className ="flex py-7">
            <li className="px-5"><Link to = "/" className="font-semibold font-sans transition ease-linear  hover:font-bold duration-300 focus:text-orange-600 focus:font-bold">Home</Link></li>
            <li className="px-5"><Link to = "/about" className="font-semibold font-sans transition ease-linear  hover:font-bold duration-300 focus:text-orange-600 focus:font-bold">About</Link></li>
            <li className="px-5"><Link to = "/contact" className="font-semibold font-sans transition ease-linear  hover:font-bold duration-300 focus:text-orange-600 focus:font-boldd">Contact</Link></li>
            <li className="px-5"><Link to = "/instamart" className="font-semibold font-sans transition ease-linear  hover:font-bold duration-300 focus:text-orange-600 focus:font-bold">InstaMart</Link></li>
            
          </ul>
        </div>
        <div className="mr-5 flex flex-row">
          <Link to = "/cart" data-testid = "cart"> <i className="fa-solid fa-cart-shopping text-2xl"></i><div className="absolute top-6 right-2 bg-red-800 rounded-full px-2 text-sm font-semibold text-white">{cartItems.length}</div> </Link>
            {/* <h1>{user.name}</h1> */}
        </div>
      </div>
    );
  };

  /*Default export HeaderComponent
  Imported as import HeaderComponent from ".Component/Header.js";
  */
  export default HeaderComponent;