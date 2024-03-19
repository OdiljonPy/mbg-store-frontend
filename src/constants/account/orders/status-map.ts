import {
	EnumDeliveryMethod,
	EnumOrderStatusDelivery,
	EnumOrderStatusPickup,
} from "@/data-types/order/order";

export const receivingMethodMap: Record<EnumDeliveryMethod, string> = {
	[EnumDeliveryMethod.DELIVERY]: "Доставка",
	[EnumDeliveryMethod.PICKUP]: "Самовывоз",
};

export const deliveryStatusMap: Record<EnumOrderStatusDelivery, string> = {
	[EnumOrderStatusDelivery.RECEIVED]: "Получен",
	[EnumOrderStatusDelivery.PROGRESSING]: "В процессе",
	[EnumOrderStatusDelivery.ON_THE_WAY]: "В пути",
	[EnumOrderStatusDelivery.DELIVERED]: "Доставлен",
	[EnumOrderStatusDelivery.CANCELLED]: "Отменен",
};

export const pickupStatusMap: Record<EnumOrderStatusPickup, string> = {
	[EnumOrderStatusPickup.RECEIVED]: "Получен",
	[EnumOrderStatusPickup.PROGRESSING]: "В процессе",
	[EnumOrderStatusPickup.READY_FOR_PICKUP]: "Готов к выдаче",
	[EnumOrderStatusPickup.PICKED_UP]: "Выдан",
	[EnumOrderStatusPickup.CANCELLED]: "Отменен",
};
