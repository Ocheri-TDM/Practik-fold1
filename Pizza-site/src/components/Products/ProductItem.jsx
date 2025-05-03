import { Link } from "react-router-dom";
import { Delete_Products, Product_Detail, Update_Products } from "../../utils/consts";
function ProductItem({products}) {
  return (
    <tr>
        <td>{products.id}</td>
        <td>{products.name}</td>
        <td colSpan="3" className="actions-products" style={{border: "none"}}>
            <Link to={Product_Detail.substring(0, Product_Detail.length - 3) + products.id} class="btn bg-success">Смотреть</Link>
            <Link to={Update_Products.substring(0, Update_Products.length - 3) + products.id} class="btn bg-warning">Изменить</Link>
            <Link to={Delete_Products.substring(0, Delete_Products.length - 3) + products.id} class="btn bg-danger">Удалить</Link>
        </td>
    </tr>
  );
}

export default ProductItem;