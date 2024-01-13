import {StaticImageData} from "next/image";
import {ReactElement} from "react";

export interface IBadge{
    count: number
    icon: ReactElement
    title: string
    path: string
}