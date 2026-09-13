

// import { useEffect, useState } from "react";

// const RestaurentMenu = () => {

//     const [resInfo , setresInfo] = useState("")

//     useEffect(() => {
//         fetchMenu();
//     }, []);

//  const fetchMenu = async () => {
// const data = await fetch(
//   "https://foodfire.onrender.com/api/restaurants"
// );

// const json = await data.json();

// console.log(json);
// setresInfo(json.data);


// };
// //resInfo.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.name

//     return (
//         <div>
//             <h1>{resInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info?.name}</h1>
            
//             <h3>{resInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info?.cuisines.join(",")} - {resInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info?.costForTwo}</h3>

//             <h3>{}</h3>

//             <ul>
//                 <li>Biryani</li>
//                 <li>chole</li>
//                 <li>puri</li>
//             </ul>
//         </div>
//     );
// };

// export default RestaurentMenu;


import { useEffect, useState } from "react";

const RestaurentMenu = () => {

    const [resInfo, setresInfo] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);
const fetchMenu = async () => {

    const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants"
    );

    const json = await data.json();

    console.log(json);

    setresInfo(json.data);

    const restaurant =
        json.data.cards[1].card.card
            .gridElements.infoWithStyle.restaurants[0].info;

    const resId = restaurant.id;

    console.log("Restaurant ID:", resId);


    // Fetch menu
    const menuData = await fetch(
        `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.5862321&lng=77.3855549&submitAction=ENTER&restaurantId=${resId}`
    );

    const menuJson = await menuData.json();

    console.log("MENU:", menuJson);

    setMenu(menuJson.data);
};


    const restaurant =
        resInfo?.cards?.[1]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants?.[0]?.info;

    return (
        <div>

            <h1>{restaurant?.name}</h1>

            <h3>
                {restaurant?.cuisines?.join(", ")}
                {" - "}
                {restaurant?.costForTwo}
            </h3>

            <h3>Menu</h3>

            <ul>
                <li>Biryani</li>
                <li>Chole</li>
                <li>Puri</li>
            </ul>

        </div>
    );
};

export default RestaurentMenu;

