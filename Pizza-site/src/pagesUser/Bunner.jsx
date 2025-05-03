import first from "../assets/images/home/1.webp"
import first2 from "../assets/images/home/2.webp"
import first3 from "../assets/images/home/3.webp"
import first4 from "../assets/images/home/4.webp"
import first5 from "../assets/images/home/5.webp"

function Bunner() {
  return (
    <div class="container">
                    <h1 class="title">Добро пожаловать в Pizzafy!</h1>
                    <div class="stories-list">
                        <img src={first} alt="1" />
                        <img src={first2} alt="1" />
                        <img src={first3} alt="1" />
                        <img src={first4} alt="1" />
                        <img src={first5} alt="1" />
                    </div>
                </div>
  );
}

export default Bunner;