import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../assets/css/buyticket.css";

function BackButtonClient() {

    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState("");

    return(
        <span
            className="send-btn1 text-white cursor-pointer"
            onClick={() => navigate(-1)}
                >
             Назад
        </span>
    );
}

export default BackButtonClient;