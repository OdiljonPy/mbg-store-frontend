import {IPagination, IProduct} from "@/data-types/products/common";

export interface IProductFilter extends IPagination{
    content:IProduct[]
}

export interface ICommonProductFilter{
    result:IProductFilter
    ok:boolean
}

export interface IProductSearchKey{
    result:string[]
    ok:boolean
}