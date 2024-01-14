import React from 'react';
import css from './product-info.module.css'
import ProductRate from "@/components/shared/product/components/product-info/product-rate/product-rate";
import {IProduct} from "@/data-types/products/products";
import ProductPrice from "@/components/shared/product/components/product-info/product-price/product-price";

interface props {
    product: IProduct
}

const ProductInfo = ({product}: props) => {

    const {
        rating,
        total_rate_count,
        title,
        price,
        discount_price
    } = product
    return (
        <div className={css.info}>
            <ProductRate rating={rating} total_rate_count={total_rate_count}/>
            <h4 className={css.title}>
                {title}
            </h4>
            <ProductPrice price={price} discount_price={discount_price}/>
        </div>
    );
};

export default ProductInfo;