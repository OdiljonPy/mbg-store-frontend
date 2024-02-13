import {StaticImageData} from "next/image";

export interface IContact {
    icon: StaticImageData
    label: string
    path?: string
    title: string
}