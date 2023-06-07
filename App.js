import React from "react";
import  ReactDOM  from "react-dom/client";
// HTML using React.createElement() --> Replaced by JSX
// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//       key: "h1",
//     },
//     "heading"
//   );
//   const heading1 = React.createElement(
//     "h1",
//     {
//       id: "title2",
//       key: "h2",
//     },
//     "heading1"
//   );
  
//   const container = React.createElement(
//     "div",
//     {
//       id: "container",
//     },
//     [heading, heading1]
//   );
  

//JSX - tocreateHTML
const heading = <h1>Hello World</h1>;
const heading2 = (
  <h1 id = "title" key = "heading">
    Hello World Again!
  </h1>
)

//Functional Components
const HeaderComponent = () => {
  return (
    <div>
      {heading2}
      <h2>Namaste React</h2>
      <h2>Hi All</h2>
    </div>
  );
};
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<HeaderComponent />);