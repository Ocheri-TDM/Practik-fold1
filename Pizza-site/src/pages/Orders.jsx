function Orders(){
    return(
        <section class="block">
            <div class="container">
                <div class="block-header">
                    <h1 class="title">Заказы</h1>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                        <th>№</th>
                        <th>Клиент</th>
                        <th>Дата и время заказа</th>
                        <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>id</td>
                        <td>name, phone</td>
                        <td>date</td>
                        <td className="actions-category" style={{ border: "none" }}>
                            <span className="btn bg-success">Смотреть</span>
                            <span className="btn bg-danger">Удалить</span>
                        </td>
                        </tr>
                    </tbody>
                    </table>

            </div>
        </section>
    );
}

export default Orders;