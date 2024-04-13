import {useTranslations} from "next-intl";
import css from "@/components/pages/cart/order_placed/common/detail-carts/detail-cart/detail-cart.module.css";
import DetailItem from "@/components/pages/cart/order_placed/common/detail-carts/components/detail-items/detail-item";
import {formatPhoneNumber} from "@/utils/phone-format/phone-format";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {formatDate} from "@/utils/format-date/format-date";
import dayjs from "dayjs";


interface props{

}

const DetailCart = (props:props) =>{
    const t = useTranslations()
    const {user} = useSelector((state:RootState)=> state.user)
    const {last_order,loading} = useSelector((state:RootState)=> state.last_order)
    return(
        <div className={css.total}>
            <h3 className={css.title}>
                {t('order_placed.order_detail')}
            </h3>
            <div className={css.info}>
                <DetailItem className={css.finalPrice} label={t('order_placed.number_order')} value={last_order?.id}/>
                <DetailItem className={css.paddingTop} label={t('order_placed.date_order')} value={dayjs(last_order.created_at).format("D MMMM YYYY г. H:mm")}/>
                <DetailItem className={css.paddingTop} label={t('order_placed.recipient')} value={last_order?.full_name}/>
                <DetailItem className={css.paddingTop} label={t('cart.delivery.phone_label')} value={formatPhoneNumber(last_order?.phone_number ? last_order.phone_number: '+998997777777' )}/>
            </div>
        </div>
    )
}

export default DetailCart