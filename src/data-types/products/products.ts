import {StaticImageData} from "next/image";

export interface IProduct {
    id: number
    name: string
    price: number
    discount_price?: number
    discount?: number
    price_with_discount?: number
    rating: number
    rating_count:number
    weight: string
    count?: number
    seller: string
    images: {
        id: number,
        product: number,
        image: StaticImageData | string
    }[]
}

export interface IProducts{
    id:number
    name:string
    price:number
    discount_price?:number
    discount?:number
    price_with_discount:number
    description:string
    available: number
    rating: number
    rating_count: number
    view_count: number
    free_shipping:boolean
    pickup:boolean
    store:number
    count?: number
    images:{
        id:number
        product:number
        image:string
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
    content:IProducts[]
}
}
