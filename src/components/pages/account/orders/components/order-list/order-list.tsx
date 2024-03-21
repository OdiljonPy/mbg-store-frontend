import { data } from "../../data";
import OrdersEmpty from "./orders-empty/orders-empty";
import OrderItem from "./order-item/order-item";
import css from "./order-list.module.css";

function OrdersList() {
	if (!data.length) {
		return <OrdersEmpty />;
	}

	return (
		<ul className={css.list}>
			{data.map((item) => (
				<li key={item.id}>
					<OrderItem order={item} />
				</li>
			))}
		</ul>
	);
}

export default OrdersList;
