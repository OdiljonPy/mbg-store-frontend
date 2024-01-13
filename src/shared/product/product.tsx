import React from 'react';
import css from './product.module.css'
import {IProduct} from "@/data-types/products/products";
import ProductInfo from "@/shared/product/components/product-info/product-info";
import ProductTop from "@/shared/product/components/product-top/product-top";

interface props {
    product: IProduct
}

const Product = ({product}: props) => {

    return (
        <div className={css.product}>
            <ProductTop product={product}/>
            <ProductInfo product={product}/>
        </div>
    );
};

export default Product;