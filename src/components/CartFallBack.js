import React from "react";
import { NavLink } from "react-router-dom";
import CART_FALLBACK_IMG from "/images/empty cart image.png";

const CartFallback = ({ text, btnText }) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<img src={CART_FALLBACK_IMG} alt="" className="cart-image" />
			<h2 className="cart-text">{text}</h2>
			{btnText && (
				<NavLink to="/">
					<button className="cart-button">
						{btnText}
					</button>
				</NavLink>
			)}
		</div>
	);
};

export default CartFallback;