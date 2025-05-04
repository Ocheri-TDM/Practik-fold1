import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import { Client_Bucket, Client_Main } from "../utils/consts";
import { useCart } from "../utils/CartContext.jsx";
import "../assets/css/header.css"; 
function Header() {
  const { cart } = useCart() || {};
  const uniqueItemCount = cart?.length || 0;

  return (
    <header className="header1">
      <div className="header-container1">
        <Link to={Client_Main} className="logo-link1">
          <img src={logo} alt="Pizzafy Logo" className="logo-img1" />
          <span className="logo-text1">Pizzafy</span>
        </Link>

        <div className="header-actions1">
          <Link to="/" className="icon-button1">
            <FaUser />
          </Link>
          <Link to={Client_Bucket} className="cart-button1 icon-button1">
            <FaShoppingCart />
            <span className="cart-count1">{uniqueItemCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
