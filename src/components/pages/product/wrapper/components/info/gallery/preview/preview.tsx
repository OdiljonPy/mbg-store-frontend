import React, {ForwardedRef, forwardRef} from 'react';
import css from "@/components/pages/product/wrapper/components/info/gallery/thumbnail/thumbnail.module.css";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import mainCss from './preview.module.css'
import Badge from "@/components/shared/badge/badge";
import {useTranslations} from 'next-intl';
import { IProductSingle} from "@/data-types/products/products";
import {IProductInner} from "@/data-types/products/product-inner/product-inner";

interface props {
    gallery: IProductInner,
    loading:boolean
}

const Preview = forwardRef(({loading,gallery}: props, ref: ForwardedRef<HTMLDivElement>) => {
    const t = useTranslations()

    return (
        <div ref={ref} className={`keen-slider ${mainCss.wrapper}`}>

            {
                loading ? '' : gallery?.images?.map((item) =>{
                    return (
                      <div key={item.id} className={`${css.item} ${mainCss.img} keen-slider__slide`}>
                           <div className={css.badge}>
                               <Badge text={t('product.onSale')} color={'#767BF9'}/>
                          </div>
                           <ResponsiveImage src={item.image} alt={'Кукуруза Bonduelle Classique сладкая'}/>
                       </div>
                    )
                })
            }
        </div>
    );
})


Preview.displayName = 'Preview'
export default Preview;