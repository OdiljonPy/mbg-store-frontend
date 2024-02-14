import css from './total.module.css'
import {useTranslations} from "next-intl";
import TotalItem from "@/components/pages/cart/total/total-item/total-item";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";
import Promocode from "@/components/pages/cart/total/promocode/promocode";
import Link from "next/link";

interface props {

}

const Total = (props: props) => {
    const t = useTranslations()
    return (
        <div className={css.total}>
            <h3 className={css.title}>
                {t('cart.yourOrder')}
            </h3>
            <div className={css.info}>
                <TotalItem label={t('cart.price')} value={priceFormatter(174000, true)}/>
                <TotalItem className={css.bordered} label={t('cart.sales')} value={priceFormatter(-26000, true)}/>
                <TotalItem className={css.finalPrice} label={t('cart.actualPrice')}
                           value={priceFormatter(174000 - 26000, true)}/>
                <Link href={'/cart/delivery'} className={css.link}>
                <button type={'button'} className={css.btn}>
                    {t('cart.order')}
                </button>
                </Link>
                <Promocode/>
            </div>
        </div>
    );
};

export default Total;