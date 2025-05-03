import { Link } from "react-router-dom";
import { Create_Products } from "../../utils/consts";
import ProductsList from "../../components/Products/ProductSList";

function Products() {
    return(
        <section class="block">
                <div class="container">
                    <div class="block-header">
                        <h1 class="title">Товары</h1>
                        <Link to={Create_Products} class="btn bg-primary">Создать</Link>
                    </div>
                    <ProductsList />
                </div>
            </section>
    );
};

export default Products;