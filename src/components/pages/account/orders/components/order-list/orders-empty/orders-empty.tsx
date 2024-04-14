import Image from "next/image";

import Button from "@/components/shared/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import css from "./orders-empty.module.css";

function OrdersEmpty() {
	const t = useTranslations("orders");

	return (
		<div className={css.wrapper}>
			<div className={css.image_wrapper}>
				<Image
					className={css.image}
					src='/images/account/orders/orders-empty.png'
					alt='empty-orders'
					width={200}
					height={180}
				/>
			</div>
			<p className={css.text}>{t("empty")}</p>
			<Link
				href={
					"/products?filters=true&changeFilter=false&clear_filter=false&onSales=true&sale=1"
				}
				className={css.link}
			>
				<Button className={css.btn}>{t("discount")}</Button>
			</Link>
		</div>
	);
}

export default OrdersEmpty;
