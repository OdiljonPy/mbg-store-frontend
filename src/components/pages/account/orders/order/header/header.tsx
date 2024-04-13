import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { useTranslations } from "next-intl";

import {
    EnumDeliveryType,
    IOrder,
    OrderStatusChoices
} from "@/data-types/order/order";

import dayjs from "dayjs";
import css from "./header.module.css";

import Button from "@/components/shared/button";
import Skeleton from "react-loading-skeleton";
import Badge from "../../components/badge/badge";
import {
    orderStatusMap
} from "../../constants/orders/status-map";
import { useReorderProducts } from "../../hooks/use-reorder-products";

interface Props {
	order: IOrder;
	loading: boolean;
}

function Header({ order, loading }: Props) {
	const t = useTranslations();
	
	const { reorderItems } = useReorderProducts(order.order_items);

	return (
		<div className={css.header}>
			{loading ? (
				<>
					<Skeleton width={350} height={15} />
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
								<Skeleton width={400} height={30} />
							</>
						) : (
							<>
								<h1 className={css.title}>
									Заказ № {order.id}
								</h1>
								{order.type === EnumDeliveryType.DELIVERY ? (
									<Badge
										status={
											OrderStatusChoices[
												order.status
											]
										}
									>
										{orderStatusMap[order.status]}
									</Badge>
								) : (
									<Badge
										status={
											OrderStatusChoices[order.status]
										}
									>
										{orderStatusMap[order.status]}
									</Badge>
								)}
							</>
						)}
					</div>
					{loading ? (
						<Skeleton width={250} height={20} />
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
						onClick={reorderItems}
					>
						Повторить заказ
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Header;
