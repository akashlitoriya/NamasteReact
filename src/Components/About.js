import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import { Profile } from "./Profile";
import {LiaLinkedinIn,LiaGithub} from 'react-icons/lia'
import {BiGitRepoForked} from 'react-icons/bi'
import { Link } from "react-router-dom";
import about from "../assets/about.png"
export const About = ()=>{
    return (
        <div className="min-h-[calc(100vh-14rem)] mt-14">
            <div className="grid grid-flow-col grid-rows-2 gap-5 grid-cols-1 md:grid-rows-1 md:grid-cols-2 w-11/12 max-w-max mx-auto">
                <div className="flex flex-col gap-3 items-center md:items-start justify-center">
                    <h1 className="text-3xl font-bold text-red-500">FoodVilla</h1>
                    <p className="text-xl font-semibold text-gray-700 text-center">Foodvilla is food ordering website developed by Akash Litoriya</p>
                    <div className="flex gap-3">
                        <Link target="_blank" to={"https://www.linkedin.com/in/akashlitoriya/"}><LiaLinkedinIn className="hover:text-blue-600 text-2xl"/></Link>
                        <Link target="_blank" to={"https://github.com/akashlitoriya"}><LiaGithub className="hover:text-blue-600 text-2xl"/></Link>
                        <Link target="_blank" to={"https://github.com/akashlitoriya/NamasteReact"}><BiGitRepoForked className="hover:text-red-600 text-2xl"/></Link>

                    </div>
                </div>
                <div >
                    <img src={about} className="w-full h-full"/>    
                </div>
            </div>
            {/* <ProfileClass name = {"Akash"}/> */}
            {/* <Outlet /> */}
            {/* <Profile  name = "Akash Func."/> */}
        </div>
    );
}