import DiscountBadge from "@/components/shared/discount-badge/discount-badge";
import ProductActions from "@/components/shared/product/components/product-top/product-actions/product-actions";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { IProduct } from "@/data-types/products/common";
import Link from "next/link";
import css from "./product-top.module.css";

interface props {
	product: IProduct;
}

const ProductTop = ({ product }: props) => {
	const { id, images, name, discount, count, is_favorite } = product;

	return (
		<div className={css.actions}>
			{discount ? (
				<div className={css.discount}>
					<DiscountBadge discount_percentage={discount} />
				</div>
			) : null}
			{is_favorite && (
				<div className={css.favorite_icon}>
					<svg
						width='30'
						height='30'
						viewBox='0 0 30 30'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M28.125 11.0156C28.125 19.2187 15.9621 25.8586 15.4441 26.1328C15.3076 26.2063 15.155 26.2447 15 26.2447C14.845 26.2447 14.6924 26.2063 14.5559 26.1328C14.0379 25.8586 1.875 19.2187 1.875 11.0156C1.87717 9.08933 2.64335 7.24255 4.00545 5.88045C5.36755 4.51835 7.21433 3.75217 9.14062 3.75C11.5605 3.75 13.6793 4.79062 15 6.54961C16.3207 4.79062 18.4395 3.75 20.8594 3.75C22.7857 3.75217 24.6325 4.51835 25.9946 5.88045C27.3566 7.24255 28.1228 9.08933 28.125 11.0156Z'
							fill='#60C787'
						/>
					</svg>
				</div>
			)}
			<Link
				href={`/products/${id}`}
				className={css.img}
			>
				<ResponsiveImage
					src={images[0]?.image}
					alt={name}
				/>
			</Link>
			<ProductActions count={count} />
		</div>
	);
};

export default ProductTop;
