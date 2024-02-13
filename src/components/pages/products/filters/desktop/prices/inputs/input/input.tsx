import React from 'react';
import css from './input.module.css'
import {priceFormatter} from "@/utils/price-formatter/price-formatter";

interface props {
    price: number
    label: string
}

const Input = ({price, label}: props) => {
    return (
        <div className={css.input}>
            <p className={css.text}>
                {label}
            </p>
            <input value={priceFormatter(price)} disabled className={css.value}/>
        </div>
    );
};

export default Input;