import React from 'react';
import css from './product.module.css'
import {IProduct} from "@/data-types/products/products";
import ProductInfo from "@/components/shared/product/components/product-info/product-info";
import ProductTop from "@/components/shared/product/components/product-top/product-top";

interface props {
    product: IProduct
    isNotSwiper?: boolean
}

const Product = ({product, isNotSwiper}: props) => {

    return (
        <div className={`${css.product} ${isNotSwiper ? css.notSwiper : ''}`}>
            <ProductTop product={product}/>
            <ProductInfo product={product}/>
        </div>
    );
};

export default Product;