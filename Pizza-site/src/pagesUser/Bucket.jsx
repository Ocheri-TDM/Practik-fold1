import { useCart } from "../utils/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Client_Main } from "../utils/consts";
import { FaTrash } from "react-icons/fa";
import "../assets/css/bucket.css";
import BackButtonClient from "../components/Buttons/BackButtonClient.jsx";

function Bucket() {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const increase = (id) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrease = (id) => {
    setCart(prev => prev.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bucket-container1">
      <BackButtonClient />
      <h1 className="bucket-title1">Моя корзина</h1>

      <div className="cart-list1">
        {cart.map((item) => (
          <div className="cart-item1" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item__img1" />
            <div className="cart-item__info1">
              <h3>{item.name}</h3>
              <p>{item.price} ₸</p>
              <div className="cart-counter1">
                <button onClick={() => decrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>
            </div>
            <div className="cart-item__actions1">
              <p>{item.price * item.quantity} ₸</p>
              <button onClick={() => removeItem(item.id)} className="delete-icon1">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary1">
        <h3>Итого: {total} ₸</h3>
        <div className="cart-action1">
          <button onClick={() => navigate("/pizzafy/order")}>Оформить заказ</button>
          <Link to={Client_Main}>Продолжить покупки</Link>
        </div>
      </div>
    </div>
  );
}

export default Bucket;
