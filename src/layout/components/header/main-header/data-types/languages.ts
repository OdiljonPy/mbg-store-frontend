import {StaticImageData} from "next/image";

export type Languages = 'ru' | 'uz'



export interface ILanguage{
    code: Languages
    title: string
}
export interface ILanguagesIcons {
    uz: StaticImageData
    ru: StaticImageData
}

export interface ILanguagePointer {
    uz: string
    ru: string
}