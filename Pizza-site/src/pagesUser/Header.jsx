import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Client_Bucket, Client_Main } from "../utils/consts";
import { useCart } from "../utils/CartContext.jsx"; 

function Header() {
  const { cart } = useCart() || {};
  const uniqueItemCount = cart?.length || 0;

  return (
    <header className="header">
      <div className="container header-flex">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <Link to={Client_Main} className="logo-text">Pizzafy.</Link>
        </div>
        <Link to={Client_Bucket} className="cart-button">
          Корзина : {uniqueItemCount}
        </Link>
      </div>
    </header>
  );
}

export default Header;
