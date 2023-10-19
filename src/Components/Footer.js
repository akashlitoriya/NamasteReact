import { useContext } from "react";
import UserContext from "../util/UserContext";

const FooterComponent = () =>{
  const {user} = useContext(UserContext);
    return(
      <div className="w-full text-center h-20">
        <h1>This app was developed by : {user.name}</h1>
      </div>
    );
};
export default FooterComponent;
