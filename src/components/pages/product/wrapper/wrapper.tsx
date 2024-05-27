import Feedbacks from "@/components/pages/product/wrapper/components/feedbacks/feedbacks";
import Comparison from "@/components/pages/product/wrapper/components/info/comparison/comparison";
import Info from "@/components/pages/product/wrapper/components/info/info";
import Similar from "@/components/pages/product/wrapper/components/similar/similar";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import HeadWithSeo from "@/layout/metadata";
import {
	fetchProductComments,
	fetchProductSingle,
} from "@/slices/product/productSingleSlices";
import { AppDispatch, RootState } from "@/store";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./wrapper.module.css";

interface props {}

const Wrapper = (props: props) => {
	const t = useTranslations();
	const router = useRouter();
	const searchParams = useSearchParams();
	const [slideLoad, setSlideLoad] = useState(true);

	const { info, loading, comments } = useSelector(
		(state: RootState) => state.product_single
	);
	const {
		rating,
		rating_count,
		comparison_products,
		related_products,
		name,
	} = info;

	const ratingFilter = searchParams.get("rating");
	const [offset, setOffset] = useState(5);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchProductSingle(router?.query?.id));
	}, [dispatch, router.query.id]);

	useEffect(() => {
		dispatch(
			fetchProductComments({
				id: router?.query?.id,
				size: offset,
				rating: ratingFilter ? ratingFilter : "",
			})
		);
		setSlideLoad(true);
		setTimeout(() => setSlideLoad(false), 2000);
	}, [router.query.id, ratingFilter, offset]);

	return (
		<section className={css.wrapper}>
			<HeadWithSeo
				name={name}
				ogImage={info?.images?.[0]?.image as string}
				description={info?.description}
				url={"/products/" + info.id}
			/>
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

				{info && <Info info={info} loading={slideLoad} />}

				{comparison_products?.length ? (
					<Comparison
						comparison={comparison_products}
						loading={loading}
					/>
				) : (
					""
				)}

				{related_products?.length && (
					<div>
						{
							<Similar
								similar={related_products}
								loading={slideLoad}
							/>
						}
					</div>
				)}
				<Feedbacks
					rating={rating}
					rating_count={rating_count}
					comments={comments}
					loading={loading}
					setOffset={(offset) => setOffset(offset)}
				/>
			</div>
		</section>
	);
};

export default Wrapper;
