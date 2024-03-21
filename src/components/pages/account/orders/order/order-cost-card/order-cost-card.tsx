import { EnumDeliveryType, IOrder } from "@/data-types/order/order";
import { Divider } from "antd";
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
					<Divider style={{ margin: "18px 0" }} />
					<li className={css.total}>
						<span>Всего</span>
						<span>{priceFormatter(order.total_price, true)}</span>
					</li>
				</ul>
				{order.type === EnumDeliveryType.PICKUP && (
					<footer className={css.card_footer}>
						<div className={css.info}>
							<span>
								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9 0.0625C7.23233 0.0625 5.50436 0.586675 4.0346 1.56874C2.56483 2.55081 1.41929 3.94665 0.742831 5.57977C0.0663725 7.21288 -0.11062 9.00992 0.234236 10.7436C0.579091 12.4773 1.43031 14.0698 2.68024 15.3198C3.93017 16.5697 5.52268 17.4209 7.25638 17.7658C8.99009 18.1106 10.7871 17.9336 12.4202 17.2572C14.0534 16.5807 15.4492 15.4352 16.4313 13.9654C17.4133 12.4956 17.9375 10.7677 17.9375 9C17.935 6.6304 16.9926 4.35856 15.317 2.683C13.6414 1.00743 11.3696 0.0650023 9 0.0625ZM8.65625 4.1875C8.86022 4.1875 9.0596 4.24798 9.22919 4.3613C9.39877 4.47461 9.53095 4.63567 9.609 4.82411C9.68706 5.01254 9.70748 5.21989 9.66769 5.41994C9.6279 5.61998 9.52968 5.80373 9.38546 5.94795C9.24123 6.09218 9.05748 6.19039 8.85744 6.23019C8.6574 6.26998 8.45005 6.24955 8.26161 6.1715C8.07318 6.09345 7.91212 5.96127 7.7988 5.79168C7.68549 5.62209 7.625 5.42271 7.625 5.21875C7.625 4.94525 7.73365 4.68294 7.92705 4.48955C8.12045 4.29615 8.38275 4.1875 8.65625 4.1875ZM9.6875 13.8125C9.32283 13.8125 8.97309 13.6676 8.71523 13.4098C8.45737 13.1519 8.3125 12.8022 8.3125 12.4375V9C8.13017 9 7.9553 8.92757 7.82637 8.79864C7.69744 8.6697 7.625 8.49484 7.625 8.3125C7.625 8.13016 7.69744 7.9553 7.82637 7.82636C7.9553 7.69743 8.13017 7.625 8.3125 7.625C8.67718 7.625 9.02691 7.76987 9.28478 8.02773C9.54264 8.28559 9.6875 8.63533 9.6875 9V12.4375C9.86984 12.4375 10.0447 12.5099 10.1736 12.6389C10.3026 12.7678 10.375 12.9427 10.375 13.125C10.375 13.3073 10.3026 13.4822 10.1736 13.6111C10.0447 13.7401 9.86984 13.8125 9.6875 13.8125Z'
										fill='#EF9545'
									/>
								</svg>
							</span>
							Оплата при получении товара
						</div>
						<button className={css.btn}>Отменить заказ</button>
					</footer>
				)}
			</div>
		</div>
	);
}

export default OrderCostCard;
