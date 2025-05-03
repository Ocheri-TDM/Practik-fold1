import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function OrderDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`https://195e64a878c915dc.mokky.dev/orders/${id}`)
      .then(() => {
        alert("Заказ удалён");
        navigate("/admin/orders"); 
      })
      .catch((err) => console.error("Ошибка при удалении заказа:", err));
  };

  return (
    <section className="block">
      <div className="container">
        <h1 className="title">Вы действительно хотите удалить заказ №{id}?</h1>
        <p className="mb-5">
          Это действие приведет к потере всех данных, связанных с этим заказом. Пожалуйста, подтвердите свое решение.
        </p>
        <form className="actions-sm" onSubmit={handleDelete}>
          <button type="submit" className="btn bg-danger">
            Да
          </button>
          <span className="btn bg-primary" onClick={() => navigate(-1)}>
            Нет
          </span>
        </form>
      </div>
    </section>
  );
}

export default OrderDelete;
