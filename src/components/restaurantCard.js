
import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  areaName,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      {/* <h5>{area}</h5> */}
      <span>
        <h4
          style={
            avgRating < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i class="fa fa-star" aria-hidden="true"></i>
          {avgRating}
        </h4>
         <h4>•</h4>
        <h4>{locality},{areaName}</h4>
        <h4>•</h4>
        <h4>{costForTwo}</h4> 
      </span>
    </div>
  );
};

export default RestaurantCard;