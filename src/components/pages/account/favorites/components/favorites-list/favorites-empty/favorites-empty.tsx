import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";
import css from "./favorites-empty.module.css";

function FavoritesEmpty() {
	const router = useRouter();
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
			<button className={css.button} onClick={() => router.push("/")}>
				{t("products_on_sale")}
			</button>
		</div>
	);
}

export default FavoritesEmpty;
