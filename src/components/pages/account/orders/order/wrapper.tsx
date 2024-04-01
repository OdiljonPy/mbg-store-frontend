import FormError from "@/components/shared/form-error/form-error";
import { EnumDeliveryType } from "@/data-types/order/order";
import { fetchOrderById } from "@/slices/order/orderItemSlice";
import { AppDispatch, RootState } from "@/store";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header/header";
import MobileHeader from "./mobile-header/mobile-header";
import Delivery from "./obtainment/delivery/delivery";
import Pickup from "./obtainment/pickup/pickup";
import OrderCostCard from "./order-cost-card/order-cost-card";
import OrderDetailsCard from "./order-details-card/order-details-card";
import OrderedItemList from "./ordered-item-list/ordered-item-list";
import css from "./wrapper.module.css";

interface Props {
	orderId: number;
}

const Wrapper = ({ orderId }: Props) => {
	const t = useTranslations();

	const { order, loading, error } = useSelector(
		(state: RootState) => state.order_item
	);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchOrderById(orderId));
	}, [dispatch, orderId]);

	if (error)
		return (
			<div className={css.wrapper}>
				<FormError error={"Что-то пошло не так"} />
			</div>
		);

	return (
		<div className={css.wrapper}>
			<div className={cn(css.container, "container")}>
				<Header
					order={order}
					loading={loading}
				/>
				<MobileHeader
					orderId={order.id}
					loading={loading}
				/>
				<div className={css.content}>
					<main className={css.main}>
						<section className={css.section}>
							<h2 className={css.title}>Способ получения</h2>
							{order.type === EnumDeliveryType.PICKUP ? (
								<Pickup
									order={order}
									loading={loading}
								/>
							) : (
								<Delivery
									order={order}
									loading={loading}
								/>
							)}
						</section>
						<section className={css.section}>
							<h2 className={css.title}>
								Товары в заказе{" "}
								<span className={css.badge}>
									{order.order_items?.length}
								</span>
							</h2>
							<OrderedItemList
								orderedItems={order.order_items}
								loading={loading}
							/>
						</section>
					</main>
					<aside className={css.side}>
						<OrderDetailsCard
							loading={loading}
							order={order}
						/>
						<OrderCostCard
							loading={loading}
							order={order}
						/>
					</aside>
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
