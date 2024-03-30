import { IDeliveryAddress } from "../address/delivery-address";
import { IUser } from "../auth/user";
import { IProduct } from "../products/common";

export interface IOrder {
	id: number;
	user: IUser;
	type: EnumDeliveryType;
	total_price: number;
	status: EnumOrderStatusDelivery | EnumOrderStatusPickup;
	delivery_address: IDeliveryAddress | null;
	created_at: string;
	promo_code: IPromoCode | null;
	delivery_price: number;
	sale_price: number;
	order_items: IOrderItem[];
}

export enum EnumDeliveryType {
	DELIVERY = "D",
	PICKUP = "T",
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

export interface IPromoCode {
	promocode: string;
	discount: number;
}

export interface IOrderItem {
	id: number;
	order: number;
	product: IProduct;
	quantity: number;
}
