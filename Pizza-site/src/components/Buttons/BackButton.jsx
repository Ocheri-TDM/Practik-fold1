import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BackButton() {

    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState("");

    return(
        <span
            className="btn bg-danger text-white cursor-pointer"
            onClick={() => navigate(-1)}
                >
             Назад
        </span>
    );
}

export default BackButton;