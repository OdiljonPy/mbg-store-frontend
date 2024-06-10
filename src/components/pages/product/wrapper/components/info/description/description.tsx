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
import css from "./description.module.css";
import InfoPreloader from "@/components/pages/product/wrapper/components/info/info_preloader/info_preloader";
import NotificationStore from "@/components/shared/notification-store/NotificationStore";
import React, { useState } from "react";
import Button from "@/components/shared/button";
import { cn } from "@/utils/cn";

interface props {
	info: IProductInner;
	loading: boolean;
}

const Description = ({ info, loading }: props) => {
	const { comments, related_products, comparison_products, ...product } = info;
	const t = useTranslations();
	return (
		<div className={css.description}>
			{loading ? (
				<InfoPreloader />
			) : (
				<>
					<Title title={info?.name} />

					<div className={css.text}>
						{info?.available >= 1 ? (
							<>
								<p className={css.weight}>{`${info?.amount_type}`}</p>
								<Badge
									text={t("product.has", { count: info?.available })}
									color={"#60C787"}
									className={css.custom_badge}
								/>
							</>
						) : (
							<Badge
								text={t("product.has_not")}
								color={"#F2F2F2"}
								className={cn(css.custom_badge, css.text_grey)}
							/>
						)}
					</div>

					<Seller store={info?.store} />
					<Rate
						rate={info?.rating}
						count={info?.rating_count}
					/>
					<Price
						price={info?.price}
						discount_percentage={info?.discount}
						discount_price={info?.discount_price}
					/>
					<Deliveries
						freeShippingDistance={info?.store.free_shipping_distance}
						free_shipping={product?.free_shipping}
						pickup={product?.pickup}
					/>
					<Actions product={product} />
					<AboutProduct description={info?.description} />
				</>
			)}
		</div>
	);
};

export default Description;
