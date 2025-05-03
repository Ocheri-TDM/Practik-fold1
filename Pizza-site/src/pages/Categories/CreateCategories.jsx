import BackButton from "../../components/Buttons/BackButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateCategories() {

    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post("https://195e64a878c915dc.mokky.dev/category", { name })
        .then(() => {
            alert("Категория создана!");
            navigate("/admin/categories");
        })
        .catch((err) => {
            console.error("Ошибка при создании категории:", err);
        });
    };

    return(
        <section class="block">
                <div class="container">
                <BackButton />
                    <h1 class="title">Создать категорию</h1>
                    <form class="form" onSubmit={handleSubmit}>
                        <div class="form-control">
                            <label form="name">Название категории</label>
                            <input 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name" 
                                type="text" 
                                placeholder="Введите категорию" 
                                required 
                            />
                        </div>
                        <button class="btn bg-primary" type="submit">Создать</button>
                    </form>
                </div>
            </section>
    );
}

export default CreateCategories;