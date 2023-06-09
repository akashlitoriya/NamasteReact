import React from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComponent from "./Components/Header";
import { Title } from "./Components/Header"; /*If we don't import this our app will work as Title is used in HeaderComponent, but if 
we want to use it separately then we need to import it */
import Body from "./Components/Body";
import Footer from "./Components/Footer"

/*

HTML using React.createElement() --> Replaced by JSX
const heading = React.createElement(
    "h1",
    {
      id: "title",
      key: "h1",
    },
    "heading"
  );
  const heading1 = React.createElement(
    "h1",
    {
      id: "title2",
      key: "h2",
    },
    "heading1"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );
  */
/*
JSX - tocreateHTML
const heading = <h1>Hello World</h1>;
const heading2 = (
  <h1 id = "title" key = "heading">
    Hello World Again!
  </h1>
)

Functional Components
const HeaderComponent = () => {
  return (
    <div>
      {heading2}
      <h2>Namaste React</h2>
      <h2>Hi All</h2>
    </div>
  );
};
*/
const AppLayout = ()=>{
  return (
    <>
    <HeaderComponent />
    <Body />
    <Footer /></>
    
  );
};

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<AppLayout />);