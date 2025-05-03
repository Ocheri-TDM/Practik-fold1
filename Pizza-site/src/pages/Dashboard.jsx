import home from "../assets/images/menu/home.svg"
import categories from "../assets/images/menu/categories.svg"
import products from "../assets/images/menu/products.svg"
import orders from "../assets/images/menu/orders.svg"
import { Link } from "react-router-dom";
import { CATEGORIES, Dboard, ORDERS, PRODUCTS } from "../utils/consts";

function Dashboard() {
    return (
        <section class="block">
                <div class="container">
                    <h1 class="title">Админ панель</h1>
                    <div class="dashboard-list">
                        <Link to={Dboard} class="dashboard-item bg-primary">
                            <img src={home} alt="Home" />
                            <h3 class="dashboard-item__title">Главная</h3>
                        </Link>
                        <Link to={CATEGORIES} class="dashboard-item bg-warning">
                            <img src={categories} alt="Category" />
                            <h3 class="dashboard-item__title">Категории</h3>
                        </Link>
                        <Link to={PRODUCTS} class="dashboard-item bg-danger">
                            <img src={products} alt="Products" />
                            <h3 class="dashboard-item__title">Товары</h3>
                        </Link>
                        <Link to={ORDERS} class="dashboard-item bg-success">
                            <img src={orders} alt="Orders" />
                            <h3 class="dashboard-item__title">Заказы</h3>
                        </Link>
                    </div>
                </div>
            </section>
    );
}

export default Dashboard;