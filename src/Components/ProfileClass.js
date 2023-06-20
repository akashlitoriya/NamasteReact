import React from "react";
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            UserInfo: {
                name:"Dummy UserName",
                location: "Dummy Location",
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akashlitoriya");
        const json = await data.json();
        console.log(json);
        this.setState({
            UserInfo : json,
        });
        console.log(json)
    }
    render(){
        return (
            <div>
                <h1>Profile Class Based Component</h1>
                <h3>{this.state.UserInfo.name}</h3>
                <h3>{this.state.UserInfo.location}</h3>
                {/* <h3>Count : {this.state.count}</h3> */}
                {/* <button onClick = {()=>{
                    this.setState({
                        count : 1,
                    });
                }}>Set Count</button> */}
            </div>
        );
    }
}
export default ProfileClass;