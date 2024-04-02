import React from 'react';
import css from './product-list.module.css'
import Product from "@/components/shared/product/product";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {ICommon, IProduct} from "@/data-types/products/products";
import Skeleton from "react-loading-skeleton";
import {IProductFilter} from "@/data-types/products/product-filter/product-filter";
import SkeletonWrapper from "@/components/pages/products/wrapper/skeleton-wrapper/skeleton-wrapper";


interface props {
    products:IProductFilter
    loading:boolean
}

const ProductList = ({products,loading}: props) => {
    const searchParams = useSearchParams()
    const isOpened: string | null = searchParams.get('filters')
    const {isReady} = useRouter()
    // console.log(products,"product")

    if (!isReady) return
    return (
        <>
            <div className={`${css.list} ${isOpened ? css.short: ''}`}>

                {
                    loading ? <SkeletonWrapper/> :
                    products?.content?.map((product)=>{
                        return (
                            <Product product={product} isNotSwiper key={product.id} />
                        )
                    })
                }

                {!products.content?.length && <div className={css.no_data}>No Data</div>}
            </div>
        </>
    );
};

export default ProductList;