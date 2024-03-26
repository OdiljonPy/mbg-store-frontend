import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { useTranslations } from "next-intl";

import {
	EnumDeliveryType,
	EnumOrderStatusDelivery,
	EnumOrderStatusPickup,
	IOrder,
} from "@/data-types/order/order";

import dayjs from "dayjs";
import css from "./header.module.css";

import {
	deliveryStatusMap,
	pickupStatusMap,
} from "@/constants/account/orders/status-map";
import Badge from "../../components/badge/badge";

interface Props {
	order: IOrder;
}

function Header({ order }: Props) {
	const t = useTranslations();

	return (
		<div className={css.header}>
			<Breadcrumbs
				items={[
					{
						path: "/",
						label: t("header.home"),
					},
					{
						path: "/account",
						label: t("header.account"),
					},
					{
						path: "/account/orders",
						label: t("header.orders"),
					},
					{
						path: "/cart/delivery",
						label: t("header.order") + " " + order.id,
					},
				]}
			/>
			<div className={css.header_main}>
				<div className={css.header_left}>
					<div className={css.header_title_badge}>
						<h1 className={css.title}>Заказ № {order.id}</h1>
						{order.type === EnumDeliveryType.DELIVERY ? (
							<Badge
								status={EnumOrderStatusDelivery[order.status]}
							>
								{deliveryStatusMap[order.status]}
							</Badge>
						) : (
							<Badge status={EnumOrderStatusPickup[order.status]}>
								{pickupStatusMap[order.status]}
							</Badge>
						)}
					</div>
					<p className={css.date}>
						Размещен{" "}
						{dayjs(order.created_at)
							.format("D MMMM YYYY г. (H:mm)")
							.toLowerCase()}
					</p>
				</div>
				<div className={css.header_right}>
					<button className={css.btn}>Повторить заказ</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
