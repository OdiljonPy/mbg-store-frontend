import {IPagination, IProduct} from "@/data-types/products/common";

export interface IProductPopular extends IPagination{
    content:IProduct[]
}

export interface ICommonProductPopular{
    result:IProductPopular
    ok:boolean
}