import { Delete_Categories, Update_Categories } from "../../utils/consts";
import { Link } from "react-router-dom";

function CategoryItem({category}) {
    return(
        <tr>
           <td>{category.id}</td>
           <td>{category.name}</td>
           <td colSpan="3" className="actions-category" style={{border: "none"}}>
               <Link to={Update_Categories.substring(0, Update_Categories.length - 3) + category.id} className="btn bg-warning">Изменить</Link>
               <Link to={Delete_Categories.substring(0, Delete_Categories.length -3) + category.id} className="btn bg-danger">Удалить</Link>
           </td>
       </tr>
    );
}

export default CategoryItem