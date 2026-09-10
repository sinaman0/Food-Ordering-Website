import RestuarentCard from "./RestuarentCard";
//import resList from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listofRestuarent,setlistofRestuarent] = useState([]);
    // same as above to perform operations
    const [filterRestuarent,setfilterRestuarent] = useState([]);
    const [searchtext,setsearchtext] = useState("");

useEffect(()=>{
    fetchData();
},[])

const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5862321&lng=77.3855549&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

 
    const json = await data.json();


    console.log(json);
    setlistofRestuarent( json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
    setfilterRestuarent( json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

}


    return (
        <div className="body">
            <div className="filter">
                <div className="Search">
                    <input type="text" 
                    className="search-box" 
                    value={searchtext}
                    onChange={(e)=>{
                        setsearchtext(e.target.value);
                    }}
                    />
                    <button onClick = {() => {
                          console.log(searchtext)

                          const filteredRestuarent = listofRestuarent.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                          })

                          setfilterRestuarent(filteredRestuarent);
                    }}
                    >Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                   const Filterlist = listofRestuarent.filter((res)=> res.info.avgRating > 4);
                         setfilterRestuarent(Filterlist);
                   // console.log(Filterlist);
                }}
                   
                >
                     Top Rated Resturent
                </button>
            </div>
            <div className="res-container">
                 
                    {listofRestuarent.length === 0 ? (
            <Shimmer />
        ) : (

          /////// this is to display on Screen

          /// for each restaurent we are sending restaurntcard data as props in this format resData = {
    // info: {
    //     name: "McDonald's",
    //     avgRating: 4.5,
    //     cloudinaryImageId: "abc123",
    //     cuisines: ["American", "Fast Food"],
    //     sla: {
    //         deliveryTime: 17
    //     }
    // }
//}

//restuarentcard get these data and present it on screen.

            filterRestuarent.map((restaurant) => (
                <RestuarentCard
                    key={restaurant?.info?.id}
                    resData={restaurant}
                />
            ))
        )}

   
      {/* <RestuarentCard 
         resData = {resList[1]}
      /> */}
  
          

     


            </div>
        </div>
    )
}

export default Body;