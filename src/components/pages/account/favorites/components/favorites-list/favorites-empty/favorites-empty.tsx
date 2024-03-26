import Image from "next/image";

import css from "./favorites-empty.module.css";

function FavoritesEmpty() {
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
			<p className={css.text}>У вас пока нет избранных</p>
			<button className={css.button}>Товары на скидке</button>
		</div>
	);
}

export default FavoritesEmpty;
