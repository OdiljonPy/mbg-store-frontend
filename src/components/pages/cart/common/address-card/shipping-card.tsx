import css from "@/components/pages/cart/common/address-card/address-card.module.css"
import WarningText from "@/components/pages/cart/common/warning-text/warning-text";
import {IShipping} from "@/data-types/shipping";
import {IDeliveryAddress} from "@/data-types/address/delivery-address";
import {useTranslations} from "next-intl";
interface props{
    shipping:IDeliveryAddress | IShipping
}
const AddressCard = ({shipping}:props ) =>{
    const t = useTranslations()
    return(
        <div className={css.cart}>
            <div className={css.info}>
                <div>
                    <p className={css.title}>{shipping?.address_name} <span className={css.badge}>{t('orders.delivery.main')}</span> </p>
                    <p className={css.address}>{shipping?.address} </p>
                    {/*{type == 'pick_up' ? <div className={css.time}><ClockSVG/> {shipping?.}</div> : ''}*/}
                </div>
            </div>
            {/*<WarningText><p>Примерная дата доставки: <span>18 декабря 2023 г.</span> </p></WarningText>*/}
        </div>
    )
}

export default AddressCard