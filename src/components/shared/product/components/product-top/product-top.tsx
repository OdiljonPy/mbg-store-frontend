import Badge from "@/components/shared/badge/badge";
import DiscountBadge from "@/components/shared/discount-badge/discount-badge";
import ProductActions from "@/components/shared/product/components/product-top/product-actions/product-actions";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { IProduct } from "@/data-types/products/common";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Link from "next/link";
import { productFlagMap } from "./product-flag/product-flag-map";
import css from "./product-top.module.css";

import FlagIcon from "@/components/shared/product/components/product-top/product-flag/flag-icon";

const ClientAddToFav = dynamic(
	() => import("@/components/shared/add-to-fav/add-to-fav"),
	{
		ssr: false,
	}
);

interface props {
	product: IProduct;
}

const ProductTop = ({ product }: props) => {
	const t = useTranslations();
	const { id, images, name, discount, count, available } = product;

	return (
		<div className={css.actions}>
			<Link
				href={`/products/${id}`}
				className={css.left}
			>
				{available > 1 && discount ? (
					<div className={css.discount}>
						<DiscountBadge discount_percentage={discount} />
					</div>
				) : null}
				{available < 1 ? (
					<Badge
						text={t("products.sold")}
						color={"#767BF9"}
					/>
				) : (
					""
				)}
				{available > 0 && product.flag ? (
					<Badge
						className={css.flag_badge}
						text={t(productFlagMap[product.flag])}
						color={"#767BF9"}
					>
						{product.flag === "free_ship" ? <FlagIcon /> : ""}
					</Badge>
				) : (
					""
				)}
			</Link>
			<div className={css.top_right}>
				<ClientAddToFav product={product} />
			</div>
			<Link
				href={`/products/${id}`}
				className={css.img}
			>
				<ResponsiveImage
					src={images[0]?.image || "/images/products/not-available.png"}
					alt={name}
				/>
			</Link>
			<ProductActions
				count={count}
				product={product}
			/>
		</div>
	);
};

export default ProductTop;
