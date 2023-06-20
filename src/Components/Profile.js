import { useState } from "react"

export const Profile = (props) =>{
    const [count,setCount] = useState(0);
    const [count1] = useState(0);
    return (
        <>
            <h1>Profile Func. Based</h1>
            <h3>{props.name}</h3>
            <p>Count : {count}</p>
            <button onClick ={()=>{
                setCount(1);
            }} >SetCount</button>
        </>
    )
}