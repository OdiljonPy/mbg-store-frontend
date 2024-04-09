import {useTranslations} from "next-intl";
import css from "@/components/pages/cart/total/total.module.css";
import TotalItem from "@/components/pages/cart/total/total-item/total-item";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";
import {useRouter} from "next/router";
import { useSelector} from "react-redux";
import { RootState} from "@/store";
import React, {useEffect} from "react";
import {useFormContext} from "react-hook-form";
import {EnumDeliveryType, IOrder, IPostOrder} from "@/data-types/order/order";
import Button from "@/components/shared/button";
import DeletePromoCode from "@/components/pages/cart/common/delete-promocode/delete-promocode";

interface props{

}

const TotalSum = ({}:props) =>{
    const t = useTranslations()
    const { watch,setValue} = useFormContext<IPostOrder>()

    const {discount_price,all_prices,cost_price,promo_code,promo_code_price} = useSelector((state:RootState)=> state.basket)
    const {createLoad} = useSelector((state:RootState)=>state.orders)

    const router = useRouter()

    const fullName = watch('full_name')
    const phoneNumber = watch('phone_number')
    const discount = watch("promocode")
    const checkPhone = phoneNumber ? phoneNumber.length : 0

    const throwOrder = () =>{
        if(router.query?.type){
            if(router.query.type === 'delivery'){
                setValue("type",EnumDeliveryType.DELIVERY)
            }
            else {
                setValue("type",EnumDeliveryType.PICKUP)
            }
        }
        else{
            setValue("type",EnumDeliveryType.DELIVERY)
        }
    }
    useEffect(() => {
        console.log("change promo code")
        setValue('promocode',promo_code.promocode)
    }, [promo_code.promocode]);
    return(
        <div className={css.total}>
            <h3 className={css.title}>
                {t('cart.yourOrder')}
            </h3>
            <div className={css.info}>
                <TotalItem label={t('cart.price')} value={priceFormatter(all_prices, true)}/>
                <TotalItem className={css.paddingTop} label={t('cart.sales')} value={priceFormatter(-discount_price, true)}/>
                {promo_code.discount ?  <TotalItem className={css.paddingTop} label={t('cart.promo_code')} value={priceFormatter(-promo_code_price, true)}/>:''}

                <TotalItem className={css.bordered} label={t('cart.type')} value={t('cart.type_value')}/>
                <TotalItem className={css.finalPrice} label={t('cart.actualPrice')}
                           value={priceFormatter(cost_price, true)}/>

                   <div className={css.total_btn}>
                       <Button type='submit'
                               variant='primary'
                               full
                               onClick={()=>throwOrder()}
                               loading={createLoad}
                               disabled={!(fullName && checkPhone > 12)}
                               >{t('cart.checkout')}</Button>
                   </div>
                {
                    promo_code.discount ?
                        <DeletePromoCode promo_code={promo_code.promocode}/> : ''
                }
            </div>

        </div>
    )
}

export default TotalSum