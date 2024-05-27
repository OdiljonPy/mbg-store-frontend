import Letters from "@/components/pages/stores/letters/letters";
import StoreLetter from "@/components/pages/stores/store-letter/store-letter";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { fetchAllStores } from "@/slices/stores/storesSlice";
import { AppDispatch, RootState } from "@/store";
import { Badge } from "antd";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StoresSkeleton from "../skeleton";
import css from "./wrapper.module.css";

interface props {}

const Wrapper = (props: props) => {
	const t = useTranslations();
	const { storesCount, stores, loading, error } = useSelector(
		(state: RootState) => state.stores
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchAllStores());
	}, [dispatch]);

	return (
		<section className={css.stores}>
			<div className={"container"}>
				<Breadcrumbs
					items={[
						{
							path: "/",
							label: t("header.home"),
						},
						{
							path: "/stores",
							label: t("header.stores"),
						},
					]}
				/>
				<h1 className={css.title}>
					{t("header.stores")}
					<Badge
						count={storesCount}
						size={"default"}
						style={{
							backgroundColor: "#39B969",
							borderColor: "transparent",
						}}
					/>
				</h1>
				<Letters stores={stores} />
				{loading ? (
					<StoresSkeleton />
				) : (
					stores.map((store_letter) => (
						<StoreLetter
							storeLetter={store_letter}
							key={store_letter.letter}
						/>
					))
				)}
			</div>
		</section>
	);
};

export default Wrapper;
