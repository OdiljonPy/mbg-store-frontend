import SliderPrices from "@/components/pages/products/filters/desktop/prices/slider/slider";
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Inputs from "../../desktop/prices/inputs/inputs";
interface props {}

const Prices = (props: props) => {
	const pathname = usePathname();
	const { push, query, isReady } = useRouter();
	const searchParams = useSearchParams();
	const prices: string | null = searchParams.get("prices");
	const pricesRange = prices
		? prices.split(",").map((item) => Number(item))
		: [1000, 10000000];
	const [priceRange, setPriceRange] = useState<number[]>(pricesRange);

	useEffect(() => {
		const price = prices
			? prices.split(",").map((item) => Number(item))
			: [1000, 10000000];
		setPriceRange(price);
	}, [prices]);
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
	const t = useTranslations();

	return (
		<div className={css.item}>
			<TopBar resetItems={["prices"]} hideIcon title={t("price.title")} />
			<Inputs
				priceRange={priceRange}
				onChange={onChange}
				onChangeComplete={onChangeComplete}
			/>
			<SliderPrices
				priceRange={priceRange}
				onChange={onChange}
				onChangeComplete={onChangeComplete}
			/>
		</div>
	);
};

export default Prices;
