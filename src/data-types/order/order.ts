export enum EnumDeliveryMethod {
	DELIVERY,
	PICKUP,
}

export enum EnumOrderStatusDelivery {
	RECEIVED,
	PROGRESSING,
	ON_THE_WAY,
	DELIVERED,
	CANCELLED,
}

export enum EnumOrderStatusPickup {
	RECEIVED,
	PROGRESSING,
	READY_FOR_PICKUP,
	PICKED_UP,
	CANCELLED,
}

export interface IOrder {
	id: number;
	title: string;
	date: string;
	time: string;
	receiving_method: EnumDeliveryMethod;
	status: EnumOrderStatusDelivery | EnumOrderStatusPickup;
}
