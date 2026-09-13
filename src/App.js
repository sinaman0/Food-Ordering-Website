import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header";
import Body from "./Components/Body";
import { Error } from "./Components/Error";

import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";



import About from "./Components/About";
import Contact from "./Components/Contact us";
import RestaurentMenu from "./Components/Restaurent Menu";


const Appi = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};


const appRouter = createBrowserRouter([
{
   path:"/",
   element:<Appi/>,
   children:([
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },

    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/restaurent/:resId",
      element:<RestaurentMenu/>
    }
   ]),

   errorElement:<Error/>
},


])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
