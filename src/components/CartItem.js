import { IMG_CDN_URL } from "../constants";
import { ITEM_IMG_CDN_URL } from "../constants";


const CartItem= ({name, description, cloudinaryImageID, price}) => {
    return(
        <div className="cart-items">
            <div className="menu-item-details">
                  <h3 className="item-title">{name}</h3>
                  <p className="item-cost">
                    { price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format( price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{ description}</p>
            </div>
            <div className="menu-img-wrapper">
                  {  (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + cloudinaryImageID}
                      alt={name}
                    />
                  )}
                   
                </div>
        </div>

    );
};

export default CartItem;