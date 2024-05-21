import Info from "@/components/shared/info/info";
import { EnumDeliveryType, IOrder } from "@/data-types/order/order";
import { priceFormatter } from "@/utils/price-formatter/price-formatter";
import { useTranslations } from "next-intl";
import Skeleton from "react-loading-skeleton";
import css from "./order-cost-card.module.css";

interface Props {
	order: IOrder;
	loading: boolean;
}

function OrderCostCard({ order, loading }: Props) {
	const t = useTranslations("orders.order_cost_card");

	const productsCost =
		order.sale_price +
		order.total_price +
		(order.promo_code ? order.promo_code.discount : 0);

	return (
		<div className={css.card}>
			<header className={css.card_header}>
				<h2 className={css.card_title}>{t("title")}</h2>
			</header>
			<div className={css.card_body}>
				<ul className={css.list}>
					<li>
						<span>{t("products_cost")}</span>
						<span>
							{loading ? (
								<Skeleton width={100} />
							) : (
								<>{priceFormatter(productsCost, true)}</>
							)}
						</span>
					</li>
					<li>
						<span>{t("discounts")}</span>
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
							{t("promo_code")}{" "}
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
										-(order.promo_code?.discount || -0),
										true
									)}
								</>
							)}
						</span>
					</li>
					{order.type === EnumDeliveryType.DELIVERY && (
						<li>
							<span>{t("delivery")}</span>
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
							<span>{t("pickup")}</span>
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
						<span>{t("total")}</span>
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
						<Info>{t("payment_when_receiving")}</Info>
						<button className={css.btn}>{t("cancel")}</button>
					</footer>
				)}
			</div>
		</div>
	);
}

export default OrderCostCard;
