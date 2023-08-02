import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import CartFallback from "./CartFallBack";
import { clearCart } from "./cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return cartItems.length > 0 ? (
    <div className="cart-item">
      <h1 className="cart-item-text">CART ITEMS</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <button className="cart-button" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
    </div>
  ) : (
    <div className="empty-cart-item">
      <CartFallback
        text={"Your cart is empty ! "}
        btnText={"SEE RESTAURANTS NEAR YOU"}
      />
    </div>
  );
};

export default Cart;
