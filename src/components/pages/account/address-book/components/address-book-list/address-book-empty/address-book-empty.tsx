import Image from "next/image";

import css from "./address-book-empty.module.css";

function AddressBookEmpty() {
	return (
		<div className={css.wrapper}>
			<div className={css.image_wrapper}>
				<Image
					className={css.image}
					src='/images/account/address-book/address-book-empty.png'
					alt='empty-address-book'
					width={200}
					height={180}
				/>
			</div>
			<p className={css.text}>У вас пока нет сохраненных магазиновока</p>
		</div>
	);
}

export default AddressBookEmpty;
