import css from "./status_card.module.css"
import InfoSVG
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/icon/infoSVG";
import StoreSVG from "@/components/pages/cart/delivery/content/obtaining/component/card/icon/StoreSVG";
import ClockSVG from "@/components/pages/cart/delivery/content/obtaining/component/card/icon/ClockSVG";
interface props{
    type : 'delivery' | 'pick_up'
}
const StatusCard = ({type}:props) =>{
    return(
        <div className={css.cart}>
            <div className={css.info}>
                {type == 'pick_up' ? <StoreSVG/> : ''}
                <div>
                    <p className={css.title}>Мой дом {type == 'delivery' ? <span className={css.badge}>основной</span> : ''}</p>
                    <p className={css.address}>г. Ташкент, проспект Амира Темура, д-23, кв-20 </p>
                    {type == 'pick_up' ? <div className={css.time}><ClockSVG/> 8:00-23:00</div> : ''}
                </div>
            </div>
            <div className={css.status}>
                <InfoSVG/>
                <p className={css.status_text}>Примерная дата доставки: <span>18 декабря 2023 г.</span> </p>
            </div>
        </div>
    )
}

export default StatusCard