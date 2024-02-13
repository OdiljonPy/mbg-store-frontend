import {StaticImageData} from "next/image";

export interface ICategory {
    id: number
    title: string
    img:   StaticImageData
    color: string
}