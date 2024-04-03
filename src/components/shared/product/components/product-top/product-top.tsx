import DiscountBadge from "@/components/shared/discount-badge/discount-badge";
import ProductActions from "@/components/shared/product/components/product-top/product-actions/product-actions";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { IProduct } from "@/data-types/products/common";
import Link from "next/link";
import css from "./product-top.module.css";
import AddToFav from "@/components/shared/add-to-fav/add-to-fav";

interface props {
	product: IProduct;
}

const ProductTop = ({ product }: props) => {
	const { id, images, name, discount, count } = product;

	return (
		<div className={css.actions}>
			{discount ? (
				<div className={css.discount}>
					<DiscountBadge discount_percentage={discount} />
				</div>
			) : null}
			{(
				<div className={css.favorite_icon}>
					<AddToFav product={product}/>
				</div>

			)}
			<Link href={`/products/${id}`} className={css.img}>
				<ResponsiveImage src={images[0]?.image} alt={name} />
			</Link>
			<ProductActions count={count} product={product} />
		</div>
	);
};

export default ProductTop;
