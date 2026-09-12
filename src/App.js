import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header";
import Body from "./Components/Body";


import { createBrowserRouter, RouterProvider} from "react-router-dom";



import About from "./Components/About";



const Appi = () => {
    return (
        <div>
            <Header />
            <Body/>
        </div>
    );
};


const appRouter = createBrowserRouter([
{
   path:"/",
   element:<Appi/>
},
{
 path:"/about",
   element:<About/>
},
{
 path:"/contact",
   element:<About/>
}

])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
