import React from 'react';
import css from './rate.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import star from '@/../public/images/icons/star.svg'
import {useTranslations} from 'next-intl';
import Skeleton from "react-loading-skeleton";

interface props {
    rate: number
    count: number
    noMargin?: boolean
    loading?:boolean
}

export const Rate = ({rate, count, noMargin,loading}: props) => {
    const t = useTranslations()
    return (
       <>
           {
               !loading ? <Skeleton className={css.skeleton_position} count={1} width={'80%'} height={'20px'}/> :  <div className={`${css.rate} ${noMargin ? css.noMargin : ''}`}>
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
           }
       </>
    );
};

