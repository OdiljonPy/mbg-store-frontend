import css from "./index.module.css"
import {useTranslations} from "next-intl";
import {ReactElement} from "react";

interface props{
    title?:string
    outline?:boolean,
    onClick?:()=>void
    children?:ReactElement
}
const SendButton = ({title,outline,onClick,children}:props) =>{
    const t = useTranslations()
    return(
        <button type={'button'} className={`${outline? css.btn_outline : css.send_btn}  ${css.btn}`} onClick={onClick}>
            {t(title)}{children}
        </button>
    )

}

export default SendButton