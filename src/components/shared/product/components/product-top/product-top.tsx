import DiscountBadge from "@/components/shared/discount-badge/discount-badge";
import ProductActions from "@/components/shared/product/components/product-top/product-actions/product-actions";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { IProduct } from "@/data-types/products/common";
import Link from "next/link";
import css from "./product-top.module.css";
import AddToFav from "@/components/shared/add-to-fav/add-to-fav";
import Badge from "@/components/shared/badge/badge";
import React from "react";
import {useTranslations} from "next-intl";

interface props {
	product: IProduct;
}

const ProductTop = ({ product }: props) => {
	const t = useTranslations()
	const { id, images, name, discount, count,available } = product;

	return (
		<div className={css.actions}>
			<div className={css.discount}>
				{
					(available > 1 && discount) ? <DiscountBadge discount_percentage={discount} /> : ''
				}
			</div>
			<div className={css.unavailable}>
				{
					available < 1 ? <Badge text={t('products.sold')} color={'#767BF9'}/> : ''
				}
			</div>

			{
				available > 0 ?
				<div className={css.favorite_icon}>
					<AddToFav product={product}/>
				</div> : ''
			}
			<Link href={`/products/${id}`} className={css.img}>
				<ResponsiveImage src={images[0]?.image} alt={name} />
			</Link>
			<ProductActions count={count} product={product} />
		</div>
	);
};

export default ProductTop;
