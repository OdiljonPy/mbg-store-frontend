import React from 'react';
import css from './product-list.module.css'
import Product from "@/shared/product/product";
import {product, productWithoutDiscount} from "@/constants/product/product";

interface props {

}

const ProductList = (props: props) => {
    return (
        <>
            <div className={css.list}>
                <Product product={product}/>
                <Product product={productWithoutDiscount}/>
                <Product product={product}/>
                <Product product={productWithoutDiscount}/>
                <Product product={product}/>
                <Product product={productWithoutDiscount}/>
                <Product product={product}/>
                <Product product={productWithoutDiscount}/>
                <Product product={product}/>
                <Product product={productWithoutDiscount}/>
                <Product product={product}/>
                <Product product={productWithoutDiscount}/>
            </div>

        </>
    );
};

export default ProductList;