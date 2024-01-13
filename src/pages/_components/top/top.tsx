import React from 'react';
import css from "@/pages/_components/sales/sales.module.css";
import HeadingLine from "@/shared/heading-line/heading-line";
import Product from "@/shared/product/product";
import {product, productWithoutDiscount} from "@/constants/product";

interface props {

}

const Top = (props: props) => {
    return (
        <section className={css.sales}>
            <div className={'container'}>
                <HeadingLine heading={{
                    title: 'products.near',
                    count: 978
                }}/>
                <div className={css.wrapper}>
                    <Product product={product}/>
                    <Product product={productWithoutDiscount}/>
                    <Product product={product}/>
                    <Product product={productWithoutDiscount}/>
                </div>
            </div>
        </section>
    );
};

export default Top;