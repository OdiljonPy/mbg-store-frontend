import css from "./info.module.css";

import { cashbackIcon } from "./promo-icon";

interface props {}

const Info = (props: props) => {
	return (
		<h2 className={css.title}>
			<p>Скачивайте приложение</p>
			<p className={css.cashback}>
				и получайте <span className={css.icon}>{cashbackIcon}</span>
			</p>
		</h2>
	);
};

export default Info;
