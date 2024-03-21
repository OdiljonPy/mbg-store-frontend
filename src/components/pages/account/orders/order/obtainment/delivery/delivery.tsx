import { formatPhoneNumber } from "@/utils/phone-format/phone-format";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import dayjs from "dayjs";
import Badge from "../../../components/badge/badge";

import { EnumOrderStatusDelivery, IOrder } from "@/data-types/order/order";
import { cn } from "@/utils/cn";
import Info from "@/components/shared/info/info";
import css from "./delivery.module.css";

interface Props {
	order: IOrder;
}

function Delivery({ order }: Props) {
	return (
		<>
			<p className={css.title}>Доставка по адресу:</p>
			<div className={css.card}>
				<header className={css.card_header}>
					<h3 className={css.card_title}>
						{order.delivery_address?.address_name}{" "}
						{order.delivery_address?.main_address && (
							<Badge>основной</Badge>
						)}
					</h3>
					<p className={css.card_subtitle}>
						{order.delivery_address?.address}
					</p>
				</header>
				{/* // TODO */}
				{order.status === EnumOrderStatusDelivery.ON_THE_WAY && (
					<div className={css.card_body}>
						<Info>
							Примерная дата доставки:{" "}
							<strong>
								{dayjs(order.created_at).format(
									"D MMMM YYYY г."
								)}
							</strong>
						</Info>
					</div>
				)}
			</div>
			<div className={cn(css.card, css.delivery_card)}>
				<div>
					<header className={css.card_header}>
						<h3 className={css.card_title}>Детали доставки</h3>
					</header>
					{/* // TODO */}
					<div className={css.card_body}>
						<ul className={css.list}>
							<li>
								<span>Курьер</span>
								<span>Талипов Мурод</span>
							</li>
							<li>
								<span>Номер телефона</span>
								<span>
									{formatPhoneNumber("+998 (91) 234-56-78 ")}
								</span>
							</li>
							<li>
								<span>Транспорт</span>
								<span>белый Chevrolet Matiz 01M173XB</span>
							</li>
							<li>
								<span>Время прибытия</span>
								<span>~ 18:20 - 19:00</span>
							</li>
						</ul>
					</div>
				</div>
				<div className={css.map}>
					<YMaps>
						<Map
							defaultState={{
								center: [41.311158, 69.279737],
								zoom: 12,
							}}
							modules={[
								"geocode",
								"geolocation",
								"SuggestView",
								"suggest",
								"control.ZoomControl",
								"control.FullscreenControl",
							]}
							defaultOptions={{ suppressMapOpenBlock: true }}
							controls={["zoomControl", "fullscreenControl"]}
							height={"266px"}
						/>
					</YMaps>
				</div>
			</div>
		</>
	);
}

export default Delivery;
