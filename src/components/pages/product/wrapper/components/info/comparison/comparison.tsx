import React from 'react';
import css from './comparison.module.css'
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Labels from "@/components/pages/product/wrapper/components/info/comparison/labels/labels";
import Product from "@/components/pages/product/wrapper/components/info/comparison/product/product";
import {product, productWithoutDiscount} from "@/constants/product/product";

interface props {

}

const Comparison = (props: props) => {

    return (
        <section className={css.comparison}>
                <HeadingLine small heading={{
                    title: 'product.comparison'
                }}/>
                <div className={css.wrapper}>
                    <Labels/>
                    <Product product={product}/>
                    <Product product={productWithoutDiscount}/>
                    <Product product={product}/>
                    <Product product={productWithoutDiscount}/>
                    <Product product={product}/>
                    <Product product={productWithoutDiscount}/>
                </div>
        </section>
    );
};

export default Comparison;