import {StaticImageData} from "next/image";

export interface ICategoryFilter {
    name: string
    id: number
    img: StaticImageData
    count_product: number
}