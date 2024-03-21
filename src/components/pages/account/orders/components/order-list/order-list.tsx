import { data } from "../../data";
import OrderItem from "./order-item/order-item";
import css from "./order-list.module.css";

function OrdersList() {
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
