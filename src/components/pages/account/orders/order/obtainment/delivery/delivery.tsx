import dayjs from "dayjs";
import Badge from "../../../components/badge/badge";

import Info from "@/components/shared/info/info";
import { IOrder, OrderStatusChoices } from "@/data-types/order/order";
import { useTranslations } from "next-intl";
import Skeleton from "react-loading-skeleton";
import { DeliveryDetails } from "./delivery-details";
import css from "./delivery.module.css";

interface Props {
	order: IOrder;
	loading: boolean;
}

function Delivery({ order, loading }: Props) {
	const t = useTranslations("orders.delivery");
	return (
		<>
			{loading ? (
				<Skeleton className={css.title} width={"30%"} />
			) : (
				<p className={css.title}>{t("title")}:</p>
			)}
			<div className={css.card}>
				<header className={css.card_header}>
					{loading ? (
						<>
							<Skeleton
								width={200}
								height={20}
								style={{ marginBottom: 5 }}
							/>
							<Skeleton width={"70%"} height={15} />
						</>
					) : (
						<>
							<h3 className={css.card_title}>
								{order.delivery_address?.address_name}{" "}
								{order.delivery_address?.main_address && (
									<Badge>{t("main")}</Badge>
								)}
							</h3>
							<p className={css.card_subtitle}>
								{order.delivery_address?.address}
							</p>
						</>
					)}
				</header>
				{/* // TODO */}
				{order.status === OrderStatusChoices.ON_THE_WAY && (
					<div className={css.card_body}>
						{loading ? (
							<Skeleton width={"100%"} height={25} />
						) : (
							<Info>
								{t("approximate_arrival_date")}:{" "}
								<strong>
									{dayjs(order.created_at).format(
										"D MMMM YYYY г."
									)}
								</strong>
							</Info>
						)}
					</div>
				)}
			</div>
			<DeliveryDetails order={order} loading={loading} />
		</>
	);
}

export default Delivery;
