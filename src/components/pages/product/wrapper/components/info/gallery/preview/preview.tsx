import React, {ForwardedRef, forwardRef} from 'react';
import css from "@/components/pages/product/wrapper/components/info/gallery/thumbnail/thumbnail.module.css";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import img from "../../../../../../../../../public/images/products/mikado.png";
import mainCss from './preview.module.css'
import Badge from "@/components/shared/badge/badge";
import {useTranslation} from "next-i18next";

interface props {

}

const Preview = forwardRef((props: props, ref: ForwardedRef<HTMLDivElement>) => {
    const {t} = useTranslation()
    return (
        <div ref={ref} className={`keen-slider ${mainCss.wrapper}`}>
            {Array.from(Array(5), (_, i) => i + 1).map((item) => (
                <div key={item} className={`${css.item} ${mainCss.img} keen-slider__slide`}>
                    <div className={css.badge}>
                        <Badge text={t('product.onSale')} color={'#767BF9'}/>
                    </div>
                    <ResponsiveImage src={img} alt={'Кукуруза Bonduelle Classique сладкая'}/>
                </div>
            ))}
        </div>
    );
})


Preview.displayName = 'Preview'
export default Preview;