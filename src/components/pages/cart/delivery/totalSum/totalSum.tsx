import {useTranslations} from "next-intl";
import css from "@/components/pages/cart/total/total.module.css";
import TotalItem from "@/components/pages/cart/total/total-item/total-item";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";
import TotalDelete from "@/components/pages/cart/delivery/totalSum/totalDelete";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import React from "react";
import {useFormContext} from "react-hook-form";
import {EnumDeliveryType, IOrder} from "@/data-types/order/order";

interface props{

}

const TotalSum = ({}:props) =>{
    const t = useTranslations()
    const { watch,setValue} = useFormContext<IOrder>()
    const {discount_price,all_prices,cost_price} = useSelector((state:RootState)=> state.basket)
    const router = useRouter()
    const fullName = watch('full_name')
    const phoneNumber = watch('phone_number')
    const checkPhone = phoneNumber ? phoneNumber.length : 0
    const throwOrder = () =>{
        if(router.query?.type){
            if(router.query.type === 'delivery'){
                setValue("type",EnumDeliveryType.DELIVERY)
                // router.push("/cart/order-delivery")
            }
            else {
                setValue("type",EnumDeliveryType.PICKUP)
                // router.push("/cart/order-pickup")
            }
        }
        else{
            setValue("type",EnumDeliveryType.DELIVERY)
            // router.push("/cart/order-delivery")
        }
    }
    return(
        <div className={css.total}>
            <h3 className={css.title}>
                {t('cart.yourOrder')}
            </h3>
            <div className={css.info}>
                <TotalItem label={t('cart.price')} value={priceFormatter(all_prices, true)}/>
                <TotalItem className={css.paddingTop} label={t('cart.sales')} value={priceFormatter(-discount_price, true)}/>
                <TotalItem className={css.paddingTop} label={t('cart.promo_code')} value={priceFormatter(-14800, true)}/>
                <TotalItem className={css.bordered} label={t('cart.type')} value={t('cart.type_value')}/>
                <TotalItem className={css.finalPrice} label={t('cart.actualPrice')}
                           value={priceFormatter(cost_price, true)}/>
                    <button disabled={(!(fullName && checkPhone > 12))} type={'submit'} className={`${css.btn} ${css.checkout_btn}`} onClick={()=> throwOrder()}>
                        {t('cart.checkout')}
                    </button>

                <TotalDelete/>
            </div>

        </div>
    )
}

export default TotalSum