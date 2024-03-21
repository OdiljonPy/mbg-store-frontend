import Info from "@/components/shared/info/info";
import { EnumDeliveryType, IOrder } from "@/data-types/order/order";
import { priceFormatter } from "@/utils/price-formatter/price-formatter";
import css from "./order-cost-card.module.css";

interface Props {
	order: IOrder;
}

function OrderCostCard({ order }: Props) {
	return (
		<div className={css.card}>
			<header className={css.card_header}>
				<h2 className={css.card_title}>Стоимость заказа</h2>
			</header>
			<div className={css.card_body}>
				<ul className={css.list}>
					<li>
						<span>Стоимость товаров</span>
						<span>{priceFormatter(174000, true)}</span>
					</li>
					<li>
						<span>Скидки</span>
						<span>{priceFormatter(-26000, true)}</span>
					</li>
					<li>
						<span>
							Промокод{" "}
							<span className={css.promoname}>NEW10</span>
						</span>
						<span>{priceFormatter(-14000, true)}</span>
					</li>
					{order.type === EnumDeliveryType.DELIVERY && (
						<li>
							<span>Доставка</span>
							<span>{priceFormatter(10000, true)}</span>
						</li>
					)}
					{order.type === EnumDeliveryType.PICKUP && (
						<li>
							<span>Самовывоз</span>
							<span>{priceFormatter(10000, true)}</span>
						</li>
					)}
					<div className={css.divider} />
					<li className={css.total}>
						<span>Всего</span>
						<span>{priceFormatter(order.total_price, true)}</span>
					</li>
				</ul>
				{order.type === EnumDeliveryType.PICKUP && (
					<footer className={css.card_footer}>
						<Info>Оплата при получении товара</Info>
						<button className={css.btn}>Отменить заказ</button>
					</footer>
				)}
			</div>
		</div>
	);
}

export default OrderCostCard;
