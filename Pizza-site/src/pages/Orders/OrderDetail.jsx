import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://195e64a878c915dc.mokky.dev/orders/${id}`)
      .then(async (res) => {
        const orderData = res.data;
        setOrder(orderData);

        const productPromises = orderData.items.map((item) =>
          axios.get(`https://195e64a878c915dc.mokky.dev/products/${item.productId}`)
        );

        const productResponses = await Promise.all(productPromises);
        const fullProducts = productResponses.map((res, index) => ({
          ...res.data,
          quantity: orderData.items[index].quantity,
        }));

        setProducts(fullProducts);
      })
      .catch((err) => console.error("Ошибка загрузки заказа:", err));
  }, [id]);

  if (!order || products.length === 0) return <div className="container">Загрузка...</div>;

  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <section className="block">
      <div className="container">
        <span className="btn bg-danger" onClick={() => navigate(-1)}>Назад</span>
        <h1 className="title">Детали заказа</h1>
        <div className="order-detail">
          <p><strong>Имя клиента: </strong>{order.name}</p>
          <p><strong>Телефон клиента: </strong>{order.phone}</p>
          <p><strong>Почта клиента: </strong>{order.email}</p>
          <p><strong>Город, адрес: </strong>{order.city}, {order.address}</p>

          <div className="order-data">
            <h2 className="title">Товары для заказа</h2>
            <div className="order-data__list">
              {products.map((p, index) => (
                <p key={index}>
                  {p.name}, количество: {p.quantity}, цена: {p.price} ₸, итого: {p.price * p.quantity} ₸
                </p>
              ))}
            </div>
          </div>

          <h2 className="title">Итого: {total} ₸</h2>
        </div>
      </div>
    </section>
  );
}

export default OrderDetail;
