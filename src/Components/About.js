import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import { Profile } from "./Profile";
export const About = ()=>{
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <ProfileClass name = {"Akash"}/>
            {/* <Outlet /> */}
            {/* <Profile  name = "Akash Func."/> */}
        </div>
    );
}