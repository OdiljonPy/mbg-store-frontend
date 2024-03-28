import { IDeliveryAddress } from "@/data-types/address/delivery-address";
import { IPickupAddress } from "@/data-types/address/pickup-address";

export const dataDelivery: IDeliveryAddress[] = [
	{
		id: 1,
		address_name: "Мой адрес",
		address: "г. Ташкент, проспект Амира Темура, д-23, кв-20",
		apartment: 1,
		entrance: 1,
		floor: 1,
		latitude: 112212421,
		longitude: 112212421,
		phone_number: "+998901234567",
		main_address: true,
	},
	{
		id: 2,
		address_name: "Мой адрес",
		address: "г. Ташкент, проспект Амира Темура, д-23, кв-20",
		apartment: 1,
		entrance: 1,
		floor: 1,
		latitude: 112212421,
		longitude: 112212421,
		phone_number: "+998901234567",
		main_address: true,
	},
	{
		id: 3,
		address_name: "Мой адрес",
		address: "г. Ташкент, проспект Амира Темура, д-23, кв-20",
		apartment: 1,
		entrance: 1,
		floor: 1,
		latitude: 112212421,
		longitude: 112212421,
		phone_number: "+998901234567",
		main_address: true,
	},
];

export const dataPickup: IPickupAddress[] = [
	{
		id: 1,
		brand_name: "Зеленая лавка “Сквер”",
		store_location_name: "г. Москва, ул. Ленина, д. 1",
		latitude: 112212421,
		longitude: 112212421,
		logo: null,
		working_time: "8:00-23:00",
	},
	{
		id: 2,
		brand_name: "Фермерская базарка “Сквер”",
		store_location_name: "г. Москва, ул. Ленина, д. 1",
		latitude: 112212421,
		longitude: 112212421,
		logo: null,
		working_time: "7:00-22:00",
	},
	{
		id: 3,
		brand_name: "Домашний урожай “Сквер”",
		store_location_name: "г. Москва, ул. Ленина, д. 1",
		latitude: 112212421,
		longitude: 112212421,
		logo: null,
		working_time: null,
	},
];
