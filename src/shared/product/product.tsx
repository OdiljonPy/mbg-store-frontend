import React from 'react';
import css from './product.module.css'
import {IProduct} from "@/data-types/products/products";
import ProductInfo from "@/shared/product/components/product-info/product-info";
import ProductActions from "@/shared/product/components/product-actions/product-actions";

interface props {
    product: IProduct
}

const Product = ({product}: props) => {

    return (
        <div className={css.product}>
            <ProductActions product={product}/>
            <ProductInfo product={product}/>
        </div>
    );
};

export default Product;