import { useEffect, useState } from "react";
import axios from "axios";

import CategoryItem from "./CategoryItem";

function CategoriesList() {
    const [category, setCategories] = useState([]);

    useEffect(() => {
        axios
          .get("https://195e64a878c915dc.mokky.dev/category")
          .then((res) => setCategories(res.data))
          .catch((err) => console.error("Ошибка загрузки категорий:", err));
      }, []);

    return(
        <table class="table">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Название</th>
                    <th>Действие</th>
                </tr>
            </thead>
            <tbody>
            {category.map((category, index) => (
                <CategoryItem key={category.id} category={category} index={index} />
                ))}
            </tbody>
        </table>
    );
}

export default CategoriesList;