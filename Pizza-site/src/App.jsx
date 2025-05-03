import { useLocation } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Sidebar from "./components/Sidebar";
import Header from "./pagesUser/Header";
import { CartProvider } from "./utils/CartContext.jsx";

function App() {
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <main className={isAdmin ? "wrapper" : "main"}>
      {isAdmin ? <Sidebar /> : <Header />}
      <div className={isAdmin ? "content" : "block"}>
        <AppRoutes />
      </div>
    </main>
  );
}

export default App;
