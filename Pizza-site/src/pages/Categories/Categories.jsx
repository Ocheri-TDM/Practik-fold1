import { Link } from "react-router-dom";
import CategoriesList from "../../components/Categories/CategoriesList";
import { Create_Categories } from "../../utils/consts";

function Categories() {
    return(
        <section className="block">
                <div className="container">
                    <div className="block-header">
                        <h1 className="title">Категории</h1>
                        <Link to={Create_Categories} className="btn bg-primary">Создать</Link>
                    </div>
                    <CategoriesList />
                </div>
            </section>
    );
}

export default Categories