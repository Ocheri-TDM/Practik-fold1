import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../utils/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import ProductBlock from "../components/Products/ProductBlock.jsx";
function Menu() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const { addToCart } = useCart();
    const navigate = useNavigate();
  
    useEffect(() => {
        axios.get("https://195e64a878c915dc.mokky.dev/products")
          .then((res) => {
            console.log("📦 products:", res.data);
            setProducts(res.data);
          })
          .catch(console.error);
      
        axios.get("https://195e64a878c915dc.mokky.dev/category")
          .then((res) => {
            console.log("📂 categories:", res.data);
            setCategories(res.data);
          })
          .catch(console.error);
      }, []);
      
  
    const handleAddToCart = (product) => {
      addToCart(product);
      navigate("/pizzafy/bucket");
    };
  
    return (
      <section className="block">
        <div className="container">
          <h1 className="title">Меню</h1>
  
          {categories.map((category) => {
            const categoryProducts = products
              .filter((p) => Number(p.category) === category.id)
              .map((p) => ({
                ...p,
                categoryName: category.name,
              }));
  
            return (
              <ProductBlock
                key={category.id}
                category={category}
                products={categoryProducts}
                onAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
      </section>
    );
  }

export default Menu;