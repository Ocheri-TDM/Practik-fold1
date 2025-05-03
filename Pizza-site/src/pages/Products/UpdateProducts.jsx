import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../../components/Buttons/BackButton";

function UpdateProducts() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://195e64a878c915dc.mokky.dev/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Ошибка загрузки товара:", err));

    axios
      .get("https://195e64a878c915dc.mokky.dev/category")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Ошибка загрузки категорий:", err));
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProduct((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`https://195e64a878c915dc.mokky.dev/products/${id}`, product)
      .then(() => {
        alert("Товар обновлен!");
        navigate("/admin/products");
      })
      .catch((err) => console.error("Ошибка при обновлении товара:", err));
  };

  return (
    <section className="block">
      <div className="container">
        <BackButton />
        <h1 className="title">Изменить товар</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Название товара</label>
            <input
              value={product.name}
              id="name"
              type="text"
              placeholder="Введите товар"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="price">Цена</label>
            <input
              value={product.price}
              id="price"
              type="number"
              placeholder="Введите цену"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="description">Описание</label>
            <textarea
              value={product.description}
              id="description"
              placeholder="Введите описание"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="image">Фото</label>
            <input
              value={product.image}
              id="image"
              type="url"
              placeholder="Вставьте URL фото"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Укажите категорию</label>
            <select
              id="category"
              value={product.category}
              onChange={handleChange}
              required
            >
              <option value="">Выберите категорию</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <button className="btn bg-warning" type="submit">
            Изменить
          </button>
        </form>
      </div>
    </section>
  );
}

export default UpdateProducts;
