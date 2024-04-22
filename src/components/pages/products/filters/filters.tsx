import Accessibility from "@/components/pages/products/filters/desktop/accessibility/accessibility";
import Categories from "@/components/pages/products/filters/desktop/categories/categories";
import Delivery from "@/components/pages/products/filters/desktop/delivery/delivery";
import Prices from "@/components/pages/products/filters/desktop/prices/prices";
import Rating from "@/components/pages/products/filters/desktop/rating/rating";
import ResetFilters from "@/components/pages/products/filters/desktop/reset-filters/reset-filters";
import Sales from "@/components/pages/products/filters/desktop/sales/sales";
import Stores from "@/components/pages/products/filters/desktop/stores/stores";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import css from "./filters.module.css";
import dynamic from "next/dynamic";

interface props {}

const Location = dynamic(
	() => import("@/components/pages/products/filters/desktop/location"),
	{
		ssr: false,
	}
);

const Filters = ({}: props) => {
	const searchParams = useSearchParams();
	const isOpened: string | null = searchParams.get("filters");
	const { isReady } = useRouter();
	return (
		<div
			className={`${css.filters} ${!isReady ? css.hide : ""} ${
				isOpened ? css.show : ""
			}`}
		>
			<ResetFilters />
			<Categories />
			<Prices />
			<Stores />
			<Sales />
			<Rating />
			<Location />
			<Delivery />
			<Accessibility />
		</div>
	);
};

export default Filters;
