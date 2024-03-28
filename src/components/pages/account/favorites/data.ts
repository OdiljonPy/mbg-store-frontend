import img3 from "@/../public/images/products/avokado.png";
import img1 from "@/../public/images/products/fruct.png";
import img from "@/../public/images/products/mikado.png";
import img2 from "@/../public/images/products/tanho.png";
import { IProduct } from "@/data-types/products/common";

export const data: IProduct[] = [
	{
		id: 1,
		name: "Ананасы Mikado ломтики 580мл",
		rating: 4.9,
		weight: "580г",
		available: 170,
		rating_count: 12358,
		price: 30000,
		discount: 50,
		discount_price: 15000,
		view_count: 0,
		is_favorite: true,
		images: [
			{
				id: 1,
				product: 1,
				image: img,
			},
		],
		store: {
			id: 1,
			brand_name: "Магазин 1",
			latitude: 112212421,
			logo: "string",
			longitude: 112212421,
			store_location_name: "г. Москва, ул. Ленина, д. 1",
			working_time: "8:00-23:00",
		},
	},
	{
		id: 2,
		name: "Фруктовые капли без сахара\n" + "300 г",
		rating: 4.9,
		weight: "300г",
		available: 170,
		rating_count: 12358,
		price: 15000,
		discount: 15,
		discount_price: 12700,
		is_favorite: true,
		view_count: 0,
		images: [
			{
				id: 1,
				product: 1,
				image: img1,
			},
		],
		store: {
			id: 1,
			brand_name: "Магазин 1",
			latitude: 112212421,
			logo: "string",
			longitude: 112212421,
			store_location_name: "г. Москва, ул. Ленина, д. 1",
			working_time: "8:00-23:00",
		},
	},
	{
		id: 3,
		name: "Avokado 1 штук",
		rating: 4.9,
		weight: "300г",
		available: 170,
		rating_count: 12358,
		price: 12000,
		discount: 40,
		discount_price: 7200,
		view_count: 0,
		is_favorite: true,
		images: [
			{
				id: 1,
				product: 1,
				image: img3,
			},
		],
		store: {
			id: 1,
			brand_name: "Магазин 1",
			latitude: 112212421,
			logo: "string",
			longitude: 112212421,
			store_location_name: "г. Москва, ул. Ленина, д. 1",
			working_time: "8:00-23:00",
		},
	},
	{
		id: 4,
		name: "Кетчуп Tanho острый 910 г",
		rating: 4.9,
		weight: "300г",
		available: 170,
		rating_count: 12358,
		price: 14000,
		discount: 10,
		discount_price: 12000,
		is_favorite: true,
		view_count: 0,
		images: [
			{
				id: 1,
				product: 1,
				image: img2,
			},
		],
		store: {
			id: 1,
			brand_name: "Магазин 1",
			latitude: 112212421,
			logo: "string",
			longitude: 112212421,
			store_location_name: "г. Москва, ул. Ленина, д. 1",
			working_time: "8:00-23:00",
		},
	},
];
