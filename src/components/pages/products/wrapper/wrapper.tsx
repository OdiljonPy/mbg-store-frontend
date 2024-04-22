"use client";

import Filters from "@/components/pages/products/filters/filters";
import ProductList from "@/components/pages/products/product-list/product-list";
import Header from "@/components/pages/products/wrapper/header/header";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { fetchCategory } from "@/slices/category/categorySlices";
import { filterProduct } from "@/slices/product/productSlices";
import { AppDispatch, RootState } from "@/store";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./wrapper.module.css";

interface props {}

const Wrapper = (props: props) => {
	const t = useTranslations();
	const searchParams = useSearchParams();
	const category: string | null = searchParams.get("category");

	const dispatch = useDispatch<AppDispatch>();
	const { entities, loading } = useSelector(
		(state: RootState) => state.product
	);

	// filter product

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

				<Header data={entities} loading={loading} />

				<div className={`${css.wrapper}`}>
					<Filters />
					<ProductList products={entities} loading={loading} />
				</div>
			</div>
		</section>
	);
};

export default Wrapper;
