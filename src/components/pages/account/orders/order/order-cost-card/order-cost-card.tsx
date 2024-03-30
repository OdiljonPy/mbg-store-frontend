import Info from "@/components/shared/info/info";
import { EnumDeliveryType, IOrder } from "@/data-types/order/order";
import { priceFormatter } from "@/utils/price-formatter/price-formatter";
import Skeleton from "react-loading-skeleton";
import css from "./order-cost-card.module.css";

interface Props {
	order: IOrder;
	loading: boolean;
}

function OrderCostCard({ order, loading }: Props) {
	const productsCost = order.order_items?.reduce(
		(acc, item) => acc + item.product.price * item.quantity,
		0
	);

	return (
		<div className={css.card}>
			<header className={css.card_header}>
				<h2 className={css.card_title}>Стоимость заказа</h2>
			</header>
			<div className={css.card_body}>
				<ul className={css.list}>
					<li>
						<span>Стоимость товаров</span>
						<span>
							{loading ? (
								<Skeleton width={100} />
							) : (
								<>{priceFormatter(productsCost, true)}</>
							)}
						</span>
					</li>
					<li>
						<span>Скидки</span>
						<span>
							{loading ? (
								<Skeleton width={90} />
							) : (
								<>{priceFormatter(-order.sale_price, true)}</>
							)}
						</span>
					</li>
					<li>
						<span>
							Промокод{" "}
							<span className={css.promoname}>
								{order.promo_code?.promocode}
							</span>
						</span>
						<span>
							{loading ? (
								<Skeleton width={90} />
							) : (
								<>
									{priceFormatter(
										-(order.promo_code?.discount || 0),
										true
									)}
								</>
							)}
						</span>
					</li>
					{order.type === EnumDeliveryType.DELIVERY && (
						<li>
							<span>Доставка</span>
							<span>
								{loading ? (
									<Skeleton width={90} />
								) : (
									<>
										{priceFormatter(
											order.delivery_price,
											true
										)}
									</>
								)}
							</span>
						</li>
					)}
					{order.type === EnumDeliveryType.PICKUP && (
						<li>
							<span>Самовывоз</span>
							<span>
								{loading ? (
									<Skeleton width={90} />
								) : (
									<>{priceFormatter(0, true)}</>
								)}
							</span>
						</li>
					)}
					<div className={css.divider} />
					<li className={css.total}>
						<span>Всего</span>
						<span>
							{loading ? (
								<Skeleton width={90} />
							) : (
								<>{priceFormatter(order.total_price, true)}</>
							)}
						</span>
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
