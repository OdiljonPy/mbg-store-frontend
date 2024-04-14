import { EnumDeliveryType, OrderStatusChoices } from "@/data-types/order/order";

export const receivingMethodMap: Record<EnumDeliveryType, string> = {
	[EnumDeliveryType.DELIVERY]: "method.DELIVERY",
	[EnumDeliveryType.PICKUP]: "method.PICKUP",
};

export const orderStatusMap: Record<OrderStatusChoices, string> = {
	[OrderStatusChoices.WAITING_FOR_PAYMENT]: "status.WAITING_FOR_PAYMENT",
	[OrderStatusChoices.PAID]: "status.PAID",
	[OrderStatusChoices.ACCEPTED]: "status.ACCEPTED",
	[OrderStatusChoices.PROGRESSING]: "status.PROGRESSING",
	[OrderStatusChoices.ON_THE_WAY]: "status.ON_THE_WAY",
	[OrderStatusChoices.READY_FOR_PICKUP]: "status.READY_FOR_PICKUP",
	[OrderStatusChoices.DELIVERED]: "status.DELIVERED",
	[OrderStatusChoices.PICKED_UP]: "status.PICKED_UP",
	[OrderStatusChoices.CANCELLED]: "status.CANCELLED",
};
