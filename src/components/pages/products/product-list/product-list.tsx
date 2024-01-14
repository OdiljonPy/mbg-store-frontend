import React from 'react';
import css from './product-list.module.css'
import Product from "@/components/shared/product/product";
import {product, productWithoutDiscount} from "@/constants/product/product";

interface props {

}

const ProductList = (props: props) => {
    return (
        <>
            <div className={css.list}>
                <Product product={product} isNotSwiper/>
                <Product product={productWithoutDiscount} isNotSwiper/>
                <Product product={product} isNotSwiper/>
                <Product product={productWithoutDiscount} isNotSwiper/>
                <Product product={product} isNotSwiper/>
                <Product product={productWithoutDiscount} isNotSwiper/>
                <Product product={product} isNotSwiper/>
                <Product product={productWithoutDiscount} isNotSwiper/>
                <Product product={product} isNotSwiper/>
                <Product product={productWithoutDiscount} isNotSwiper/>
                <Product product={product} isNotSwiper/>
                <Product product={productWithoutDiscount} isNotSwiper/>
            </div>

        </>
    );
};

export default ProductList;