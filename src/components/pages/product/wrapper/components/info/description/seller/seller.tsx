import star from "@/../public/images/icons/star.svg";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { IProductInner } from "@/data-types/products/product-inner/product-inner";
import { cn } from "@/utils/cn";
import { priceFormatter } from "@/utils/price-formatter/price-formatter";
import { useTranslations } from "next-intl";
import Link from "next/link";
import logo from "public/images/icons/map.svg";
import css from "./seller.module.css";

interface props {
	store?: IProductInner["store"];
	className?: string;
}

const Seller = ({ store, className }: props) => {
	const t = useTranslations();
	return (
		<div className={cn(css.wrapper, className)}>
			<p className={css.seller}>
				<p className={css.label}>{t("product.seller")}:</p>
				<Link
					href={`/stores/${store?.id}?sort=popular&id=${store?.id}&stores=${store?.id}`}
					className={css.value}
				>
					{store?.brand_name}
					<div className={css.tooltip}>
						<div className={css.tooltip_arrow} />
						<div className={css.tooltip_content}>
							<span className={css.img}>
								<ResponsiveImage src={star} alt={"rating"} />
							</span>
							<div className={css.text}>
								{store?.rating} (
								{priceFormatter(store?.rating_count || 1)}{" "}
								{t("product.rates").toLowerCase()})
							</div>
						</div>
					</div>
				</Link>
				<div className={css.location}>
					<a
						href={`https://www.google.com/maps/@${store?.latitude},${store?.longitude}z?entry=ttu`}
						target='_blank'
					>
						<ResponsiveImage src={logo} alt='Store location' />
					</a>
				</div>
			</p>
		</div>
	);
};

export default Seller;
