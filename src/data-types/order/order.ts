import { IDeliveryAddress } from "../address/delivery-address";
import { IPagination, IProduct } from "../products/common";

export interface IOrder {
	id: number;
	user: number;
	type: EnumDeliveryType;
	total_price: number;
	status: OrderStatusChoices;
	delivery_address: IDeliveryAddress | null;
	created_at: string;
	promo_code: IPromoCode;
	delivery_price: number;
	sale_price: number;
	sale_price_promo_code?: number;
	order_items: IOrderItem[];
	full_name?: string;
	phone_number?: string;
}

export interface IOrderWithPagination extends IPagination {
	content: IOrder[];
}

export interface IPostOrder {
	type: EnumDeliveryType;
	full_name: string;
	phone_number: string;
	products: { product: number; quantity: number }[];
	delivery_price?: number;
	delivery_address?: number;
	promocode?: string | number;
}

export enum EnumDeliveryType {
	DELIVERY = "D",
	PICKUP = "T",
}

export enum OrderStatusChoices {
	WAITING_FOR_PAYMENT = 0,
	PAID = 1,
	ACCEPTED = 2,
	PROGRESSING = 3,
	ON_THE_WAY = 4,
	READY_FOR_PICKUP = 5,
	DELIVERED = 6,
	PICKED_UP = 7,
	CANCELLED = 8,
}

export interface IPromoCode {
	promocode: string;
	discount: number | null;
}

export interface IOrderItem {
	id: number;
	order: number;
	product: IProduct;
	quantity: number;
}
