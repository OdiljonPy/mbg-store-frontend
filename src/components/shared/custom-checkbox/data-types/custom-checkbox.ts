import {CheckboxChangeEvent} from "antd/lib/checkbox";

export interface ICustomCheckbox{
    count: number
    id: number
    title: string
}

export interface ISlideOptions {
    disabled: boolean
    checked: boolean
    onChange: (e: CheckboxChangeEvent) => void
}