import StatusIconSVG from "@/components/pages/cart/order_placed/common/order-status/icon/StatusIconSVG";
import css from "./status.module.css"

interface props{
    status:"done" | "warning"
    status_text:string
}
const Status = ({status,status_text}:props) =>{
    return(
        <div className={css.status_box}>
            <StatusIconSVG/>
            <div className={css.status_text}>
                <h2>Ваш заказ принят!</h2>
                <p>Статус: <span className={status === 'done' ? css.done : css.warning}>{status_text}</span></p>
            </div>
        </div>
    )
}

export default Status