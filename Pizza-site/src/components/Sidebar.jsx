import logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom"
import { Dboard, CATEGORIES, PRODUCTS, ORDERS, Client_Main } from "../utils/consts"
function Sidebar() {
    return(
        <div className="sidebar">
            <Link to={Client_Main}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <Link to={Client_Main} className="logo-text">Pizzafy.</Link>
                </div>
            </Link>
            <nav className="sidebar-nav">
                <Link to={Dboard} className="sidebar-nav__link">
                    Главная
                </Link>
                <Link to={CATEGORIES} className="sidebar-nav__link">
                    Категории
                </Link>
                <Link to={PRODUCTS} className="sidebar-nav__link">
                    Товары
                </Link>
                <Link to={ORDERS} className="sidebar-nav__link">
                    Заказы
                </Link>
            </nav>
            <p className="sm-text">&copy;2025, Pizzafy. Все права защищены</p>
        </div>
    )
}

export default Sidebar