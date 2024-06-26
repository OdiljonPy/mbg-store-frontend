import { StaticImageData } from "next/image";

export interface ICategory {
	id: number;
	name: string;
	image: string | StaticImageData;
	color?: string;
	icon: string;
	count_product?: number;
}

export interface ICommonCategory {
	result: ICategory[];
	ok: boolean;
}
