import { IComments, IProduct } from "@/data-types/products/common";

export interface IProductInner extends IProduct {
	comparison_products: IProduct[];
	related_products: IProduct[];
	comments: IComments[];
	is_comment: boolean;
}

export interface ICommonProduct {
	result: IProductInner;
	ok: boolean;
}
