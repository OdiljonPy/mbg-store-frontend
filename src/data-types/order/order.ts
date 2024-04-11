import { IDeliveryAddress } from "../address/delivery-address";
import { IUser } from "../auth/user";
import { IProduct } from "../products/common";

export interface IOrder {
	id: number;
	user: IUser;
	type: EnumDeliveryType;
	total_price: number;
	status: OrderStatusChoices;
	delivery_address: IDeliveryAddress | null;
	created_at: string;
	promo_code: IPromoCode | null;
	delivery_price: number;
	sale_price: number;
	order_items: IOrderItem[];
	full_name?:string;
	phone_number?:string
}

export interface IPostOrder{
	type: EnumDeliveryType;
	full_name:string;
	phone_number:string
	products:{product:number,quantity:number}[]
	delivery_price?:number,
	delivery_address?:number,
	promocode?:number
}

export enum EnumDeliveryType {
	DELIVERY = "D",
	PICKUP = "T",
}

export enum OrderStatusChoices {
	WAITING_FOR_PAYMENT,
	PAID,
	ACCEPTED,
	PROGRESSING,
	ON_THE_WAY,
	READY_FOR_PICKUP,
	DELIVERED,
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
