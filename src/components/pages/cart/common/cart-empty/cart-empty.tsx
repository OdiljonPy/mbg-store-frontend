import Image from "next/image";

import Button from "@/components/shared/button";
import css from "./cart-empty.module.css";
import {router} from "next/client";

function CartEmpty() {

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
			<p className={css.text}>Корзина пуста</p>
			<Button className={css.btn} onClick={() => router.push('/')}>Товары на скидке</Button>
		</div>
	);
}

export default CartEmpty;
