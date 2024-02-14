import css from "./index.module.css"
import {useTranslations} from "next-intl";

interface props{
    title:string
    outline?:boolean,
    onClick?:()=>void
}
const SendButton = ({title,outline,onClick}:props) =>{
    const t = useTranslations()
    return(
        <button type={'button'} className={`${outline? css.btn_outline : css.send_btn}  ${css.btn}`} onClick={onClick}>
            {t(title)}
        </button>
    )

}

export default SendButton