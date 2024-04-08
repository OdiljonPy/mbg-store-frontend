import Button from "@/components/shared/button";
import {
	EnumDeliveryType,
	EnumOrderStatusDelivery,
	EnumOrderStatusPickup,
	IOrder,
} from "@/data-types/order/order";
import { formatPhoneNumber } from "@/utils/phone-format/phone-format";
import dayjs from "dayjs";
import Skeleton from "react-loading-skeleton";
import Badge from "../../components/badge/badge";
import {
	deliveryStatusMap,
	pickupStatusMap,
} from "../../constants/orders/status-map";
import { useReorderProducts } from "../../hooks/use-reorder-products";
import css from "./order-details-card.module.css";

interface Props {
	order: IOrder;
	loading: boolean;
}

function OrderDetailsCard({ order, loading }: Props) {
 const { reorderItems } = useReorderProducts(order.order_items)
	
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
							{loading ? (
								<Skeleton width={100} />
							) : (
								<>
									{order.type ===
									EnumDeliveryType.DELIVERY ? (
										<Badge
											status={
												EnumOrderStatusDelivery[
													order.status
												]
											}
										>
											{deliveryStatusMap[order.status]}
										</Badge>
									) : (
										<Badge
											status={
												EnumOrderStatusPickup[
													order.status
												]
											}
										>
											{pickupStatusMap[order.status]}
										</Badge>
									)}
								</>
							)}
						</span>
					</li>
					<li className={css.mobile}>
						<span>Время заказа</span>
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
						<span>Получатель</span>
						<span>
							{loading ? (
								<Skeleton width={150} />
							) : (
								<>Малика Кадирова</>
							)}
						</span>
					</li>
					<li>
						<span>Номер телефона</span>
						<span>
							{loading ? (
								<Skeleton width={120} />
							) : (
								<>{formatPhoneNumber("+998901234567")}</>
							)}
						</span>
					</li>
				</ul>
				<Button onClick={reorderItems} variant='tertiary' full className={css.mobile}>
					Повторить заказ
				</Button>
			</div>
		</div>
	);
}

export default OrderDetailsCard;
