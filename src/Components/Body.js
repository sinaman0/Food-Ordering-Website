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
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();


    console.log(json);
    setlistofRestuarent(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setfilterRestuarent(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

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
                         setlistofRestuarent(Filterlist);
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
            filterRestuarent.map((restaurant) => (
                <RestuarentCard
                    key={restaurant.info.id}
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