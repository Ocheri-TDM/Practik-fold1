import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductsList() {
    const [products, setCategories] = useState([]);

    useEffect(() => {
        axios
          .get("https://195e64a878c915dc.mokky.dev/products")
          .then((res) => setCategories(res.data))
          .catch((err) => console.error("Ошибка загрузки категорий:", err));
      }, []);
    
    return (
        <table class="table">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Название</th>
                    <th>Действие</th>
                </tr>
            </thead>
            <tbody>
                {products.map((products, index) => (
                <ProductItem key={products.id} products={products} index={index} />
                ))}
            </tbody>
        </table>
    );
}

export default ProductsList;   