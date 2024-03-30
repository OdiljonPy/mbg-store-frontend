import { RootState } from "@/store";
import { useSelector } from "react-redux";
import OrderItem from "./order-item/order-item";
import css from "./order-list.module.css";
import OrdersEmpty from "./orders-empty/orders-empty";
import OrderItemSkeleton from "./skeleton/skeleton";

function OrdersList() {
	const { orders, loading, error } = useSelector(
		(state: RootState) => state.orders
	);

	if (loading)
		return (
			<ul className={css.list}>
				{Array.from({ length: 3 }).map((_, index) => (
					<li key={index}>
						<OrderItemSkeleton />
					</li>
				))}
			</ul>
		);

	if (error || !orders) return;

	if (!orders.length) {
		return <OrdersEmpty />;
	}

	return (
		<ul className={css.list}>
			{orders.map((item) => (
				<li key={item.id}>
					<OrderItem order={item} />
				</li>
			))}
		</ul>
	);
}

export default OrdersList;
