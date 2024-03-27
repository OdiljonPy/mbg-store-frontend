import StatusIconSVG from "@/components/pages/cart/order_placed/status/icon/StatusIconSVG";
import css from "./status.module.css"

interface props{
    status:string
}
const Status = ({status}:props) =>{
    return(
        <div className={css.status_box}>
            <StatusIconSVG/>
            <div className={css.status_text}>
                <h2>Ваш заказ принят!</h2>
                <p>Статус: <span>{status}</span></p>
            </div>
        </div>
    )
}

export default Status