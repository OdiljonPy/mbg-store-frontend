import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/header";
import OrdersList from "./components/order-list/order-list";
import Search from "./components/search/search";

import FormError from "@/components/shared/form-error/form-error";
import Pagination from "@/components/shared/pagination/pagination";
import { useClientSearch } from "@/hooks/use-client-search";
import { fetchOrders } from "@/slices/order/ordersSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect, useState } from "react";
import { OrdersSearchContext } from "./context/orders-search-context";
import css from "./wrapper.module.css";

const Wrapper = () => {
	const { orders, error } = useSelector((state: RootState) => state.orders);
	const dispatch = useDispatch<AppDispatch>();
	const [size, setSize] = useState(10);

	useEffect(() => {
		dispatch(fetchOrders({ page: 1, size }));
	}, [dispatch, size]);

	const { filteredData, onSearchValueChange, searchValue } = useClientSearch({
		data: orders.content || [],
		searchBy: ["id"],
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
				{orders && !!orders.numberOfElements && (
					<div className={css.search_box}>
						<Search />
					</div>
				)}
				<OrdersList />
				{orders.totalElements > 10 ? (
					<div className={css.pagination}>
						<Pagination
							content
							limit={10}
							offset={size}
							total={orders.totalElements}
							setOffset={(size) => setSize(size)}
						/>
					</div>
				) : (
					""
				)}
			</section>
		</OrdersSearchContext.Provider>
	);
};

export default Wrapper;
