import { formatPhoneNumber } from "@/utils/phone-format/phone-format";
import css from "./order-details-card.module.css";
import { IOrder } from "@/data-types/order/order";

interface Props {
	order: IOrder;
}

function OrderDetailsCard({ order }: Props) {
	return (
		<div className={css.card}>
			<header className={css.card_header}>
				<h2 className={css.card_title}>Детали Заказа</h2>
			</header>
			<div className={css.card_body}>
				<ul className={css.list}>
					<li>
						<span>Получатель</span>
						<span>Малика Кадирова</span>
					</li>
					<li>
						<span>Номер телефона</span>
						<span>{formatPhoneNumber("+998901234567")}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default OrderDetailsCard;
