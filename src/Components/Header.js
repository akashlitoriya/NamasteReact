/*
Named exported Title component
Imported as 
import {Title} from ".Component/Header.js"
*/
import UserContext from "../util/UserContext";
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import store from "../util/store";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/logo.png";
import {clickedHamburger} from "../util/hamburgerSlice"
import {AiOutlineMenu, AiOutlineShoppingCart} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
export const Title = ()=>{
  
    return( 
      <div className="flex flex-row items-center justify-center">
          <img
            className="h-20 p-5"
            data-testid = "logo"
            alt="This is a logo"
            src={Logo}
          />
          <div className="text-xl lg:text-2xl text-orange-600 font-sans font-bold">
            FoodVilla
          </div>
      </div>
      
    );
    
  };
  const HeaderComponent = ()=>{
    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const toggleHamburger = () =>{
      dispatch(clickedHamburger());
    }
    const hamburger = useSelector(store => store.hamburger.clicked);
    console.log(cartItems);
    return (
      <div className="w-screen h-14 shadow-sm z-30 fixed top-0 left-0 bg-white">
        <div className="px-5 max-w-[1200px] h-full mx-auto flex flex-row justify-between items-center relative">
          <div className="flex gap-3 items-center">
              {
                !hamburger?(<AiOutlineMenu className="font-extrabold text-xl z-50 md:hidden" onClick={toggleHamburger}/>):(
                  <RxCross2 className="font-extrabold text-xl z-50 md:hidden" onClick={toggleHamburger}/>
                )
              }
              <span className="text-base md:text-xl font-bold text-red-500"> <Link to="/">FoodVilla</Link></span>
          </div>
          <div className={`md:w-fit md:h-full w-screen h-screen bg-slate-300 md:bg-white justify-center items-center transition-all duration-300 ease-in md:static ${hamburger? " absolute top-0 left-0":" absolute top-0 left-0 -translate-y-[100%] md:translate-y-0"}`}>
            <ul className="h-full w-full md:w-fit flex md:flex-row flex-col md:items-center gap-8 md:gap-5 font-semibold transition-all ease-linear duration-300 items-center justify-center capitalize">
              <li className="hover:text-red-500 transition-all duration-200" onClick={toggleHamburger}><Link to={'/'}>Home</Link></li>
              <li className="hover:text-red-500 transition-all duration-200" onClick={toggleHamburger}><Link to={'/about'}>About</Link></li>
              <li className="hover:text-red-500 transition-all duration-200" onClick={toggleHamburger}><Link to={'/contact'}>Contact US</Link></li>
              <li className="hover:text-red-500 transition-all duration-200" onClick={toggleHamburger}><Link to={'/instamart'}>InstaMart</Link></li>
            </ul>
          </div>
          <div className="relative">
              <AiOutlineShoppingCart className="text-3xl z-50"/>
              <Link to={"/cart"}>
              <span className="rounded-full px-1 text-sm bg-red-800 text-white font-bold absolute -top-1 -right-2">{cartItems.length}</span>
              </Link>
          </div>
        </div>
      </div>
    );
  };

  /*Default export HeaderComponent
  Imported as import HeaderComponent from ".Component/Header.js";
  */
  export default HeaderComponent;