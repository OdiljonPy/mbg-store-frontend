import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import Inputs from "@/components/pages/products/filters/desktop/prices/inputs/inputs";
import PriceSlider from "@/components/pages/products/filters/desktop/prices/slider/slider";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import css from "./prices.module.css";

interface props {}

const Prices = (props: props) => {
	const t = useTranslations();
	const pathname = usePathname();
	const { push, query, isReady } = useRouter();
	const searchParams = useSearchParams();
	const prices: string | null = searchParams.get("prices");
	const pricesRange = prices
		? prices.split(",").map((item) => Number(item))
		: [1000, 10000000];
	const [priceRange, setPriceRange] = useState<number[]>(pricesRange);

	const onChange = (value: number[]) => {
		const [start, end] = value;
		setPriceRange([start, end]);
	};

	const onChangeComplete = (value: number[]) => {
		const [start, end] = value;
		let min = start;
		let max = end;
		if (min < 1000 || max > 10000000 || max < min) {
			min = 1000;
			max = 10000000;
			setPriceRange([1000, 10000000]);
		}

		push(
			{
				pathname,
				query: {
					...query,
					prices: `${min},${max}`,
					changeFilter:
						searchParams.get("changeFilter") === "true"
							? "false"
							: "true",
				},
			},
			undefined,
			{
				scroll: false,
			}
		);
	};

	return (
		<FilterCollapse title={t("price.title")}>
			<div className={css.price}>
				<Inputs
					priceRange={priceRange}
					onChangeComplete={onChangeComplete}
					onChange={onChange}
				/>
				<PriceSlider
					priceRange={priceRange}
					onChangeComplete={onChangeComplete}
					onChange={onChange}
				/>
			</div>
		</FilterCollapse>
	);
};

export default Prices;
