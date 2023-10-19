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
      // <div className="flex justify-between fixed w-screen z-10 bg-white top-0 items-center h-20 lg:h-28 shadow-xl px-7">
      //   <div className="flex justify-center ml-2">
      //     <button className="hidden max-lg:block" onClick={()=> toggleHamburger()}> <i class="fa-solid fa-bars"></i></button>
      //     <Title />
      //   </div>
        
      //   <div className={"nav-items relative "+ (!hamburger? "hidden": "block") + " lg:block "}>
      //     <ul className ="flex py-7 flex-col h-40 absolute top-14 -left-72 w-screen gap-1 items-center lg:-top-8 lg:-left-60 lg:bg-white lg:h-full lg:w-full shadow-md bg-white z-10 lg:flex-row">
      //       <li className="px-5"><Link to = "/" className="font-semibold font-sans transition-all ease-in  hover:font-bold duration-300 focus:text-orange-600 focus:font-bold">Home</Link></li>
      //       <li className="px-5"><Link to = "/about" className="font-semibold font-sans transition-all ease-in  hover:font-bold duration-300 focus:text-orange-600 focus:font-bold">About</Link></li>
      //       <li className="px-5"><Link to = "/contact" className="font-semibold font-sans transition-all ease-in  hover:font-bold duration-300 focus:text-orange-600 focus:font-boldd">Contact</Link></li>
      //       <li className="px-5"><Link to = "/instamart" className="font-semibold font-sans transition-all ease-in  hover:font-bold duration-300 focus:text-orange-600 focus:font-bold">InstaMart</Link></li>
            
      //     </ul>
      //   </div>
      //   <div className="mr-5 flex flex-row">
      //     <Link to = "/cart" data-testid = "cart"> <i className="fa-solid fa-cart-shopping text-xl lg:text-2xl"></i><div className="absolute top-5 right-[37px] lg:top-6 lg:right-7 bg-red-800 rounded-full px-1 lg:px-2 text-xs lg:text-sm font-semibold text-white">{cartItems.length}</div> </Link>
      //       {/* <h1>{user.name}</h1> */}
      //   </div>
      // </div>
      <div className="w-screen h-14 shadow-sm z-30 fixed top-0 left-0 bg-white">
        <div className="px-5 h-full mx-auto flex flex-row justify-between items-center relative">
          <div className="flex gap-3 items-center">
              <AiOutlineMenu className="font-extrabold text-xl z-50 md:hidden" onClick={toggleHamburger}/>
              <span className="text-base md:text-xl font-bold text-red-500"> <Link to="/">FoodVilla</Link></span>
          </div>
          <div className={`md:w-fit md:h-full w-screen h-screen bg-slate-300 md:bg-white justify-center items-center transition-all duration-300 ease-in md:static ${hamburger? " absolute top-0 left-0":" absolute top-0 left-0 -translate-y-[100%] md:translate-y-0"}`}>
            <ul className="h-full w-full md:w-fit flex md:flex-row flex-col md:items-center gap-8 md:gap-5 font-semibold transition-all ease-linear duration-300 items-center justify-center capitalize">
              <li className="hover:text-red-500 transition-all duration-200"><Link to={'/'}>Home</Link></li>
              <li className="hover:text-red-500 transition-all duration-200"><Link to={'/about'}>About</Link></li>
              <li className="hover:text-red-500 transition-all duration-200"><Link to={'/contact'}>Contact US</Link></li>
              <li className="hover:text-red-500 transition-all duration-200"><Link to={'/instamart'}>InstaMart</Link></li>
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