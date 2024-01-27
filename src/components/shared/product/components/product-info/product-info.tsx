import React from 'react';
import css from './product-info.module.css'
import ProductRate from "@/components/shared/product/components/product-info/product-rate/product-rate";
import {IProduct} from "@/data-types/products/products";
import ProductPrice from "@/components/shared/product/components/product-info/product-price/product-price";
import Link from "next/link";

interface props {
    product: IProduct
}

const ProductInfo = ({product}: props) => {

    const {
        id,
        rating,
        total_rate_count,
        title,
        price,
        discount_price
    } = product
    return (
        <div className={css.info}>
            <ProductRate rating={rating} total_rate_count={total_rate_count}/>
            <Link href={`/products/${id}`} className={css.title}>
                {title}
            </Link>
            <ProductPrice price={price} discount_price={discount_price}/>
        </div>
    );
};

export default ProductInfo;