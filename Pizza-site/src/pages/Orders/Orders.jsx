import OrdersList from "../../components/Orders/OrdersList";

function Orders() {
  return (
    <section class="block">
      <div class="container">
          <div class="block-header">
              <h1 class="title">Заказы</h1>
          </div>
          <OrdersList />
      </div>
  </section>
  );
}

export default Orders;