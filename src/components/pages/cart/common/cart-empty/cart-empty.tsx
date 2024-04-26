import Image from "next/image";

import Button from "@/components/shared/button";
import css from "./cart-empty.module.css";
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";

interface props{
	text?:string
}

function CartEmpty({text}:props) {
	const { push } = useRouter();
	const t = useTranslations()
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
			<p className={css.text}>{t(text)}</p>
			<Button className={css.btn} onClick={() => push('/')}>{t('cart.fill_cart')}</Button>
		</div>
	);
}

export default CartEmpty;
