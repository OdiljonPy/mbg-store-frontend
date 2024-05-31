import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { IProduct } from "@/data-types/products/common";
import { priceFormatter } from "@/utils/price-formatter/price-formatter";
import { useRouter } from "next/router";
import Rate from "../rate/rate";
import css from "./product.module.css";

interface props {
	product: IProduct;
}

const Product = ({ product }: props) => {
	const { push } = useRouter();
	const {
		name,
		id,
		images,
		price,
		discount,
		discount_price,
		rating,
		rating_count,
		store,
	} = product;
	return (
		<div className={css.product} onClick={() => push(`/products/${id}`)}>
			<div className={css.img}>
				<ResponsiveImage
					src={
						images?.[0]?.image ||
						"/images/products/not-available.png"
					}
					alt={"Mikado"}
				/>
			</div>
			<div className={css.wrapper}>
				<p className={css.title}>{name}</p>
			</div>
			<div className={css.wrapper}>
				<p className={css.price}>
					<span className={discount ? css.actualPrice : ""}>
						{" "}
						{priceFormatter(discount_price || price, true)}
					</span>
					<span
						className={`${css.oldPrice} ${
							discount ? css.show : ""
						}`}
					>
						{priceFormatter(price, true)}
					</span>
				</p>
			</div>
			<div className={css.wrapper}>
				<Rate count={rating_count} rate={rating} />
			</div>
			<p className={css.seller}>{store?.brand_name}</p>
		</div>
	);
};

export default Product;
