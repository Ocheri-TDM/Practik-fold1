import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DeleteProducts() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productName, setProductName] = useState("");

  useEffect(() => {
    axios
      .get(`https://195e64a878c915dc.mokky.dev/products/${id}`)
      .then((res) => setProductName(res.data.name))
      .catch((err) => console.error("Ошибка загрузки товара:", err));
  }, [id]);

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`https://195e64a878c915dc.mokky.dev/products/${id}`)
      .then(() => {
        alert("Товар удален!");
        navigate("/admin/products"); 
      })
      .catch((err) => console.error("Ошибка при удалении:", err));
  };

  return (
    <section className="block">
      <div className="container">
        <h1 className="title">
          Вы действительно хотите удалить товар "{productName}"?
        </h1>
        <p className="mb-5">
          Это действие приведет к потере всех данных, связанных с этим товаром. Пожалуйста, подтвердите свое решение.
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

export default DeleteProducts;
