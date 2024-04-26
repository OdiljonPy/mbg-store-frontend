import StatusIconSVG from "@/components/pages/cart/order_placed/common/order-status/icon/StatusIconSVG";
import css from "./status.module.css"
import {useTranslations} from "next-intl";

interface props{
    status:"done" | "warning"
    status_text:string
}
const Status = ({status,status_text}:props) =>{
    const t = useTranslations('orders')
    return(
        <div className={css.status_box}>
            <StatusIconSVG/>
            <div className={css.status_text}>
                <h2>{t('success')}</h2>
                <p>{t('order_details_card.status')}: <span className={status === 'done' ? css.done : css.warning}>{t(status_text)}</span></p>
            </div>
        </div>
    )
}

export default Status