import { IOrder } from "@/data-types/order/order";
import { cn } from "@/utils/cn";
import dayjs from "dayjs";

import { Icons } from "@/components/shared/icons";
import Info from "@/components/shared/info/info";
import { IStore } from "@/data-types/products/common";
import { useTranslations } from "next-intl";
import Skeleton from "react-loading-skeleton";
import css from "./pickup.module.css";

interface Props {
	order: IOrder;
	loading: boolean;
}

function Pickup({ order, loading }: Props) {
	const t = useTranslations("orders.pickup");

	const stores: IStore[] = [];

	for (let i = 0; i < order.order_items.length; i++) {
		const storeId = order.order_items[i].product.store.id;

		if (!stores.some((store) => store.id === storeId)) {
			stores.push(order.order_items[i].product.store);
		}
	}

	return (
		<>
			<p className={css.title}>{t("title")}:</p>
			{stores.map((store) => {
				const createdTime = new Date(order.created_at);
				const availableTime = createdTime.setHours(
					createdTime.getHours() + 4
				);

				return (
					<div className={css.card} key={store.id}>
						<header className={css.card_header}>
							<span>
								<Icons.market />
							</span>
							<div>
								{loading ? (
									<>
										<Skeleton
											width={200}
											height={20}
											style={{ marginBottom: 5 }}
										/>
										<Skeleton width={300} height={15} />
										<Skeleton width={100} height={15} />
									</>
								) : (
									<>
										<h3 className={css.card_title}>
											{store.brand_name}
										</h3>
										<p className={css.card_subtitle}>
											{store.store_location_name}
										</p>
										<p
											className={cn(
												css.card_subtitle,
												css.time
											)}
										>
											<Icons.time />
											{store.working_time}
										</p>
									</>
								)}
							</div>
						</header>
						<div className={css.card_body}>
							{loading ? (
								<Skeleton width={"100%"} height={25} />
							) : (
								<Info>
									{t("available_for_pickup")}{" "}
									<b>
										{dayjs(availableTime).format(
											"H:mm, D MMMM YYYY г."
										)}
									</b>
								</Info>
							)}
						</div>
					</div>
				);
			})}
		</>
	);
}

export default Pickup;
