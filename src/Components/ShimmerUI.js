export const ShimmerUI = () =>{
    return(
        <div className = "flex flex-wrap justify-center" data-testid = "shimmer">
            {Array(20).fill("").map((e,index) => (
                <div className = "box-border w-64 h-72 bg-gray-200 m-3 rounded-xl animate-pulse" key = {index}>
                    <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
                    <div className="w-full h-auto">
                        <div className="w-11/12 h-6 m-auto mt-2 rounded-md bg-gray-300"></div>
                        <div className="w-11/12 h-6 m-auto mt-2 rounded-md bg-gray-300"></div>
                        <div className="w-11/12 h-6 m-auto mt-2 rounded-md bg-gray-300"></div>
                        
                    </div>
                </div>
            ))}
        </div>
        
    );
}