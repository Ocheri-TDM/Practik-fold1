import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../utils/CartContext";
import BackButton from "../components/Buttons/BackButton";
import axios from "axios";

function BuyTicket() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "Алматы",
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
      date: new Date().toISOString(),
      city: form.city,
      address: form.address,
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
    <div className="container">
      <BackButton />
      <h1 className="title">Оформление заказа</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name" className="label">Ваше имя</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Введите имя"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="phone" className="label">Номер телефона</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Введите номер телефона: +7 XXX XXX XX XX"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="email" className="label">Почта</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Введите адрес электронной почты: test@example.com"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="address" className="label">Напишите адрес</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Введите адрес, дом, квартиру, домофон"
            required
          ></textarea>
        </div>

        <div className="form-control">
          <label htmlFor="city" className="label">Укажите город</label>
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
          >
            <option value="Алматы">Алматы</option>
            <option value="Астана">Астана</option>
          </select>
        </div>

        <button type="submit" className="send-btn">Оформить заказ</button>
      </form>
    </div>
  );
}

export default BuyTicket;
