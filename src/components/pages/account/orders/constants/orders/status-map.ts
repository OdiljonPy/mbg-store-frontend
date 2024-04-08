import {
	EnumDeliveryType,
	EnumOrderStatusDelivery,
	EnumOrderStatusPickup,
} from "@/data-types/order/order";

export const receivingMethodMap: Record<EnumDeliveryType, string> = {
	[EnumDeliveryType.DELIVERY]: "Доставка",
	[EnumDeliveryType.PICKUP]: "Самовывоз",
};

export const deliveryStatusMap: Record<EnumOrderStatusDelivery, string> = {
	[EnumOrderStatusDelivery.WAITING_FOR_PAYMENT]: "Ожидает оплаты",
	[EnumOrderStatusDelivery.PAID]: "Оплачен",
	[EnumOrderStatusDelivery.RECEIVED]: "Получен",
	[EnumOrderStatusDelivery.PROGRESSING]: "В процессе",
	[EnumOrderStatusDelivery.ON_THE_WAY]: "В пути",
	[EnumOrderStatusDelivery.DELIVERED]: "Доставлен",
	[EnumOrderStatusDelivery.CANCELLED]: "Отменен",
};

export const pickupStatusMap: Record<EnumOrderStatusPickup, string> = {
	[EnumOrderStatusDelivery.WAITING_FOR_PAYMENT]: "Ожидает оплаты",
	[EnumOrderStatusDelivery.PAID]: "Оплачен",
	[EnumOrderStatusPickup.RECEIVED]: "Получен",
	[EnumOrderStatusPickup.PROGRESSING]: "В процессе",
	[EnumOrderStatusPickup.READY_FOR_PICKUP]: "Готов к выдаче",
	[EnumOrderStatusPickup.PICKED_UP]: "Выдан",
	[EnumOrderStatusPickup.CANCELLED]: "Отменен",
};
