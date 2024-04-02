import React from 'react';
import css from './product-price.module.css'
import {priceFormatter} from "@/utils/price-formatter/price-formatter";

interface props {
    price: number
    discount_price?: number
    discount:number | undefined
}

const ProductPrice = ({price, discount_price,discount}: props) => {
    return (
        <div className={css.priceWrapper}>
            <p className={`${css.discountPrice} ${!discount ? css.hide : ''}`}>
                {discount_price ? priceFormatter(discount_price, true) : null}
            </p>
            <p className={`${css.price}  ${discount ? css.lineThrough : ''}`}>
                {priceFormatter(price, true)}
            </p>
        </div>
    );
};

export default ProductPrice;