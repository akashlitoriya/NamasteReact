export const ShimmerUI = () =>{
    return(
        <div className = "flex flex-wrap">
            {Array(20).fill("").map((e,index) => (
                <div className = "w-56 h-80 bg-gray-200 m-3" key = {index}></div>
            ))}
        </div>
        
    );
}