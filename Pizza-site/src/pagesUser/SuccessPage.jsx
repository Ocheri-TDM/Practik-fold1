import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => clearTimeout(timer); // Очистка таймера при размонтировании
  }, [navigate]);

  return (
    <div className="container">
      <h1 className="title">🎉 Спасибо за заказ!</h1>
      <p>Мы свяжемся с вами для подтверждения доставки.</p>
    </div>
  );
}

export default SuccessPage;
