import { productSales } from "@/constants/product/product";
import {
	EnumDeliveryType,
	EnumOrderStatusDelivery,
	EnumOrderStatusPickup,
	IOrder,
} from "@/data-types/order/order";

export const data: IOrder[] = [
	{
		id: 1,
		created_at: "2022-01-02 9:30",
		type: EnumDeliveryType.DELIVERY,
		status: EnumOrderStatusDelivery.ON_THE_WAY,
		delivery_address: {
			id: 1,
			address_name: "Мой адрес",
			address: "г. Москва, ул. Ленина, д. 1",
			apartment: 1,
			entrance: 1,
			floor: 1,
			latitude: 112212421,
			longitude: 112212421,
			phone_number: "+998901234567",
			main_address: true,
		},
		promo_code: {
			discount: 10,
			promocode: "MBG10",
		},
		total_price: 1000000,
		user: {
			id: 1,
			phone_number: "+998901234567",
		},
		order_items: [
			{
				id: 1,
				order: 1,
				product: productSales[0],
				quantity: 2,
			},
			{
				id: 2,
				order: 2,
				product: productSales[2],
				quantity: 1,
			},
			{
				id: 3,
				order: 3,
				product: productSales[3],
				quantity: 4,
			},
			{
				id: 4,
				order: 4,
				product: productSales[1],
				quantity: 3,
			},
		],
	},
	{
		id: 2,
		created_at: "2022-01-03 11:00",

		type: EnumDeliveryType.PICKUP,
		status: EnumOrderStatusDelivery.CANCELLED,
		delivery_address: {
			id: 2,
			address_name: "Второй адрес",
			address: "г. Москва, ул. Ленина, д. 2",
			apartment: 1,
			entrance: 1,
			floor: 1,
			latitude: 112212421,
			longitude: 112212421,
			phone_number: "+998901234567",
			main_address: false,
		},
		promo_code: null,
		total_price: 111000,
		user: {
			id: 1,
			phone_number: "+998901234567",
		},
		order_items: [
			{
				id: 1,
				order: 1,
				product: productSales[0],
				quantity: 2,
			},
			{
				id: 2,
				order: 2,
				product: productSales[2],
				quantity: 1,
			},
			{
				id: 3,
				order: 3,
				product: productSales[3],
				quantity: 4,
			},
			{
				id: 4,
				order: 4,
				product: productSales[1],
				quantity: 3,
			},
		],
	},
	{
		id: 3,
		created_at: "2022-02-01 12:50",
		type: EnumDeliveryType.DELIVERY,
		status: EnumOrderStatusPickup.PROGRESSING,
		delivery_address: {
			id: 2,
			address_name: "Второй адрес",
			address: "г. Москва, ул. Ленина, д. 2",
			apartment: 1,
			entrance: 1,
			floor: 1,
			latitude: 112212421,
			longitude: 112212421,
			phone_number: "+998901234567",
			main_address: false,
		},
		total_price: 105000,
		user: {
			id: 1,
			phone_number: "+998901234567",
		},
		order_items: [
			{
				id: 1,
				order: 1,
				product: productSales[0],
				quantity: 2,
			},
			{
				id: 2,
				order: 2,
				product: productSales[2],
				quantity: 1,
			},
			{
				id: 3,
				order: 3,
				product: productSales[3],
				quantity: 4,
			},
			{
				id: 4,
				order: 4,
				product: productSales[1],
				quantity: 3,
			},
		],
		promo_code: {
			discount: 10,
			promocode: "MBG12",
		},
	},
];
