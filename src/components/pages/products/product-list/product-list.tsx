import React from 'react';
import css from './product-list.module.css'
import Product from "@/components/shared/product/product";
import {product, productClose, productSales, productTop, productWithoutDiscount} from "@/constants/product/product";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/router";

interface props {

}

const ProductList = (props: props) => {
    const searchParams = useSearchParams()
    const isOpened: string | null = searchParams.get('filters')
    const {isReady} = useRouter()

    if (!isReady) return
    return (
        <>
            <div className={`${css.list} ${isOpened ? css.short: ''}`}>
                {
                    productSales.map((product)=>{
                        return(
                            <Product product={product} isNotSwiper key={product.id}/>
                        )
                    })
                }
                {
                    productClose.map((product)=>{
                        return(
                            <Product product={product} isNotSwiper key={product.id} />
                        )
                    })
                }
                {
                    productTop.map((product) =>{
                        return(
                            <Product product={product} isNotSwiper key={product.id}/>
                        )
                    })
                }
                {/*<Product product={product} isNotSwiper/>*/}
                {/*<Product product={productWithoutDiscount} isNotSwiper/>*/}
                {/*<Product product={product} isNotSwiper/>*/}
                {/*<Product product={productWithoutDiscount} isNotSwiper/>*/}
                {/*<Product product={product} isNotSwiper/>*/}
                {/*<Product product={productWithoutDiscount} isNotSwiper/>*/}
                {/*<Product product={product} isNotSwiper/>*/}
                {/*<Product product={productWithoutDiscount} isNotSwiper/>*/}
                {/*<Product product={product} isNotSwiper/>*/}
                {/*<Product product={productWithoutDiscount} isNotSwiper/>*/}
                {/*<Product product={product} isNotSwiper/>*/}
                {/*<Product product={productWithoutDiscount} isNotSwiper/>*/}
            </div>

        </>
    );
};

export default ProductList;