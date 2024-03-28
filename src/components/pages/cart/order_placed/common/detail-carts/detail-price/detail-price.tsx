import {useTranslations} from "next-intl";
import css from "@/components/pages/cart/order_placed/common/detail-carts/detail-price/detail-price.module.css";
import DetailItem from "@/components/pages/cart/order_placed/common/detail-carts/components/detail-items/detail-item";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";
import SendButton from "@/components/pages/cart/common/button/send_button";
import React, {useState} from "react";
import WarningText from "@/components/pages/cart/common/warning-text/warning-text";
import CancelModal from "@/components/pages/cart/order_placed/order-pickup/content/modal/cancel-modal/cancel-modal";



interface props{
    isDeleteAction?:boolean
}

const DetailCart = ({isDeleteAction}:props) =>{
    const t = useTranslations()
    const [onOpen,setOnOpen] = useState(false)


    const openModal = () =>{
        setOnOpen(true)
    }
    const onClose = (status:'cancel'|'close') =>{
        if(status === 'cancel'){
            //  write cancel function
        }
        setOnOpen(false)
    }

    return(
        <div className={css.total}>
            <h3 className={css.title}>
                {t('order_placed.order_cost_title')}
            </h3>
            <div className={css.info}>
                <DetailItem label={t('order_placed.order_cost')} value={priceFormatter(174000 , true)}/>
                <DetailItem className={css.paddingTop} label={t('cart.sales')} value={priceFormatter(-26000 , true)}/>
                <DetailItem className={css.paddingTop} label={t('cart.promo_code')} label_prefix={<span className={css.promo_code}>NEW10</span>} value={priceFormatter(14000 , true)}/>
                <DetailItem className={css.bordered} label={t('filters.delivery.title')} value={priceFormatter(10000 , true)}/>

                    <DetailItem className={css.all_price} label={t('order_placed.order_all')}
                           value={priceFormatter(174000 - 26000, true)}/>
                {isDeleteAction &&  <div className={css.action}>
                    <WarningText><p>{t('order_placed.warning_text')}</p></WarningText>
                    <SendButton title={'cart.checkout'} outline={true} onClick={openModal}/>
                </div>}

            </div>
            <CancelModal open={onOpen} onClose={onClose} title={"MBG12345"} />
        </div>
    )
}

export default DetailCart