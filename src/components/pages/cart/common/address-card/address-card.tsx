import css from "@/components/pages/cart/common/address-card/address-card.module.css"
import StoreSVG from "@/components/pages/cart/common/address-card/components/icon/StoreSVG";
import ClockSVG from "@/components/pages/cart/common/address-card/components/icon/ClockSVG";
import WarningText from "@/components/pages/cart/common/warning-text/warning-text";
import {IStore} from "@/data-types/products/common";
interface props{
    type : 'delivery' | 'pick_up'
    store:IStore
}
const AddressCard = ({type,store}:props) =>{
    return(
        <div className={css.cart}>
            <div className={css.info}>
                {type == 'pick_up' ? <StoreSVG/> : ''}
                <div>
                    <p className={css.title}>{store?.brand_name} {type == 'delivery' ? <span className={css.badge}>основной</span> : ''}</p>
                    <p className={css.address}>{store?.store_location_name} </p>
                    {type == 'pick_up' ? <div className={css.time}><ClockSVG/> {store?.working_time}</div> : ''}
                </div>
            </div>
           {/*<WarningText><p>Примерная дата доставки: <span>18 декабря 2023 г.</span> </p></WarningText>*/}
        </div>
    )
}

export default AddressCard