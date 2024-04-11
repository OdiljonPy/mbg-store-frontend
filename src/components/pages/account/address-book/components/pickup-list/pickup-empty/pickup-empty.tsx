import Image from "next/image";

import css from "./pickup-empty.module.css";

function PickupEmpty() {
	return (
		<div className={css.wrapper}>
			<div className={css.image_wrapper}>
				<Image className={css.image} src='/images/account/address-book/address-book-empty.png' alt='empty-address-book' width={200} height={180} />
			</div>
			<p className={css.text}>У вас пока нет сохраненных магазинов</p>
		</div>
	);
}

export default PickupEmpty;
