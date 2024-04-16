import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import { IFilters } from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import SliderPrices from "@/components/pages/products/filters/mobile/prices/slider/slider";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import Inputs from "./inputs/inputs";

interface props {}

const Prices = (props: props) => {
	const { unregister } = useFormContext<IFilters>();
	const t = useTranslations();
	const onReset = () => {
		unregister("prices");
	};
	return (
		<div className={css.item}>
			<TopBar onReset={onReset} hideIcon title={t("price.title")} />
			<Inputs />
			<SliderPrices />
		</div>
	);
};

export default Prices;
