import {
	addSearchHistory,
	removeSearchHistory,
} from "@/slices/search_history/searchHistorySlice";
import { AppDispatch } from "@/store";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ParsedUrlQueryInput } from "querystring";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import css from "./product-result.module.css";

interface props {
	item: string;
	loading: boolean;
	isHistory?: boolean;
}

const ProductResult = ({ item, loading, isHistory = false }: props) => {
	const searchParams = useSearchParams();
	const filters: string | null = searchParams.get("filters");

	const dispatch = useDispatch<AppDispatch>();

	const queries: ParsedUrlQueryInput = {
		search: item,
		sort: searchParams.get("sort") ?? "popular",
		filters: filters,
	};

	if (!filters) {
		delete queries.filters;
	}

	const onAddToHistoryHandleClick = () => {
		if (isHistory) return;
		dispatch(addSearchHistory(item));
	};

	const onDeleteHandleClick = () => {
		dispatch(removeSearchHistory(item));
	};

	return (
		<div className={css.wrapper}>
			<Link
				href={{
					pathname: "/products",
					query: queries,
				}}
				shallow={true}
				className={css.item}
				onClick={onAddToHistoryHandleClick}
			>
				<span className={css.text}>
					{loading ? (
						<Skeleton count={1} height={"12px"} width={"190px"} />
					) : (
						item
					)}
				</span>
			</Link>
			{isHistory && (
				<button
					className={css.delete_btn}
					onClick={onDeleteHandleClick}
				>
					<svg
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M11.4605 10.6645C11.5128 10.7168 11.5543 10.7788 11.5825 10.8471C11.6108 10.9154 11.6254 10.9886 11.6254 11.0625C11.6254 11.1364 11.6108 11.2096 11.5825 11.2779C11.5543 11.3462 11.5128 11.4082 11.4605 11.4605C11.4083 11.5127 11.3462 11.5542 11.2779 11.5825C11.2097 11.6108 11.1365 11.6253 11.0626 11.6253C10.9887 11.6253 10.9155 11.6108 10.8472 11.5825C10.7789 11.5542 10.7169 11.5127 10.6646 11.4605L6.00007 6.79524L1.33554 11.4605C1.22999 11.566 1.08684 11.6253 0.937569 11.6253C0.788301 11.6253 0.645148 11.566 0.5396 11.4605C0.434052 11.3549 0.374756 11.2118 0.374756 11.0625C0.374756 10.9132 0.434052 10.7701 0.5396 10.6645L5.20483 6.00001L0.5396 1.33548C0.434052 1.22993 0.374756 1.08677 0.374756 0.937508C0.374756 0.78824 0.434052 0.645087 0.5396 0.539539C0.645148 0.433991 0.788301 0.374695 0.937569 0.374695C1.08684 0.374695 1.22999 0.433991 1.33554 0.539539L6.00007 5.20477L10.6646 0.539539C10.7701 0.433991 10.9133 0.374695 11.0626 0.374695C11.2118 0.374695 11.355 0.433991 11.4605 0.539539C11.5661 0.645087 11.6254 0.78824 11.6254 0.937508C11.6254 1.08677 11.5661 1.22993 11.4605 1.33548L6.7953 6.00001L11.4605 10.6645Z'
							fill='#C2C2C2'
						/>
					</svg>
				</button>
			)}
		</div>
	);
};

export default ProductResult;
