import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { useTranslations } from "next-intl";

import {
	EnumDeliveryType,
	EnumOrderStatusDelivery,
	EnumOrderStatusPickup,
	IOrder,
} from "@/data-types/order/order";

import dayjs from "dayjs";
import css from "./header.module.css";

import Button from "@/components/shared/button";
import Skeleton from "react-loading-skeleton";
import Badge from "../../components/badge/badge";
import {
	deliveryStatusMap,
	pickupStatusMap,
} from "../../constants/orders/status-map";

interface Props {
	order: IOrder;
	loading: boolean;
}

function Header({ order, loading }: Props) {
	const t = useTranslations();

	return (
		<div className={css.header}>
			{loading ? (
				<>
					<Skeleton
						width={350}
						height={15}
					/>
				</>
			) : (
				<Breadcrumbs
					items={[
						{
							path: "/",
							label: t("header.home"),
						},
						{
							path: "/account",
							label: t("header.account"),
						},
						{
							path: "/account/orders",
							label: t("header.orders"),
						},
						{
							path: "/cart/delivery",
							label: t("header.order") + " " + order.id,
						},
					]}
				/>
			)}
			<div className={css.header_main}>
				<div className={css.header_left}>
					<div className={css.header_title_badge}>
						{loading ? (
							<>
								<Skeleton
									width={400}
									height={30}
								/>
							</>
						) : (
							<>
								<h1 className={css.title}>
									Заказ № {order.id}
								</h1>
								{order.type === EnumDeliveryType.DELIVERY ? (
									<Badge
										status={
											EnumOrderStatusDelivery[
												order.status
											]
										}
									>
										{deliveryStatusMap[order.status]}
									</Badge>
								) : (
									<Badge
										status={
											EnumOrderStatusPickup[order.status]
										}
									>
										{pickupStatusMap[order.status]}
									</Badge>
								)}
							</>
						)}
					</div>
					{loading ? (
						<Skeleton
							width={250}
							height={20}
						/>
					) : (
						<p className={css.date}>
							Размещен{" "}
							{dayjs(order.created_at)
								.format("D MMMM YYYY г. (H:mm)")
								.toLowerCase()}
						</p>
					)}
				</div>
				<div className={css.header_right}>
					<Button
						variant='tertiary'
						className={css.btn}
					>
						Повторить заказ
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Header;
