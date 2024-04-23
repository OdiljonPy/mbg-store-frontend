"use client";

import Filters from "@/components/pages/products/filters/filters";
import ProductList from "@/components/pages/products/product-list/product-list";
import Header from "@/components/pages/products/wrapper/header/header";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { fetchCategory } from "@/slices/category/categorySlices";
import { AppDispatch } from "@/store";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import css from "./wrapper.module.css";

interface props {}

const Wrapper = ({}: props) => {
	const t = useTranslations();
	const searchParams = useSearchParams();
	const category: string | null = searchParams.get("category");

	const dispatch = useDispatch<AppDispatch>();

	// fetch category
	useEffect(() => {
		dispatch(fetchCategory(40));
	}, [dispatch]);

	return (
		<section className={css.results}>
			<div className={"container"}>
				<Breadcrumbs
					items={[
						{
							path: "/",
							label: t("header.home"),
						},
						{
							path: "/products",
							label: category ?? t("categories.all"),
						},
					]}
				/>
				<Header />
				<div className={`${css.wrapper}`}>
					<Filters />
					<ProductList />
				</div>
			</div>
		</section>
	);
};

export default Wrapper;
