import css from "@/components/pages/product/wrapper/components/info/gallery/thumbnail/thumbnail.module.css";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { IProductInner } from "@/data-types/products/product-inner/product-inner";
import { useTranslations } from "next-intl";
import { ForwardedRef, forwardRef } from "react";
import mainCss from "./preview.module.css";
import { productFlagMap } from "@/components/shared/product/components/product-top/product-flag/product-flag-map";
import FlagIcon from "@/components/shared/product/components/product-top/product-flag/flag-icon";
import Badge from "@/components/shared/badge/badge";

interface props {
	gallery: IProductInner;
	loading: boolean;
}

const Preview = forwardRef(
	({ loading, gallery }: props, ref: ForwardedRef<HTMLDivElement>) => {
		const t = useTranslations();

		return (
			<div ref={ref} className={`keen-slider ${mainCss.wrapper} `}>
				{loading
					? ""
					: gallery?.images?.map((item) => {
							return (
								<div
									key={item.id}
									className={`${css.item} ${mainCss.img} keen-slider__slide`}
								>
									{gallery?.available < 1 && (
										<div className={css.badge}>
											<Badge
												text={t("products.sold")}
												color={"#767BF9"}
											/>
										</div>
									)}

									<div className={css.badge}>
										{gallery?.available > 0 &&
										gallery?.flag ? (
											<Badge
												text={t(
													productFlagMap[
														gallery?.flag
													]
												)}
												color={"#767BF9"}
											>
												{gallery?.flag ===
												"free_ship" ? (
													<FlagIcon />
												) : (
													""
												)}
											</Badge>
										) : (
											""
										)}
									</div>
									<ResponsiveImage
										src={item.image}
										alt={
											"Кукуруза Bonduelle Classique сладкая"
										}
									/>
								</div>
							);
					  })}
				{!loading && gallery?.images?.length === 0 && (
					<div
						className={`${css.item} ${mainCss.img} keen-slider__slide`}
					>
						<ResponsiveImage
							src={"/images/products/not-available.png"}
							alt={"Кукуруза Bonduelle Classique сладкая"}
						/>
					</div>
				)}
			</div>
		);
	}
);

Preview.displayName = "Preview";
export default Preview;
