import {useTranslations} from "next-intl";
import css from "@/components/pages/cart/order_placed/common/detail-carts/detail-cart/detail-cart.module.css";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";
import TotalDelete from "@/components/pages/cart/delivery/totalSum/totalDelete";
import DetailItem from "@/components/pages/cart/order_placed/common/detail-carts/components/detail-items/detail-item";
import {formatPhoneNumber} from "@/utils/phone-format/phone-format";


interface props{

}

const DetailCart = (props:props) =>{
    const t = useTranslations()


    return(
        <div className={css.total}>
            <h3 className={css.title}>
                {t('order_placed.order_detail')}
            </h3>
            <div className={css.info}>
                <DetailItem className={css.finalPrice} label={t('order_placed.number_order')} value={'MBG12345'}/>
                <DetailItem className={css.paddingTop} label={t('order_placed.date_order')} value={'20 декабря 2023 г. (13:34)'}/>
                <DetailItem className={css.paddingTop} label={t('order_placed.recipient')} value={'Малика Кадирова'}/>
                <DetailItem className={css.paddingTop} label={t('cart.delivery.phone_label')} value={formatPhoneNumber('+998901234567')}/>
            </div>
        </div>
    )
}

export default DetailCart