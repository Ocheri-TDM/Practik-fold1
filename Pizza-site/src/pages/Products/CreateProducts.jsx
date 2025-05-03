import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../../components/Buttons/BackButton";

function CreateProducts() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://195e64a878c915dc.mokky.dev/category")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Ошибка при загрузке категорий:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://195e64a878c915dc.mokky.dev/products", {
        name,
        price: Number(price),
        description,
        image,
        category: categoryId,
      })
      .then(() => {
        alert("Товар создан!");
        navigate("/admin/products");
      })
      .catch((err) => console.error("Ошибка при создании товара:", err));
  };

  return (
    <section className="block">
      <div className="container">
        <BackButton />
        <h1 className="title">Создать товар</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Название товара</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              placeholder="Введите товар"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="price">Цена</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              type="number"
              placeholder="Введите цену"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="description">Описание</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Введите описание"
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="image">Фото</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              id="image"
              type="url"
              placeholder="Вставьте URL фото"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Укажите категорию</label>
            <select
              id="category"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              <option value="">Выберите категорию</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <button className="btn bg-primary" type="submit">
            Создать
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateProducts;
