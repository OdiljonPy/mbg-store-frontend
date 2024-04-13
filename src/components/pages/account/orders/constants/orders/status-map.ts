import { EnumDeliveryType, OrderStatusChoices } from "@/data-types/order/order";

export const receivingMethodMap: Record<EnumDeliveryType, string> = {
	[EnumDeliveryType.DELIVERY]: "Доставка",
	[EnumDeliveryType.PICKUP]: "Самовывоз",
};

export const orderStatusMap: Record<OrderStatusChoices, string> = {
	[OrderStatusChoices.WAITING_FOR_PAYMENT]: "Ожидает оплаты",
	[OrderStatusChoices.PAID]: "Оплачен",
	[OrderStatusChoices.ACCEPTED]: "Получен",
	[OrderStatusChoices.PROGRESSING]: "В процессе",
	[OrderStatusChoices.ON_THE_WAY]: "В пути",
	[OrderStatusChoices.READY_FOR_PICKUP]: "Готов к выдаче",
	[OrderStatusChoices.DELIVERED]: "Доставлен",
	[OrderStatusChoices.PICKED_UP]: "Выдан",
	[OrderStatusChoices.CANCELLED]: "Отменен",
};
