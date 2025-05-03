import BackButton from "../../components/Buttons/BackButton";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateCategories(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");

    useEffect(() => {
        axios
          .get(`https://195e64a878c915dc.mokky.dev/category/${id}`)
          .then((res) => setName(res.data.name))
          .catch((err) => console.error("Ошибка загрузки категории:", err));
      }, [id]);

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updating ID:", id);
        console.log("New name:", name);

        axios
          .patch(`https://195e64a878c915dc.mokky.dev/category/${id}`, {
            name,
          })
          .then(() => {
            alert("Категория обновлена!");
            navigate("/admin/categories"); 
          })
          .catch((err) => {
            console.error("Ошибка при обновлении:", err.response?.data || err.message);
          });
      };

    return(
        <section class="content">
            <div class="block">
                <div class="container">
                    <BackButton />
                    <h1 class="title">Изменить категорию</h1>
                    <form class="form" onSubmit={handleSubmit}>
                        <div class="form-control">
                            <label htmlFor="name">Название категории: { name }</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                type="text"
                                placeholder="Введите категорию"
                                required
                            />
                        </div>
                        <button class="btn bg-warning" type="submit">Изменить</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default UpdateCategories;