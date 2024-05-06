import css from "@/components/pages/product/wrapper/components/info/gallery/thumbnail/thumbnail.module.css";
import Badge from "@/components/shared/badge/badge";
import { productFlagMap } from "@/components/shared/product/components/product-top/product-flag-map";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { IProductInner } from "@/data-types/products/product-inner/product-inner";
import { useTranslations } from "next-intl";
import { ForwardedRef, forwardRef } from "react";
import mainCss from "./preview.module.css";

interface props {
	gallery: IProductInner;
	loading: boolean;
}

const Preview = forwardRef(
	({ loading, gallery }: props, ref: ForwardedRef<HTMLDivElement>) => {
		const t = useTranslations();

		return (
			<div ref={ref} className={`keen-slider ${mainCss.wrapper}`}>
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
											/>
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
			</div>
		);
	}
);

Preview.displayName = "Preview";
export default Preview;
