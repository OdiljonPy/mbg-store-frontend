import {useTranslations} from "next-intl";
import css from "@/components/pages/cart/total/total.module.css";
import TotalItem from "@/components/pages/cart/total/total-item/total-item";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";
import Link from "next/link";
import Promocode from "@/components/pages/cart/total/promocode/promocode";
import TotalDelete from "@/components/pages/cart/delivery/totalSum/totalDelete";

interface props{

}

const TotalSum = (props:props) =>{
    const t = useTranslations()
    return(
        <div className={css.total}>
            <h3 className={css.title}>
                {t('cart.yourOrder')}
            </h3>
            <div className={css.info}>
                <TotalItem label={t('cart.price')} value={priceFormatter(174000, true)}/>
                <TotalItem className={css.paddingTop} label={t('cart.sales')} value={priceFormatter(-45000, true)}/>
                <TotalItem className={css.paddingTop} label={t('cart.promo_code')} value={priceFormatter(-14800, true)}/>
                <TotalItem className={css.bordered} label={t('cart.type')} value={t('card.type_value')}/>
                <TotalItem className={css.finalPrice} label={t('cart.actualPrice')}
                           value={priceFormatter(174000 - 26000, true)}/>
                    <button type={'button'} className={`${css.btn} ${css.checkout_btn}`}>
                        {t('cart.checkout')}
                    </button>

                <TotalDelete/>
            </div>
        </div>
    )
}

export default TotalSum