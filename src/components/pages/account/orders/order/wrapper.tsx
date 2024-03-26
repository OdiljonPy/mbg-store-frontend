import { EnumDeliveryType } from "@/data-types/order/order";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { data } from "../data";
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

	const order = data.find((item) => item.id === orderId);

	if (!order) {
		return <div className={css.wrapper}>not found</div>;
	}

	return (
		<div className={css.wrapper}>
			<div className={cn(css.container, "container")}>
				<Header order={order} />
				<MobileHeader orderId={order.id} />
				<div className={css.content}>
					<main className={css.main}>
						<section className={css.section}>
							<h2 className={css.title}>Способ получения</h2>
							{order.type === EnumDeliveryType.DELIVERY ? (
								<Delivery order={order} />
							) : (
								<Pickup order={order} />
							)}
						</section>
						<section className={css.section}>
							<h2 className={css.title}>
								Товары в заказе{" "}
								<span className={css.badge}>
									{order.order_items.length}
								</span>
							</h2>
							<OrderedItemList orderedItems={order.order_items} />
						</section>
					</main>
					<aside className={css.side}>
						<OrderDetailsCard order={order} />
						<OrderCostCard order={order} />
					</aside>
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
