import React from 'react';
import {useTranslation} from "next-i18next";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import star from "../../../../../../../../../public/images/icons/star.svg";
import css from "@/components/pages/product/wrapper/components/info/description/rate/rate.module.css";
import mainCss from './rate.module.css'

interface props {
    count: number
    rate: number
}

const Rate = ({count, rate}: props) => {
    const {t} = useTranslation()
    return (
        <div className={`${css.rate} ${mainCss.rate}`}>
            <div className={css.img}>
                <ResponsiveImage src={star} alt={'rating'}/>
            </div>
            <span className={`${css.text} ${mainCss.text}`}>
                {rate}
            </span>
            <span className={`${css.count} ${mainCss.count}`}>
                ({count} {t('product.rates').toLowerCase()})
            </span>
        </div>
    );
};

export default Rate;