import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import Search from "@/components/pages/products/filters/desktop/stores/search/search";
import Store from "@/components/pages/products/filters/desktop/stores/store/store";
import { ICustomCheckbox } from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import css from "./stores.module.css";

import { fetchStories } from "@/slices/all_store/StoriesSlices";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";

interface props {}

const Stores = (props: props) => {
	const t = useTranslations();
	const dispatch = useDispatch<AppDispatch>();
	const [storesList, setStoresList] = useState<ICustomCheckbox[]>([
		{
			id: 1,
			title: "Зеленая лавка",
			count: 2132,
		},
	]);
	useEffect(() => {
		const fetchStoreList: ICustomCheckbox[] = [];
		dispatch(fetchStories())
			.unwrap()
			.then((res) => {
				if (res.ok) {
					res.result?.map((store) => {
						fetchStoreList.push({
							id: store.id,
							title: store.brand_name,
							count: store.customers_count,
						});
					});
				}
				setStoresList(fetchStoreList);
			});
	}, []);


	return (
		<FilterCollapse title={t("header.stores")} queryResetList={["stores"]}>
			<div className={css.stores}>
				<Search />
				{storesList.map((item) => (
					<Store item={item} key={item.id} />
				))}
			</div>
		</FilterCollapse>
	);
};

export default Stores;
