import DeliverySwitch from "@/components/pages/products/filters/desktop/delivery/delivery-switch/delivery-switch";
import DeliveryItem from "@/components/pages/products/filters/desktop/delivery/delivery/delivery";
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import { useDeliveryOptions } from "@/components/pages/products/filters/mobile/hooks/use-delivery-options";
import { useTranslations } from "next-intl";
import css from "./delivery.module.css";

interface props {}

const Delivery = (props: props) => {
	const t = useTranslations();
	const deliveryOptions = useDeliveryOptions();
	return (
		<FilterCollapse
			title={t("filters.delivery.title")}
			queryResetList={["delivery", "hasDelivery"]}
		>
			<div className={css.delivery}>
				<DeliverySwitch />
				{deliveryOptions.map((item) => (
					<DeliveryItem item={item} key={item.id} />
				))}
			</div>
		</FilterCollapse>
	);
};

export default Delivery;
