import {
	EnumDeliveryType,
	EnumOrderStatusDelivery,
	EnumOrderStatusPickup,
	IOrder,
} from "@/data-types/order/order";
import { formatPhoneNumber } from "@/utils/phone-format/phone-format";
import dayjs from "dayjs";
import Badge from "../../components/badge/badge";
import {
	deliveryStatusMap,
	pickupStatusMap,
} from "../../constants/orders/status-map";
import css from "./order-details-card.module.css";

interface Props {
	order: IOrder;
}

function OrderDetailsCard({ order }: Props) {
	return (
		<div className={css.card}>
			<header className={css.card_header}>
				<h2 className={css.card_title}>Детали Заказа</h2>
			</header>
			<div className={css.card_body}>
				<ul className={css.list}>
					<li className={css.mobile}>
						<span>Статус</span>
						<span>
							{order.type === EnumDeliveryType.DELIVERY ? (
								<Badge
									status={
										EnumOrderStatusDelivery[order.status]
									}
								>
									{deliveryStatusMap[order.status]}
								</Badge>
							) : (
								<Badge
									status={EnumOrderStatusPickup[order.status]}
								>
									{pickupStatusMap[order.status]}
								</Badge>
							)}
						</span>
					</li>
					<li className={css.mobile}>
						<span>Время заказа</span>
						<span>
							{dayjs(order.created_at)
								.format("D MMMM YYYY г. (H:mm)")
								.toLowerCase()}
						</span>
					</li>
					<li>
						<span>Получатель</span>
						<span>Малика Кадирова</span>
					</li>
					<li>
						<span>Номер телефона</span>
						<span>{formatPhoneNumber("+998901234567")}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default OrderDetailsCard;
