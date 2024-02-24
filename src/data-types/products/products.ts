import {StaticImageData} from "next/image";

export interface IProduct{
    id: number
    img: StaticImageData | string
    title: string
    rating: number
    weight: string
    total_rate_count: number
    discount_percentage?: number
    price: number
    discount_price?: number
    count?: number
    seller: string
}

export interface IProducts{
    id:number
    name:string
    price:number
    discount_price:number
    discount:number
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
