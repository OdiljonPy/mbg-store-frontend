import React, {useEffect, useState} from "react";
import css from "./wrapper.module.css";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { useTranslations } from "next-intl";
import Similar from "@/components/pages/product/wrapper/components/similar/similar";
import Info from "@/components/pages/product/wrapper/components/info/info";
import Comparison from "@/components/pages/product/wrapper/components/info/comparison/comparison";
import Feedbacks from "@/components/pages/product/wrapper/components/feedbacks/feedbacks";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import {fetchProductComments, fetchProductSingle} from "@/slices/product/productSingleSlices";
import {useSearchParams} from "next/navigation";

interface props {}

const Wrapper = (props: props) => {
	const t = useTranslations();
	const router = useRouter();
	const searchParams = useSearchParams()

	const { info, loading,comments } = useSelector((state: RootState) => state.product_single);
	const {rating,rating_count,comparison_products,related_products} = info

	const ratingFilter = searchParams.get('rating')
	const [offset,setOffset] = useState(5)

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchProductSingle(router.query.id));
	}, [dispatch, router.query.id]);


	useEffect(() => {
		dispatch(fetchProductComments({
			id:router.query.id,
			size:offset,
			rating:ratingFilter?ratingFilter: ''
		}))
	}, [router.query.id,ratingFilter,offset]);

	return (
		<section className={css.wrapper}>
			<div className={"container"}>
				<Breadcrumbs
					items={[
						{
							path: "/",
							label: t("header.home"),
						},
						{
							path: "/products?sort=popular",
							label: t("products.title"),
						},
						{
							path: "/products/:id",
							label: info?.name,
						},
					]}
				/>
				{info && <Info info={info} loading={loading} />}

				<Comparison comparison={comparison_products} loading={loading} />
				<Similar similar={related_products} loading={loading} />
				<Feedbacks rating={rating} rating_count={rating_count} comments={comments} loading={loading} setOffset={(offset)=> setOffset(offset)} />
			</div>
		</section>
	);
};

export default Wrapper;
