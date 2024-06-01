import Input from "@/components/shared/input";
import useDebounce from "@/hooks/use-debounce";
import { fetchOrders } from "@/slices/order/ordersSlice";
import { AppDispatch } from "@/store";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import css from "./search.module.css";

function Search() {
	const t = useTranslations("orders");

	const [searchValue, setSearchValue] = useState("");
	const debouncedSearchValue: string = useDebounce(searchValue, 500);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchOrders({ q: debouncedSearchValue }));
	}, [debouncedSearchValue]);

	return (
		<div className={css.search_box}>
			<Input
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value.trim())}
				type='number'
				placeholder={t("search")}
			/>
			<span className={css.search_icon}>
				<svg
					width='24'
					height='25'
					viewBox='0 0 24 25'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M21.5308 20.9696L16.8368 16.2765C18.1973 14.6431 18.8757 12.548 18.7309 10.4272C18.5861 8.30629 17.6293 6.32289 16.0593 4.88956C14.4894 3.45623 12.4274 2.68333 10.3021 2.73163C8.17687 2.77993 6.15205 3.64571 4.64888 5.14888C3.14571 6.65205 2.27993 8.67687 2.23163 10.8021C2.18333 12.9274 2.95623 14.9894 4.38956 16.5593C5.82289 18.1293 7.80629 19.0861 9.92715 19.2309C12.048 19.3757 14.1431 18.6973 15.7765 17.3368L20.4696 22.0308C20.5393 22.1005 20.622 22.1558 20.713 22.1935C20.8041 22.2312 20.9017 22.2506 21.0002 22.2506C21.0988 22.2506 21.1963 22.2312 21.2874 22.1935C21.3784 22.1558 21.4612 22.1005 21.5308 22.0308C21.6005 21.9612 21.6558 21.8784 21.6935 21.7874C21.7312 21.6963 21.7506 21.5988 21.7506 21.5002C21.7506 21.4017 21.7312 21.3041 21.6935 21.213C21.6558 21.122 21.6005 21.0393 21.5308 20.9696ZM3.75021 11.0002C3.75021 9.66519 4.14609 8.36015 4.88779 7.25011C5.62949 6.14008 6.6837 5.27492 7.9171 4.76403C9.1505 4.25314 10.5077 4.11946 11.8171 4.37991C13.1264 4.64036 14.3292 5.28324 15.2732 6.22724C16.2172 7.17125 16.8601 8.37398 17.1205 9.68335C17.381 10.9927 17.2473 12.3499 16.7364 13.5833C16.2255 14.8167 15.3603 15.8709 14.2503 16.6126C13.1403 17.3543 11.8352 17.7502 10.5002 17.7502C8.71061 17.7482 6.99488 17.0364 5.72944 15.771C4.46399 14.5056 3.7522 12.7898 3.75021 11.0002Z'
						fill='#C2C2C2'
					/>
				</svg>
			</span>
		</div>
	);
}

export default Search;
