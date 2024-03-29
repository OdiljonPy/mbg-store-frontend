import {ChangeEvent, ReactElement} from "react";

export interface ICustomRadio{
    title: string
    key: string
    name: string
    count?: number
}

export interface ICRadio{
    count: number
    name: string
    key:string
}

export interface IOptions {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    checked: boolean
    disabled: boolean
}