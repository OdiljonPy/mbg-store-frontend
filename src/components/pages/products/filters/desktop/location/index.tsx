import Button from "@/components/shared/button";
import { useTranslations } from "next-intl";
import FilterCollapse from "../filter-collapse/filter-collapse";

import AddFilterLocationModal from "@/components/shared/address/modals/add-filter-location-modal";
import { RootState } from "@/store";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DistanceInput from "./distance-input";
import LocationItem from "./location-item";
import css from "./location.module.css";
import DistanceSlider from "./slider/slider";

function Location() {
	const t = useTranslations();
	const pathname = usePathname();
	const { push, query } = useRouter();
	const searchParams = useSearchParams();

	const locationQuery = searchParams.get("location");

	const [distance, setDistance] = useState<number>();

	useEffect(() => {
		setDistance(
			locationQuery ? Number(searchParams.get("distance") || "5") : 0
		);
	}, [locationQuery, searchParams]);

	const { address_list } = useSelector(
		(state: RootState) => state.filter_location
	);

	const onDistanceChange = (value: number) => {
		if (!locationQuery) return;
		setDistance(value);
	};

	const onDistanceChangeComplete = (value: number) => {
		if (!locationQuery) return;
		if (value > 20) {
			value = 20;
			setDistance(value);
		}

		if (value < 1) {
			value = 1;
			setDistance(value);
		}

		push(
			{
				pathname,
				query: {
					...query,
					distance: String(value),
					changeFilter:
						searchParams.get("changeFilter") === "true"
							? "false"
							: "true",
				},
			},
			undefined,
			{ scroll: false }
		);
	};

	return (
		<FilterCollapse
			title={t("location.title")}
			queryResetList={["distance", "location"]}
		>
			<div className={css.wrapper}>
				<div className={css.location_select_wrapper}>
					<p className={css.text}>
						{address_list.length
							? t("location.add_location")
							: t("location.select_location")}
					</p>
					<AddFilterLocationModal>
						<Button
							height={36}
							className={css.btn}
							variant='tertiary'
							leftIcon={
								<svg
									width='14'
									height='16'
									viewBox='0 0 14 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M7 0.125C5.35954 0.126861 3.78681 0.779354 2.62683 1.93933C1.46685 3.09931 0.814361 4.67204 0.8125 6.3125C0.8125 11.607 6.4375 15.6057 6.67727 15.773C6.77184 15.8393 6.88452 15.8748 7 15.8748C7.11548 15.8748 7.22816 15.8393 7.32273 15.773C7.5625 15.6057 13.1875 11.607 13.1875 6.3125C13.1856 4.67204 12.5331 3.09931 11.3732 1.93933C10.2132 0.779354 8.64046 0.126861 7 0.125ZM7 4.0625C7.44501 4.0625 7.88002 4.19446 8.25003 4.44169C8.62004 4.68893 8.90843 5.04033 9.07873 5.45146C9.24903 5.8626 9.29358 6.315 9.20677 6.75145C9.11995 7.18791 8.90566 7.58882 8.59099 7.90349C8.27632 8.21816 7.87541 8.43245 7.43895 8.51927C7.0025 8.60608 6.5501 8.56153 6.13896 8.39123C5.72783 8.22093 5.37643 7.93254 5.12919 7.56253C4.88196 7.19252 4.75 6.75751 4.75 6.3125C4.75 5.71576 4.98705 5.14347 5.40901 4.72151C5.83097 4.29955 6.40326 4.0625 7 4.0625Z'
										fill='#39B969'
									/>
								</svg>
							}
						>
							{t("location.title")}
						</Button>
					</AddFilterLocationModal>
				</div>
				{!!address_list.length && (
					<>
						<DistanceInput
							distance={Number(distance)}
							onChange={onDistanceChange}
							onChangeComplete={onDistanceChangeComplete}
						/>
						<DistanceSlider
							distanceRange={Number(distance)}
							onChange={onDistanceChange}
							onChangeComplete={onDistanceChangeComplete}
						/>
						<ul className={css.list}>
							{address_list.map((item) => (
								<li key={item.address}>
									<LocationItem location={item} />
								</li>
							))}
						</ul>
					</>
				)}
			</div>
		</FilterCollapse>
	);
}

export default Location;
