import AboutProduct from "@/components/pages/product/wrapper/components/info/description/about-product/about-product";
import Actions from "@/components/pages/product/wrapper/components/info/description/actions/actions";
import Deliveries from "@/components/pages/product/wrapper/components/info/description/deliveries/deliveries";
import Price from "@/components/pages/product/wrapper/components/info/description/price/price";
import { Rate } from "@/components/pages/product/wrapper/components/info/description/rate/rate";
import Seller from "@/components/pages/product/wrapper/components/info/description/seller/seller";
import Title from "@/components/pages/product/wrapper/components/info/description/title/title";
import Badge from "@/components/shared/badge/badge";
import { IProductInner } from "@/data-types/products/product-inner/product-inner";
import { useTranslations } from "next-intl";
import Skeleton from "react-loading-skeleton";
import css from "./description.module.css";

interface props {
	info: IProductInner;
	loading: boolean;
}

const Description = ({ info, loading }: props) => {
	const { comments, related_products, comparison_products, ...product } =
		info;
	const t = useTranslations();
	return (
		<div className={css.description}>
			<Title title={info?.name} loading={loading} />
			{loading ? (
				<Skeleton
					className={css.skeleton_position}
					count={1}
					height={"30px"}
					width={"160px"}
				/>
			) : (
				<div className={css.text}>
					<p className={css.weight}>{`${info?.amount_type}`}</p>
					{info?.available >= 1 ? (
						<Badge text={t("product.has")} color={"#60C787"} />
					) : (
						<Badge
							text={t("product.has_not")}
							color={"#F2F2F2"}
							className={css.text_grey}
						/>
					)}
				</div>
			)}

			<Seller store={info?.store} />
			<Rate
				rate={info?.rating}
				count={info?.rating_count}
				loading={loading}
			/>
			<Price
				price={info?.price}
				discount_percentage={info?.discount}
				discount_price={info?.discount_price}
				loading={loading}
			/>
			<Deliveries
				free_shipping={product?.free_shipping}
				pickup={product?.pickup}
			/>
			<Actions product={product} />
			<AboutProduct description={info?.description} />
		</div>
	);
};

export default Description;
