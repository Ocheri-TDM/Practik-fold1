import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect  } from "react";
import axios from "axios";

function DeleteCategories(){
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState("");
    const { id } = useParams();
    

    useEffect(() => {
        axios
        .get(`https://195e64a878c915dc.mokky.dev/category/${id}`)
        .then((res) => setCategoryName(res.data.name))
        .catch((err) => {
            console.error("Ошибка загрузки категории:", err);
            navigate("/admin/categories"); 
        });
    }, [id, navigate]);

    const handleDelete = (e) => {
        e.preventDefault();

        axios
        .delete(`https://195e64a878c915dc.mokky.dev/category/${id}`)
        .then(() => {
            alert("Категория удалена!");
            navigate("/admin/categories");
        })
        .catch((err) => console.error("Ошибка при удалении:", err));
    };

    return(
        <section class="block">
                <div class="container">
                    <h1 class="title">Вы действительно хотите удалить категорию "{categoryName}"?</h1>
                    <p class="mb-5">
                        Это действие приведет к потере всех данных, связанных с этими категориями. Пожалуйста, подтвердите свое решение.
                    </p>
                    <form class="actions-sm" onSubmit={handleDelete}>
                        <button type="submit" class="btn bg-danger">
                            Да
                        </button>
                        <span
                            className="btn bg-primary"
                            onClick={() => navigate(-1)}
                            >
                            Нет
                        </span>
                    </form>
                </div>
            </section>
    );
}

export default DeleteCategories;


