import React from 'react';
import css from './delivery.module.css'
import {IDelivery} from "@/components/pages/product/wrapper/components/info/description/data-types";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {useTranslations} from "next-intl";

interface props {
delivery: IDelivery
    isWhite?: boolean
}

const Delivery = ({delivery, isWhite}: props) => {
    const t = useTranslations()
    const {
        icon,
        title,
        text
    } = delivery
    return (
        <div className={`${css.delivery} ${isWhite ? css.white : ''}`}>
            <div className={css.img}>
                <ResponsiveImage src={icon} alt={title}/>
            </div>
            <h4 className={css.title}>
                {t(title)}
            </h4>
            <p className={css.text}>
                {t(text)}
            </p>
        </div>
    );
};

export default Delivery;