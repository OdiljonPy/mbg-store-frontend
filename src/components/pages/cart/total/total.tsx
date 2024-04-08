import css from './total.module.css'
import {useTranslations} from "next-intl";
import TotalItem from "@/components/pages/cart/total/total-item/total-item";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";
import PromoCode from "@/components/pages/cart/total/promocode/promocode";
import {useRouter} from "next/navigation";
import {IBasketSlices} from "@/data-types/slices/basket";

interface props {
    basketSlice : IBasketSlices

}

const Total = ({basketSlice}: props) => {
    const {all_prices,discount_price,cost_price} = basketSlice
    const t = useTranslations()
    const { push } = useRouter();
    return (
        <div className={css.total}>
            <h3 className={css.title}>
                {t('cart.yourOrder')}
            </h3>
            <div className={css.info}>
                <TotalItem label={t('cart.price')} value={priceFormatter(all_prices, true)}/>
                <TotalItem className={css.bordered} label={t('cart.sales')} value={priceFormatter(-discount_price, true)}/>
                <TotalItem className={css.pb_4} label={t('cart.promo_code')} value={priceFormatter(-discount_price, true)}/>
                <TotalItem className={css.finalPrice} label={t('cart.actualPrice')}
                           value={priceFormatter(cost_price, true)}/>
                <button type={'button'} onClick={() => push('/cart/delivery')} className={css.btn}>
                    {t('cart.order')}
                </button>
                <PromoCode/>
            </div>
        </div>
    );
};

export default Total;