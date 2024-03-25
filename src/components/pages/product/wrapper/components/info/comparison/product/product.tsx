import React from 'react';
import css from './product.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import mikado from '@/../public/images/products/mikado.png'
import {IProduct} from "@/data-types/products/products";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";
import Rate from "../rate/rate";
import {IProduct as IProduct2} from "@/data-types/products/common";

interface props {
    product:  IProduct2
}

const Product = ({product}: props) => {
    const {name, price, discount_price, rating, rating_count, store} = product
    return (
        <div className={css.product}>
            <div className={css.img}>
                <ResponsiveImage src={mikado} alt={'Mikado'}/>
            </div>
            <div className={css.wrapper}>
                <p className={css.title}>
                    {name}
                </p>
            </div>
            <div className={css.wrapper}>
                <p className={css.price}>
                <span
                    className={discount_price ? css.actualPrice : ''}> {priceFormatter(discount_price || price, true)}</span>
                    <span
                        className={`${css.oldPrice} ${discount_price ? css.show : ''}`}>{priceFormatter(price, true)}</span>
                </p>
            </div>
            <div className={css.wrapper}>
                <Rate count={rating_count} rate={rating}/>
            </div>
            <p className={css.seller}>
                {store?.brand_name}
            </p>
        </div>
    );
};

export default Product;