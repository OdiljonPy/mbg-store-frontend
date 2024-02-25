import React from 'react';
import css from './product-list.module.css'
import Product from "@/components/shared/product/product";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {ICommon, IProduct} from "@/data-types/products/products";
import Skeleton from "react-loading-skeleton";


interface props {
    products:any
    loading:boolean
}

const ProductList = ({products,loading}: props) => {
    const searchParams = useSearchParams()
    const isOpened: string | null = searchParams.get('filters')
    const {isReady} = useRouter()

    if (!isReady) return
    return (
        <>
            <div className={`${css.list} ${isOpened ? css.short: ''}`}>

                {
                    !loading ? <Skeleton  containerClassName={`${css.list} ${isOpened ? css.short: ''}`}  className={`${css.skeleton} ${isOpened ? css.skeleton_short :''}`} count={isOpened ? 6 : 8} /> :
                    products.map((product:ICommon)=>{
                       return product.result.content.map((item:IProduct) =>{
                            return (
                                <Product product={item} isNotSwiper key={item.id} />
                            )
                        })
                    })
                }
            </div>
        </>
    );
};

export default ProductList;