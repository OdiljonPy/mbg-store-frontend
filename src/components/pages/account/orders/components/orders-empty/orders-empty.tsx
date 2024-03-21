import Image from "next/image";
import React from "react";

import css from "./orders-empty.module.css";

function OrdersEmpty() {
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
			<p className={css.text}>У вас пока нет заказов</p>
			<button className={css.button}>Товары на скидке</button>
		</div>
	);
}

export default OrdersEmpty;
