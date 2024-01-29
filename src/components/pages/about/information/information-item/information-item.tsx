import React from 'react';
import css from './information-item.module.css'
import {IInformation} from "@/components/pages/about/information/data-types/information";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {useTranslations} from 'next-intl';
import {priceFormatter} from "@/utils/price-formatter/price-formatter";

interface props {
    item: IInformation
}

const InformationItem = ({item}: props) => {
    const t = useTranslations()
    const {
        img,
        title,
        count
    } = item
    return (
        <div className={css.item}>
            <div className={css.img}>
                <ResponsiveImage src={img} alt={t(title)}/>
            </div>
            <p className={css.count}>
                {priceFormatter(count)}+
            </p>
            <h4 className={css.label}>
                {t(title)}
            </h4>
        </div>
    );
};

export default InformationItem;