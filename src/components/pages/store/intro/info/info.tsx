import React from 'react';
import css from './info.module.css'
import {useTranslations} from "next-intl";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";
import {Rate} from "@/components/pages/product/wrapper/components/info/description/rate/rate";

interface props {

}

const Info = (props: props) => {
    const t = useTranslations()
    return (
        <div className={css.info}>
            <div className={css.logo}>
                <svg className={css.icon} width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.42969 35.865C2.42969 33.0976 2.97474 30.3572 4.03381 27.8006C5.09288 25.2437 6.64512 22.9206 8.602 20.9638C10.5589 19.0069 12.8819 17.4546 15.4387 16.3956C17.9955 15.3366 20.7358 14.7915 23.5033 14.7915V35.865H2.42969Z"
                        fill="#442781"/>
                    <path
                        d="M2.42969 35.8652C2.42969 38.6327 2.97474 41.373 4.03381 43.9298C5.09288 46.4866 6.64512 48.8097 8.602 50.7665C10.5589 52.7234 12.8819 54.2757 15.4387 55.3347C17.9955 56.3938 20.7358 56.9388 23.5033 56.9388V35.8652H2.42969Z"
                        fill="#61459C"/>
                    <path
                        d="M44.5771 35.8652C44.5771 38.6327 44.0325 41.373 42.9735 43.9298C41.9145 46.4866 40.3623 48.8097 38.4051 50.7665C36.4482 52.7234 34.1251 54.2757 31.5683 55.3347C29.0117 56.3938 26.2713 56.9388 23.5039 56.9388V35.8652H44.5771Z"
                        fill="#A992DB"/>
                    <path
                        d="M57.5705 17.6598C57.5705 26.3985 50.4861 33.4826 41.7475 33.4826H25.9248V17.6598C25.9248 8.92108 33.009 1.83691 41.7475 1.83691C50.4861 1.83691 57.5705 8.92108 57.5705 17.6598Z"
                        fill="#FF7917"/>
                </svg>
            </div>
            <div className={css.description}>
                <h2 className={css.title}>
                    Деревенская лавка
                </h2>
                <div className={css.text}>
                    <p className={css.orders}>
                        {priceFormatter(25158)} {t('product.orders').toLowerCase()}
                    </p>
                    <div className={css.rate}>
                        <Rate rate={4} count={1500} noMargin/>
                    </div>
                </div>
                <p className={css.from}>
                    В MBG store с 12 декабря 2023 г.
                </p>
            </div>
        </div>
    );
};

export default Info;