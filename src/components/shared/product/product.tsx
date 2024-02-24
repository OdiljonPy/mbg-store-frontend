import React from 'react';
import css from './product.module.css'
import {IProduct, IProducts} from "@/data-types/products/products";
import ProductInfo from "@/components/shared/product/components/product-info/product-info";
import ProductTop from "@/components/shared/product/components/product-top/product-top";
import {useSearchParams} from "next/navigation";

interface props {
    product: IProducts
    isNotSwiper?: boolean
}

const Product = ({product, isNotSwiper}: props) => {
    const searchParams = useSearchParams()
    const isOpened: string | null = searchParams.get('filters')



    return (
        <div className={`${css.product} ${isOpened ? css.short : ''} ${isNotSwiper ? css.notSwiper : ''}`}>
            <ProductTop product={product}/>
            <ProductInfo product={product}/>
        </div>
    );
};

export default Product;