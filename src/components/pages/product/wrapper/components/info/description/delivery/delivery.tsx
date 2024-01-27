import React from 'react';
import css from './delivery.module.css'
import {IDelivery} from "@/components/pages/product/wrapper/components/info/description/data-types";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";

interface props {
delivery: IDelivery
}

const Delivery = ({delivery}: props) => {
    const {
        icon,
        title,
        text
    } = delivery
    return (
        <div className={css.delivery}>
            <div className={css.img}>
                <ResponsiveImage src={icon} alt={title}/>
            </div>
            <h4 className={css.title}>
                {title}
            </h4>
            <p className={css.text}>
                {text}
            </p>
        </div>
    );
};

export default Delivery;