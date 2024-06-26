import Price from "@/components/pages/cart/common/order-card/components/price/index";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { IProduct } from "@/data-types/products/common";
import { useTranslations } from "next-intl";
import css from "./cart.module.css";
interface props {
	product: IProduct;
	orderQuantity?: number;
}
const OrderCart = ({ product, orderQuantity }: props) => {
	const t = useTranslations();
	const {
		images,
		name,
		amount_type,
		store,
		price,
		discount_price,
		discount,
		count,
	} = product;
	return (
		<div className={css.product}>
			<div className={css.img}>
				<ResponsiveImage
					src={
						images[0]?.image || "/images/products/not-available.png"
					}
					alt={name}
				/>
			</div>
			<div className={css.info}>
				<div className={css.info_left}>
					<div>
						<p className={css.title}>{name}</p>
						<p className={css.weigh}>{amount_type}</p>
					</div>
					<p className={css.seller}>
						<span>{t("product.seller")}:</span>
						<span className={css.seller_value}>
							{store?.brand_name}
						</span>
					</p>
				</div>
				<div className={css.info_right}>
					<Price
						discount={discount}
						price={price}
						discount_price={discount_price}
						count={count ? count : 1}
					/>
					<p className={css.count}>
						{t("orders.order_item_list.qty")}:{" "}
						<span className={css.count_value}>
							{orderQuantity ? orderQuantity : count}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default OrderCart;
