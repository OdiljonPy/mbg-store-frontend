import { IOrderItem } from "@/data-types/order/order";

import { useTranslations } from "next-intl";
import Image from "next/image";
import css from "./ordered-item.module.css";
import Price from "./price";

interface Props {
	orderedItem: IOrderItem;
}

function OrderedItem({ orderedItem }: Props) {
	const t = useTranslations("product");

	return (
		<div className={css.wrapper}>
			<div className={css.image_box}>
				{orderedItem.product.images && (
					<Image
						className={css.image}
						src={orderedItem.product.images[0].image}
						alt={orderedItem.product.name}
					/>
				)}
			</div>
			<div className={css.info}>
				<div className={css.info_left}>
					<div>
						<h4 className={css.title}>
							{orderedItem.product.name}
						</h4>
						<p className={css.weight}>
							{orderedItem.product.weight}
						</p>
					</div>
					<p className={css.seller}>
						<span>{t("seller")}:</span>
						<span className={css.seller_value}>
							{orderedItem.product.seller}
						</span>
					</p>
				</div>
				<div className={css.info_left}>
					<Price
						price={orderedItem.product.price}
						discount_price={orderedItem.product.discount_price}
						count={2}
					/>
					<p className={css.count}>
						кол-во:{" "}
						<span className={css.count_value}>
							{orderedItem.quantity}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default OrderedItem;
