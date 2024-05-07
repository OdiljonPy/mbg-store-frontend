import { StaticImageData } from "next/image";

export interface IImages {
	id: number;
	product: number;
	image: StaticImageData | string;
}

export interface IStore {
	id: number;
	brand_name: string;
	logo: string;
	latitude: number;
	longitude: number;
	store_location_name: string;
	working_time: string;
}

export interface ICommentAnswers {
	id: number;
	comment_answers: number;
	name: string;
	comment: string;
	created_at: string;
}

export interface IComments {
	id: number;
	user: number;
	name: string;
	product: number;
	rating: number;
	comment: string;
	created_at: string;
	images: IImages[];
	answers: ICommentAnswers[];
}

export interface IPagination {
	totalElements: number;
	totalPages: number;
	size: number;
	number: number;
	numberOfElements: number;
	first: boolean;
	last: boolean;
	empty: boolean;
}
export interface IProduct {
	id: number;
	name: string;
	price: number;
	discount_price: number;
	discount: number;
	price_with_discount?: number;
	rating: number;
	rating_count: number;
	view_count: number;
	free_shipping?: boolean;
	pickup?: boolean;
	weight?: string;
	available: number;
	description?: string;
	number_of_sales?: number;
	store: IStore;
	images: IImages[];
	count?: number;
	is_favorite?: boolean;
	seller?: string;
	amount_type?: string;
	flag?: EnumProductFlag;
}

export interface IProductsWithPagination extends IPagination {
	content: IProduct[];
}

export enum EnumProductFlag {
	NEW = "new",
	SALE = "sale",
	FREE_SHIP = "free_ship",
}
