import CatalogList from "@/components/pages/catalog/catalog-list/catalog-list";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import HeadWithSeo from "@/layout/metadata";
import { fetchCategory } from "@/slices/category/categorySlices";
import { AppDispatch, RootState } from "@/store";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./index.module.css";

interface props {}

const Index = (props: props) => {
	const t = useTranslations();
	const { categories, loading } = useSelector(
		(state: RootState) => state.category
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchCategory(200));
	}, []);

	return (
		<>
			<HeadWithSeo name={t("header.catalog")} url={"/catalog"} />
			<section className={css.catalog}>
				<div className={"container"}>
					<Breadcrumbs
						items={[
							{
								path: "/",
								label: t("header.home"),
							},
							{
								path: "/catalog",
								label: t("header.catalog"),
							},
						]}
					/>
					<h1 className={css.title}>
						{t("header.catalog")}{" "}
						{t("products.plural").toLowerCase()}
					</h1>
					<CatalogList data={categories} />
				</div>
			</section>
		</>
	);
};

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
export default Index;
