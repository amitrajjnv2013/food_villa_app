import { useState } from "react";
import logo from "/images/logo.jpeg";
import {Link , useNavigate} from "react-router-dom";
import { Provider, useSelector } from "react-redux";



// Title component for display logo
const Title = () => (
    <a href="/">
      <img className="logo" src={logo} alt="Food Villa Logo" />
    </a>
  );

  
  // Header component for header section: Logo, Nav Items
  const Header = () => {
    const [isLoggedin, setIsLoggedin] = useState(true);
    const navigate = useNavigate();
    const cartItems= useSelector((store)=>store.cart.items);

    return (
       
      <div className="header">
        <Title />
        <div className="name">
            <h1>
                <span>F</span>ood
                <span>V</span>illa
            </h1>
            <h4>Delivering happiness...........</h4>

        </div>
        <div className="nav-items">
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
            <li>
              <Link to="/cart">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="cart-count">{cartItems.length}</span>
              </Link>
            </li>
            <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
          </ul>
        </div>
      </div>
       
    );
  };

  export default Header;