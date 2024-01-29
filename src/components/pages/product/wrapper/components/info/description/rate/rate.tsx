import React from 'react';
import css from './rate.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import star from '@/../public/images/icons/star.svg'
import {useTranslation} from "next-i18next";

interface props {
    rate: number
    count: number
    noMargin?: boolean
}

export const Rate = ({rate, count, noMargin}: props) => {
    const {t} = useTranslation()
    return (
        <div className={`${css.rate} ${noMargin ? css.noMargin : ''}`}>
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

