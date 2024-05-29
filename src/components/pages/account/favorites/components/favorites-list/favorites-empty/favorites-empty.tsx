import Button from "@/components/shared/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import css from "./favorites-empty.module.css";

function FavoritesEmpty() {
	const t = useTranslations("favorites");

	return (
		<div className={css.wrapper}>
			<div className={css.image_wrapper}>
				<Image
					className={css.image}
					src='/images/account/favorites/favorites-empty.png'
					alt='empty-favorites'
					width={200}
					height={180}
				/>
			</div>
			<p className={css.text}>{t("empty")}</p>
			<Link
				href={
					"/products?filters=true&changeFilter=false&onSales=true&sale=1"
				}
				className={css.link}
			>
				<Button className={css.btn}>{t("products_on_sale")}</Button>
			</Link>
		</div>
	);
}

export default FavoritesEmpty;
