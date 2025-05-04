import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../utils/CartContext";
import axios from "axios";
import "../assets/css/buyticket.css";
import BackButtonClient from "../components/Buttons/BackButtonClient";

function BuyTicket() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "Алматы",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const navigate = useNavigate();
  const { cart, setCart } = useCart();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      city: form.city,
      address: form.address,
      date: new Date().toISOString(),
      items: cart.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      await axios.post("https://195e64a878c915dc.mokky.dev/orders", orderData);
      alert("Заказ успешно оформлен!");
      setCart([]);
      navigate("/pizzafy/success");
    } catch (error) {
      console.error("Ошибка при отправке заказа:", error);
      alert("Произошла ошибка при оформлении заказа.");
    }
  };

  return (
    <div className="buy-container1">
      <BackButtonClient />
      <h1 className="buy-title1">Оформление заказа</h1>
      <form className="buy-form1" onSubmit={handleSubmit}>
        <div className="form-control1">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            required
          />
        </div>

        <div className="form-control1">
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Телефон: +7 XXX XXX XX XX"
            required
          />
        </div>

        <div className="form-control1">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Электронная почта"
            required
          />
        </div>

        <div className="form-control1">
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Адрес доставки"
            required
          ></textarea>
        </div>

        <div className="form-control1">
          <select name="city" value={form.city} onChange={handleChange}>
            <option value="Алматы">Алматы</option>
            <option value="Астана">Астана</option>
          </select>
        </div>

        <h3 className="card-title1">Платёжные данные</h3>
        <div className="form-control1">
          <input
            type="text"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            placeholder="0000 0000 0000 0000"
            maxLength={19}
          />
        </div>

        <div className="card-details1">
          <input
            type="text"
            name="cardExpiry"
            value={form.cardExpiry}
            onChange={handleChange}
            placeholder="MM/YY"
            maxLength={5}
          />
          <input
            type="text"
            name="cardCVV"
            value={form.cardCVV}
            onChange={handleChange}
            placeholder="CVV"
            maxLength={3}
          />
        </div>

        <button type="submit" className="send-btn1">Оформить заказ</button>
      </form>
    </div>
  );
}

export default BuyTicket;
