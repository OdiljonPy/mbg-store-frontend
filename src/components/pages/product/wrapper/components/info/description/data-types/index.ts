import {StaticImageData} from "next/image";

export interface IDelivery{
    icon: StaticImageData
    title: string
    text: string
    rules?: string
}