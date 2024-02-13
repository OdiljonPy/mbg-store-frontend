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