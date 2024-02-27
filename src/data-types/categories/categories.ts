import {StaticImageData} from "next/image";
import {IProduct} from "@/data-types/products/products";

export interface ICategory {
    id: number
    name: string
    image: string| StaticImageData
    color?: string
    icone:string
}

export interface ICommonCategory{
    result:ICategory[]
}