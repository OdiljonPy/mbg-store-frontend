import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/header";
import OrdersList from "./components/order-list/order-list";
import Search from "./components/search/search";

import FormError from "@/components/shared/form-error/form-error";
import Pagination from "@/components/shared/pagination/pagination";
import useDebounce from "@/hooks/use-debounce";
import { fetchOrders } from "@/slices/order/ordersSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect, useState } from "react";
import css from "./wrapper.module.css";

const Wrapper = () => {
	const { orders, error } = useSelector((state: RootState) => state.orders);
	const dispatch = useDispatch<AppDispatch>();
	const [size, setSize] = useState(10);
	const [searchValue, setSearchValue] = useState("");

	const debouncedSearchValue: string = useDebounce(searchValue, 500);

	useEffect(() => {
		dispatch(fetchOrders({ page: 1, size, q: debouncedSearchValue }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [size, debouncedSearchValue]);

	if (error)
		return (
			<div>
				<FormError error={"Что-то пошло не так"} />
			</div>
		);

	return (
		<section className={css.orders}>
			<Header setSearchValue={setSearchValue} />
			<div className={css.search_box}>
				<Search setSearchValue={setSearchValue} />
			</div>
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
	);
};

export default Wrapper;
