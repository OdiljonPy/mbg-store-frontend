import {ReactElement} from "react";

export interface ICategoryItemGeneral {
    id: number
    title: string
}

export interface ICategoryItem extends ICategoryItemGeneral {
    img: ReactElement
}


