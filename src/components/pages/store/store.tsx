import Filters from "@/components/pages/products/filters/filters";
import ProductList from "@/components/pages/products/product-list/product-list";
import Header from "@/components/pages/products/wrapper/header/header";
import css from "@/components/pages/products/wrapper/wrapper.module.css";
import Intro from "@/components/pages/store/intro/intro";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import HeadWithSeo from "@/layout/metadata";
import { fetchStoreSingle } from "@/slices/all_store/StoriesSlices";
import { AppDispatch, RootState } from "@/store";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface props {}

const Store = (props: props) => {
	const t = useTranslations();
	const {
		query: { id },
	} = useRouter();
	const { loading, single_store } = useSelector(
		(state: RootState) => state.all_stories
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchStoreSingle(id));
	}, [dispatch]);
	return (
		<>
			<HeadWithSeo
				name={single_store?.brand_name}
				url={`/stores/${id}`}
				description={single_store?.description}
			/>
			<section className={css.results}>
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
							{
								path: "",
								label: "Деревенская лавка",
							},
						]}
					/>
					<Intro store={single_store} loading={loading} />
					<Header />
					<div className={`${css.wrapper}`}>
						<Filters />
						<ProductList />
					</div>
				</div>
			</section>
		</>
	);
};

export default Store;
