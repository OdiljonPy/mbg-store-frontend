import Button from "@/components/shared/button";
import {
	EnumDeliveryType,
	IOrder,
	OrderStatusChoices,
} from "@/data-types/order/order";
import { formatPhoneNumber } from "@/utils/phone-format/phone-format";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import Skeleton from "react-loading-skeleton";
import Badge from "../../components/badge/badge";
import { orderStatusMap } from "../../constants/orders/status-map";
import { useReorderProducts } from "../../hooks/use-reorder-products";
import css from "./order-details-card.module.css";

interface Props {
	order: IOrder;
	loading: boolean;
}

function OrderDetailsCard({ order, loading }: Props) {
	const { reorderItems } = useReorderProducts(order.order_items);

	const t = useTranslations("orders");

	return (
		<div className={css.card}>
			<header className={css.card_header}>
				<h2 className={css.card_title}>
					{t("order_details_card.title")}
				</h2>
			</header>
			<div className={css.card_body}>
				<ul className={css.list}>
					<li className={css.mobile}>
						<span>{t("order_details_card.status")}</span>
						<span>
							{loading ? (
								<Skeleton width={100} />
							) : (
								<>
									{order.type ===
									EnumDeliveryType.DELIVERY ? (
										<Badge
											status={
												OrderStatusChoices[order.status]
											}
										>
											{t(orderStatusMap[order.status])}
										</Badge>
									) : (
										<Badge
											status={
												OrderStatusChoices[order.status]
											}
										>
											{t(orderStatusMap[order.status])}
										</Badge>
									)}
								</>
							)}
						</span>
					</li>
					<li className={css.mobile}>
						<span>{t("order_details_card.order_datetime")}</span>
						<span>
							{loading ? (
								<Skeleton width={150} />
							) : (
								<>
									{dayjs(order.created_at)
										.format("D MMMM YYYY г. (H:mm)")
										.toLowerCase()}
								</>
							)}
						</span>
					</li>
					<li>
						<span>{t("order_details_card.receiver")}</span>
						<span>
							{loading ? (
								<Skeleton width={150} />
							) : (
								<>{order?.full_name}</>
							)}
						</span>
					</li>
					<li>
						<span>{t("order_details_card.phone")}</span>
						<span>
							{loading ? (
								<Skeleton width={120} />
							) : (
								<>{formatPhoneNumber(order?.phone_number ? order.phone_number : '+998900000000')}</>
							)}
						</span>
					</li>
				</ul>
				<Button
					onClick={reorderItems}
					variant='tertiary'
					full
					className={css.mobile}
				>
					{t("reorder")}
				</Button>
			</div>
		</div>
	);
}

export default OrderDetailsCard;
