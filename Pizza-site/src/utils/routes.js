import {
    Dboard,
    CATEGORIES,
    Create_Categories,
    Delete_Categories,
    Update_Categories,
    PRODUCTS,
    Product_Detail,
    Update_Products,
    Delete_Products,
    Create_Products,
    ORDERS,
    Order_Detail,
    Order_Delete,
    Client_Main,
    Client_Bucket,
    Client_Order,
    Client_Success
} from "./consts"

import Dashboard from "../pages/Dashboard"
import Categories from "../pages/Categories/Categories"
import CreateCategories from "../pages/Categories/CreateCategories"
import DeleteCategories from "../pages/Categories/DeleteCategories"
import UpdateCategories from "../pages/Categories/UpdateCategories"
import Products from "../pages/Products/Products"
import DetailProducts from "../pages/Products/DetailProducts"
import UpdateProducts from "../pages/Products/UpdateProducts"
import DeleteProducts from "../pages/Products/DeleteProducts"
import CreateProducts from "../pages/Products/CreateProducts"
import Orders from "../pages/Orders/Orders"
import OrderDetail from "../pages/Orders/OrderDetail"
import OrderDelete from "../pages/Orders/OrderDelete"
import ClientMain from "../pagesUser/ClientMain"
import Bucket from "../pagesUser/Bucket"
import BuyTicket from "../pagesUser/BuyTicket"
import SuccessPage from "../pagesUser/SuccessPage"

export const routs = [
    {
        path: Dboard,
        element: Dashboard
    },
    {
        path: CATEGORIES,
        element: Categories
    },
    {
        path: Create_Categories,
        element: CreateCategories
    },
    {
        path: Delete_Categories,
        element: DeleteCategories
    },
    {
        path: Update_Categories,
        element: UpdateCategories
    },
    {
        path: PRODUCTS,
        element: Products
    },
    {
        path: Product_Detail,
        element: DetailProducts
    },
    {
        path: Update_Products,
        element: UpdateProducts
    },
    {
        path: Delete_Products,
        element: DeleteProducts
    },
    {
        path: Create_Products,
        element: CreateProducts
    },
    {
        path: ORDERS,
        element: Orders
    },
    {
        path: Order_Detail,
        element: OrderDetail
    },
    {
        path: Order_Delete,
        element: OrderDelete
    },
    {
        path: Client_Main,
        element: ClientMain
    },
    {
        path: Client_Bucket,
        element: Bucket
    },
    {
        path: Client_Order,
        element: BuyTicket
    },
    {
        path: Client_Success,
        element: SuccessPage
    }
];