import { Link } from "react-router-dom";
import { Order_Delete, Order_Detail } from "../../utils/consts";

function OrderItem({ order, index }) {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.client_name}, {order.phone}</td>
      <td>{new Date(order.date).toLocaleString()}</td>
      <td colSpan="3" className="actions-category" style={{ border: "none" }}>
        <Link to={Order_Detail.substring(0, Order_Detail.length - 3) + order.id} className="btn bg-success">
          Смотреть
        </Link>
        <Link to={Order_Delete.substring(0, Order_Delete.length - 3) + order.id} className="btn bg-danger">
          Удалить
        </Link>
      </td>
    </tr>
  );
}

export default OrderItem;
