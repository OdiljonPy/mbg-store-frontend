import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useOrdersSearch } from "../../hooks/use-orders-search";
import OrderItem from "./order-item/order-item";
import css from "./order-list.module.css";
import OrdersEmpty from "./orders-empty/orders-empty";
import OrderItemSkeleton from "./skeleton/skeleton";

function OrdersList() {
	const { orders, loading, error } = useSelector(
		(state: RootState) => state.orders
	);

	const { filteredData } = useOrdersSearch();

	if (loading)
		return (
			<ul className={css.list}>
				{Array.from({ length: orders.content?.length || 3 }).map(
					(_, index) => (
						<li key={index}>
							<OrderItemSkeleton />
						</li>
					)
				)}
			</ul>
		);

	if (error || !orders) return;

	if (!orders.totalElements) {
		return <OrdersEmpty />;
	}

	return (
		<ul className={css.list}>
			{filteredData.map((item) => (
				<li key={item.id}>
					<OrderItem order={item} />
				</li>
			))}
		</ul>
	);
}

export default OrdersList;
