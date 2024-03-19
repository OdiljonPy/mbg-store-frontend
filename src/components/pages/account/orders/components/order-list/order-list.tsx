import {
	EnumDeliveryMethod,
	EnumOrderStatusDelivery,
	EnumOrderStatusPickup,
	IOrder,
} from "@/data-types/order/order";
import { useKeenSlider } from "keen-slider/react";
import OrderItem from "./order-item/order-item";
import css from "./order-list.module.css";

export const data: IOrder[] = [
	{
		id: 1,
		title: "Order 1",
		date: "2022-01-02",
		time: "12:00",
		receiving_method: EnumDeliveryMethod.DELIVERY,
		status: EnumOrderStatusDelivery.DELIVERED,
	},
	{
		id: 2,
		title: "Order 2",
		date: "2022-01-03",
		time: "12:00",
		receiving_method: EnumDeliveryMethod.PICKUP,
		status: EnumOrderStatusDelivery.CANCELLED,
	},
	{
		id: 3,
		title: "Order 3",
		date: "2022-02-01",
		time: "12:00",
		receiving_method: EnumDeliveryMethod.DELIVERY,
		status: EnumOrderStatusPickup.PROGRESSING,
	},
	{
		id: 4,
		title: "Order 4",
		date: "2022-01-21",
		time: "12:00",
		receiving_method: EnumDeliveryMethod.DELIVERY,
		status: EnumOrderStatusDelivery.RECEIVED,
	},
	{
		id: 5,
		title: "Order 5",
		date: "2022-04-11",
		time: "12:00",
		receiving_method: EnumDeliveryMethod.PICKUP,
		status: EnumOrderStatusPickup.READY_FOR_PICKUP,
	},
];



function OrdersList() {

	return (
		<ul className={css.list}>
			{data.map((item) => (
				<li key={item.id}>
					<OrderItem order={item} />
				</li>
			))}

		</ul>
	);
}

export default OrdersList;
