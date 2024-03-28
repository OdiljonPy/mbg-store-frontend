import {IProductInner} from "@/data-types/products/product-inner/product-inner";
import {IPagination} from "@/data-types/products/common";



export interface IProductDiscount extends IPagination{
    content : IProductInner[]
}

export interface ICommonProductDiscount {
    result:IProductDiscount
    ok:boolean
}