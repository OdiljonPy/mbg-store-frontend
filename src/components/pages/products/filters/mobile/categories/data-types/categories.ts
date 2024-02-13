import {StaticImageData} from "next/image";

export interface ICategory{
    title: string
    id: number
    icon: StaticImageData
    count?: number
}