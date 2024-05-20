import DetailCart from "@/components/pages/cart/order_placed/common/detail-carts/detail-cart/detail-cart";
import DetailPrice from "@/components/pages/cart/order_placed/common/detail-carts/detail-price/detail-price";
import Status from "@/components/pages/cart/order_placed/common/order-status/status";
import Content from "@/components/pages/cart/order_placed/order-delivery/content/content";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { fetchOrderLast } from "@/slices/order/lastOrderSlice";
import { AppDispatch, RootState } from "@/store";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./wrapper.module.css";
interface props {}

const Wrapper = (props: props) => {
	const t = useTranslations();
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchOrderLast());
	}, [dispatch]);
	return (
		<section className={css.cart}>
			<div className={"container"}>
				<Breadcrumbs
					items={[
						{
							path: "/",
							label: t("header.home"),
						},
						{
							path: "/cart",
							label: t("header.basket"),
						},
						{
							path: "/cart/delivery",
							label: t("header.order_placed"),
						},
					]}
				/>
				<div className={css.status}>
					<Status />
				</div>
				<div className={css.wrapper}>
					<Content />
					<div className={css.detail}>
						<DetailCart />
						<DetailPrice />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Wrapper;
