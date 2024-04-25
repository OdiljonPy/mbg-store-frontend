import {IProduct} from "@/data-types/products/common";

export interface IProductFavourite{
    ok:boolean,
    result:IProduct[]
}