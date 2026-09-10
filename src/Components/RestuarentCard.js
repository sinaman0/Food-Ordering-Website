import { CDN_URL } from "../Utils/Constant";

const RestuarentCard = (props) => {
    const { resData } = props;

    return (
        <div className="res-card">
            <img
            
                className="res-logo"
                src={ CDN_URL + resData.info.cloudinaryImageId}
            />

{/* getting data as props and this means const { resData } = props changing props.resdata to resdata and we can access whatever we like from those object  */}
            <h3>{resData.info.name}</h3>
            <h3>{resData.info.cuisines.join(", ")}</h3>
            <h3>{resData.info.avgRating} Stars</h3>
            <h3>{resData.info.sla.deliveryTime} min</h3>
        </div>
    );
};

export default RestuarentCard;