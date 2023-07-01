/*
Named exported Title component
Imported as 
import {Title} from ".Component/Header.js"
*/
import UserContext from "../util/UserContext";
import { useContext, useState } from "react"

import { Link } from "react-router-dom";
export const Title = ()=>{
  
    return(
      <img
        className="h-20 p-5"
        alt="This is a logo"
        src=""
      />
    );
    
  };
  const HeaderComponent = ()=>{
    const { user } = useContext(UserContext);
    return (
      <div className="flex justify-between items-center h-28 bg-indigo-300">
        <Title />
        <div className="nav-items">
          <ul className ="flex py-7">
            <li className="px-5"><Link to = "/">Home</Link></li>
            <li className="px-5"><Link to = "/about">About</Link></li>
            <li className="px-5"><Link to = "/contact">Contact</Link></li>
            <li className="px-5"><Link to = "/">Cart</Link></li>
            <li className="px-5"><Link to = "/instamart">InstaMart</Link></li>
          </ul>
        </div>
        <div>
            <h1>{user.name}</h1>
        </div>
      </div>
    );
  };

  /*Default export HeaderComponent
  Imported as import HeaderComponent from ".Component/Header.js";
  */
  export default HeaderComponent;