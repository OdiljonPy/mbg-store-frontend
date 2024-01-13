import {StaticImageData} from "next/image";

export interface IBadge{
    count: number
    icon: StaticImageData
    title: string
    path: string
}