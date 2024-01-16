import React from 'react';
import css from './product-list.module.css'
import Product from "@/components/shared/product/product";
import {product, productWithoutDiscount} from "@/constants/product/product";
import {useSearchParams} from "next/navigation";

interface props {

}

const ProductList = (props: props) => {
    const searchParams = useSearchParams()
    const isOpened: string | null = searchParams.get('filters')
    return (
        <>
            <div className={`${css.list} ${isOpened ? css.short: ''}`}>
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