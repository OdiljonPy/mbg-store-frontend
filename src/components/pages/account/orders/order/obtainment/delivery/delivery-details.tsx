import { cn } from "@/utils/cn";

import { IOrder, OrderStatusChoices } from "@/data-types/order/order";
import { formatPhoneNumber } from "@/utils/phone-format/phone-format";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import { useTranslations } from "next-intl";
import Skeleton from "react-loading-skeleton";
import css from "./delivery.module.css";

interface Props {
	order: IOrder;
	loading: boolean;
}

export const DeliveryDetails = ({ order, loading }: Props) => {
	const t = useTranslations("orders.delivery");

	if (!loading) {
		if (
			order.status !== OrderStatusChoices.DELIVERED &&
			order.status !== OrderStatusChoices.PAID &&
			order.status !== OrderStatusChoices.ON_THE_WAY
		)
			return;
	}

	return (
		<div className={cn(css.card, css.delivery_card)}>
			<div>
				<header className={css.card_header}>
					<h3 className={css.card_title}>{t("delivery_details")}</h3>
				</header>
				{/* // TODO */}
				<div className={css.card_body}>
					<ul className={css.list}>
						<li>
							<span>{t("courier")}</span>
							{loading ? (
								<Skeleton width={100} />
							) : (
								<span>Талипов Мурод</span>
							)}
						</li>
						<li>
							<span>{t("phone")}</span>
							{loading ? (
								<Skeleton width={150} />
							) : (
								<span>
									{formatPhoneNumber("+998 (91) 234-56-78 ")}
								</span>
							)}
						</li>
						<li>
							<span>{t("transport")}</span>
							{loading ? (
								<Skeleton width={150} />
							) : (
								<span>белый Chevrolet Matiz 01M173XB</span>
							)}
						</li>
						<li>
							<span>{t("arrival_date")}</span>
							{loading ? (
								<Skeleton width={120} />
							) : (
								<span>~ 18:20 - 19:00</span>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className={css.map}>
				{loading ? (
					<Skeleton width={"100%"} height={266} />
				) : (
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
							defaultOptions={{
								suppressMapOpenBlock: true,
							}}
							controls={["zoomControl", "fullscreenControl"]}
							height={"266px"}
							width={"100%"}
						/>
					</YMaps>
				)}
			</div>
		</div>
	);
};
