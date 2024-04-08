import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/header";
import OrdersList from "./components/order-list/order-list";
import Search from "./components/search/search";

import FormError from "@/components/shared/form-error/form-error";
import { useClientSearch } from "@/hooks/use-client-search";
import { fetchOrders } from "@/slices/order/ordersSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import { OrdersSearchContext } from "./context/orders-search-context";
import css from "./wrapper.module.css";

const Wrapper = () => {
	const { orders, error } = useSelector((state: RootState) => state.orders);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchOrders());
	}, [dispatch]);

	const { filteredData, onSearchValueChange, searchValue } = useClientSearch({
		data: Array.isArray(orders) ? orders : [],
		searchBy: ["created_at", "id"],
	});

	if (error)
		return (
			<div>
				<FormError error={"Что-то пошло не так"} />
			</div>
		);

	return (
		<OrdersSearchContext.Provider
			value={{ filteredData, searchValue, onSearchValueChange }}
		>
			<section className={css.orders}>
				<Header />
				{orders && !!orders.length && (
					<div className={css.search_box}>
						<Search />
					</div>
				)}
				<OrdersList />
			</section>
		</OrdersSearchContext.Provider>
	);
};

export default Wrapper;
