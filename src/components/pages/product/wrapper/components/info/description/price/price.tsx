import React from 'react';
import css from './price.module.css'
import DiscountBadge from "@/components/shared/discount-badge/discount-badge";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";

interface IProps {
    discount_price: number
    price: number
    discount_percentage: number
}

const Price = ({
                   discount_percentage,
                   price,
                   discount_price
               }: IProps) => {
    return (
        <div className={`${css.price}`}>
            <DiscountBadge className={css.discount} discount_percentage={discount_percentage}/>
            <p className={css.discountPrice}>
                {priceFormatter(discount_price, true)}
            </p>
            <p className={css.actualPrice}>
                {priceFormatter(price, true)}
            </p>
        </div>
    );
};

export default Price;