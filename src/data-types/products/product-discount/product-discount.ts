import {IProductInner} from "@/data-types/products/product-inner/product-inner";

export interface IPagination{
    totalElements:number
    totalPages:number
    size:number
    number:number
    numberOfElements:number
    first:boolean
    last:boolean
    empty:boolean
}

export interface IProductDiscount{
    totalElements:number
    totalPages:number
    size:number
    number:number
    numberOfElements:number
    first:boolean
    last:boolean
    empty:boolean
    content : IProductInner[]
}

export interface ICommonProductDiscount {
    result:IProductDiscount
    ok:boolean
}