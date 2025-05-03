import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../../components/Buttons/BackButton";

function DetailProducts() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://195e64a878c915dc.mokky.dev/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Ошибка загрузки товара:", err));
  }, [id]);

  if (!product) {
    return <div className="container">Загрузка...</div>;
  }

  return (
    <section className="block">
      <div className="container">
        <BackButton />
        <h1 className="title">Детали товара</h1>
        <div className="product-detail">
          <img
            src={product.image || "https://fakeimg.pl/500x500"}
            alt={product.name}
            className="product-img"
          />
          <div className="product-detail__content">
            <h2 className="product-detail__title">{product.name}</h2>
            <p>Цена: {product.price} &#8376;</p>
            <p>Описание: {product.description}</p>
            <p>
              Категория:{" "}
              <span className="category-badge">
                {typeof product.category === "object"
                  ? product.category.name
                  : product.category}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailProducts;
