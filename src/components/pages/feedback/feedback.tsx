import FeedbackForm from "@/components/pages/feedback/components/feedback-form/feedback-form";
import Preview from "@/components/pages/feedback/components/preview/preview";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { fetchProductSingle } from "@/slices/product/productSingleSlices";
import { AppDispatch, RootState } from "@/store";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./feedback.module.css";

interface props {}

const Feedback = (props: props) => {
	const t = useTranslations();
	const { info, loading } = useSelector(
		(state: RootState) => state.product_single
	);
	const dispatch = useDispatch<AppDispatch>();
	const router = useRouter();

	useEffect(() => {
		dispatch(fetchProductSingle(router.query.id));
	}, [dispatch]);

	return (
		<section className={css.page}>
			<div className={"container"}>
				<Breadcrumbs
					items={[
						{
							path: "/",
							label: t("header.home"),
						},
						{
							path: "/products",
							label: t("products.title"),
						},
						{
							path: `/products/${info?.id}`,
							label: `${info?.name}`,
						},
						{
							path: "/products/1/feedback",
							label: t("product.sendFeedback"),
						},
					]}
				/>
				<h1 className={css.title}>{t("product.writeFeedback")}</h1>
				<div className={css.wrapper}>
					<Preview
						img={
							info?.images?.[0]?.image ||
							"/images/products/not-available.png"
						}
					/>
					<FeedbackForm info={info} loading={loading} />
				</div>
			</div>
		</section>
	);
};

export default Feedback;
