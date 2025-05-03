import {Routes, Route} from "react-router-dom";
import { routs } from "../utils/routes";

function AppRoutes() {
    return(
        <Routes>
            {routs.map((route, index) => (
                <Route key={index} path={route.path} element={<route.element />}/>
            ))}
        </Routes>
    );
}

export default AppRoutes;