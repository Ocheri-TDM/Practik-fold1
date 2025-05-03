import { useEffect, useState } from "react";
import axios from "axios";
import OrderItem from "./OrderItem";

function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://195e64a878c915dc.mokky.dev/orders")
      .then((res) => {
        const sortedOrders = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setOrders(sortedOrders);
      })
      .catch((err) => console.error("Ошибка загрузки заказов:", err));
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>№</th>
          <th>Клиент</th>
          <th>Дата и время заказа</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <OrderItem key={order.id} order={order} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}

export default OrdersList;
