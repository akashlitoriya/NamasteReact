import { useRouteError } from "react-router-dom"
import Illustrator from "../assets/404.png"
export const Error = () => {
    const err = useRouteError();

    return (
        <div className="grid grid-flow-col w-screen h-screen gap-11 col-span-1">
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-5">Oops!!!</h1>
                <h2 className="text-4xl font-bold mb-5">Something went wrong</h2>
                <h3 className="text-4xl font-bold text-orange-700">{err.status == undefined ? "Chech Internet Connection" : err.statusText} </h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img 
                    src={Illustrator}
                    className="w-1/3 animate-bounce"
                />

            </div>
            
            
        </div>
            
    
    )
}