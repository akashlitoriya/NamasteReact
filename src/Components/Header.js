/*
Named exported Title component
Imported as 
import {Title} from ".Component/Header.js"
*/
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
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    );
  };

  /*Default export HeaderComponent
  Imported as import HeaderComponent from ".Component/Header.js";
  */
  export default HeaderComponent;