import {ReactElement} from "react";

export interface IActionBtnProps {
    img: ReactElement
    classNames?: string
    onClick: () => void
}