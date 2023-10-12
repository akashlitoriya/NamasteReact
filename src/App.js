import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComponent from "./Components/Header";
import { Title } from "./Components/Header"; /*If we don't import this our app will work as Title is used in HeaderComponent, but if 
we want to use it separately then we need to import it */
import Body from "./Components/Body";
import Footer from "./Components/Footer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./Components/About";
import { Error } from "./Components/ErrorPage";
import { Contact } from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Profile } from "./Components/Profile";
import { lazy, Suspense} from "react";
import { ShimmerUI } from "./Components/ShimmerUI";
import UserContext from "./util/UserContext";
import { Provider } from "react-redux";
import mystore from "./util/store";
import Cart from "./Components/Cart";
import Carousel from "./Components/Carousel";
import { Toaster } from "react-hot-toast";
const InstaMart = lazy(() => 
  import("./Components/InstaMart")
)

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
  const [user, setUser] = useState({
    name: "Akash Litoriya",
    email: "akashlitoriya8@gmail.com"
  });

  return (
    <Provider store = {mystore}>
      <UserContext.Provider value = {{
        user: user,
        setUser: setUser
        }
      }>
        
        <HeaderComponent />
        <Outlet />
        <Footer />
        <Toaster />
        </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <Error />,
    children : [
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/about",
        element: <About />,
        children : [{
          path: "profile", //Do not use slash here, because it means you are providing path relative to root
          element : <Profile />
        }]

      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      }, 
      {
        path: "/instamart",
        element: <Suspense fallback = {<ShimmerUI />}><InstaMart /></Suspense>
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path:"/carousel",
        element: <Carousel />
      }
    ]
  },
  
])


  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<RouterProvider router = {appRouter} />);