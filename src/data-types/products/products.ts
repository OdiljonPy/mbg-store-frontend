import {StaticImageData} from "next/image";
import {IStore} from "@/data-types/products/common";

export interface IProduct {
    id: number
    name: string
    price: number
    discount_price?: number
    discount?: number
    price_with_discount?: number
    rating: number
    rating_count:number
    view_count: number
    free_shipping?:boolean
    pickup?:boolean
    weight: string
    available:number
    count?: number
    seller?:string
    store: IStore
    images: {
        id: number,
        product: number,
        image: StaticImageData | string
    }[]
}

export interface ICommon{
   result:{
    totalElements:number
    totalPages:number
    size:number
    number:number
    numberOfElements:number
    first:boolean
    last:boolean
    empty:boolean
    content:IProduct[]
    }
}

export interface IProductSingle{
    result:IProduct
}