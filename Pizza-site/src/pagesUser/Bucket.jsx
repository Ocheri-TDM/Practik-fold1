import { useCart } from "../utils/CartContext.jsx";
import BackButton from "../components/Buttons/BackButton";
import { Link, useNavigate } from "react-router-dom";
import { Client_Main } from "../utils/consts.js";

function Bucket() {
  const { cart, setCart } = useCart(); 

  const navigate = useNavigate(); 

  const handleOrder = () => {
    navigate("/pizzafy/order");
  };

  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <BackButton />
      <h1 className="title">Моя корзина</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Наименование продукта</th>
            <th>Фото</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Всего</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <img src={item.image} className="cart-img" alt={item.name} />
              </td>
              <td>{item.price} &#8376;</td>
              <td>
                <div className="counter">
                  <button className="circle" onClick={() => decrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="circle" onClick={() => increase(item.id)}>+</button>
                </div>
              </td>
              <td>{item.price * item.quantity} &#8376;</td>
              <td>
                <button className="delete-btn" onClick={() => removeItem(item.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="total-price">Итого: {total} &#8376;</h3>
      <div className="cart-action">
        <button className="cart-action__btn" onClick={handleOrder}>Оформление заказа</button>
        <Link to={Client_Main} className="cart-action__btn">Продолжить покупку</Link>
      </div>
    </div>
  );
}

export default Bucket;
