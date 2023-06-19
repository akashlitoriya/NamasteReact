/*
Named exported Title component
Imported as 
import {Title} from ".Component/Header.js"
*/
import { Link } from "react-router-dom";
export const Title = ()=>{
    return(
      <img
        className="logo"
        alt="logo"
        src="https://page.line.me/emi1148b/profile/img"
      />
    );
    
  };
  const HeaderComponent = ()=>{
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/contact">Contact</Link></li>
            <li><Link to = "/">Cart</Link></li>
          </ul>
        </div>
      </div>
    );
  };

  /*Default export HeaderComponent
  Imported as import HeaderComponent from ".Component/Header.js";
  */
  export default HeaderComponent;