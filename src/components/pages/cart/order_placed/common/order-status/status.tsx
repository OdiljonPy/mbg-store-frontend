import { orderStatusMap } from "@/components/pages/account/orders/constants/orders/status-map";
import StatusIconSVG from "@/components/pages/cart/order_placed/common/order-status/icon/StatusIconSVG";
import { OrderStatusChoices } from "@/data-types/order/order";
import { RootState } from "@/store";
import { useTranslations } from "next-intl";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import css from "./status.module.css";

const Status = () => {
	const t = useTranslations("orders");
	const { last_order, loading } = useSelector(
		(state: RootState) => state.last_order
	);

	return (
		<div className={css.status_box}>
			<StatusIconSVG />
			<div className={css.status_text}>
				<h2>{t("success")}</h2>
				<p>
					{t("order_details_card.status")}:{" "}
					{loading ? (
						<Skeleton height={20} width={150} />
					) : (
						<span
							className={
								css[OrderStatusChoices[last_order.status]]
							}
						>
							{t(orderStatusMap[last_order.status])}
						</span>
					)}
				</p>
			</div>
		</div>
	);
};

export default Status;
