import React from 'react';
import css from './rate.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import star from '@/../public/images/icons/star.svg'
import {useTranslation} from "next-i18next";

interface props {
    rate: number
    count: number
}

const Rate = ({rate, count}: props) => {
    const {t} = useTranslation()
    return (
        <div className={css.rate}>
            <div className={css.img}>
                <ResponsiveImage src={star} alt={'rating'}/>
            </div>
            <span className={css.text}>
                {rate}
            </span>
            <span className={css.count}>
                ({count} {t('product.rates').toLowerCase()})
            </span>
        </div>
    );
};

export default Rate;