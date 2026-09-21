


import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const RestaurentMenu = () => {

    const [resInfo, setresInfo] = useState(null);
    const [menu, setMenu] = useState(null);

const {resId} = useParams();
//console.log(params);



    useEffect(() => {
        fetchMenu();
    }, [resId]);

const fetchMenu = async () => {

//     const data = await fetch(
//         "https://foodfire.onrender.com/api/restaurants"
//     );

//     const json = await data.json();

//     console.log(json);

//     setresInfo(json.data);

//     const restaurant =
//         json.data.cards[1].card.card
//             .gridElements.infoWithStyle.restaurants[0].info;

//    // const resId = restaurant.id;


//     console.log("Restaurant ID:", resId);


    // Fetch menu
    const menuData = await fetch(
        `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.5862321&lng=77.3855549&submitAction=ENTER&restaurantId=${resId}`
    );

    const menuJson = await menuData.json();

    console.log("MENU:", menuJson);

    setMenu(menuJson.data);
    
};




const regularCards =
    menu?.cards
        ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
        ?.groupedCard
        ?.cardGroupMap
        ?.REGULAR
        ?.cards || [];

const data = regularCards.flatMap((card) => {
    const cardData = card?.card?.card;

    if (cardData?.itemCards) {
        return cardData.itemCards;
    }

    if (cardData?.categories) {
        return cardData.categories.flatMap(
            (category) => category.itemCards || []
        );
    }

    return [];
});
console.log("Regular Cards:", regularCards);
console.log("Menu Items:", data);


    return (
        <div>

            <h1>restaurantId : {resId}</h1>

            <h3>Menu</h3>

            <ul>
                {/* <li>{data?.[0]?.card?.info?.name}</li>
                <li>{data?.[1]?.card?.info?.name}</li>
                <li>{data?.[2]?.card?.info?.name}</li> */}

               {data?.map((item, index) => (
    <li key={`${item.card.info.id}-${index}`}>
        {item.card.info.name} - Rs. {item.card.info.price / 100}
    </li>
))}
            </ul>

            

        </div>
    );
};

export default RestaurentMenu;

