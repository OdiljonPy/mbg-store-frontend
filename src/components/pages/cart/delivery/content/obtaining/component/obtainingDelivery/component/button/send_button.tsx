import css from "./index.module.css"
import {useTranslations} from "next-intl";

interface props{
    title:string
}
const SendButton = ({title}:props) =>{
    const t = useTranslations()
    return(
        <button type={'button'} className={`${css.send_btn} ${css.btn}`}>
            {t(title)}
        </button>
    )

}

export default SendButton