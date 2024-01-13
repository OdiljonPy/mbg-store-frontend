import React from 'react';
import css from './product-price.module.css'
import {priceFormatter} from "@/utils/price-formatter/price-formatter";

interface props {
    price: number
    discount_price?: number
}

const ProductPrice = ({price, discount_price}: props) => {
    return (
        <div className={css.priceWrapper}>
            <p className={`${css.discountPrice} ${!discount_price ? css.hide : ''}`}>
                {discount_price ? priceFormatter(discount_price) : null}
            </p>
            <p className={`${css.price} ${discount_price ? css.lineThrough : ''}`}>
                {priceFormatter(price)}
            </p>
        </div>
    );
};

export default ProductPrice;