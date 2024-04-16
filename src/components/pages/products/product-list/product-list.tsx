import React from 'react';
import css from './product-list.module.css'
import Product from "@/components/shared/product/product";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {IProductFilter} from "@/data-types/products/product-filter/product-filter";
import SkeletonWrapper from "@/components/pages/products/wrapper/skeleton-wrapper/skeleton-wrapper";
import Button from "@/components/shared/button";
import {useTranslations} from "next-intl";
import Pagination from "@/components/shared/pagination/pagination";


interface props {
    products:IProductFilter
    loading:boolean
    setPagePagination:(page:number)=>void
}

const ProductList = ({products,loading,setPagePagination}: props) => {
    const {totalElements,totalPages,number} = products
    const searchParams = useSearchParams()
    const isOpened: string | null = searchParams.get('filters')
    const {isReady} = useRouter()


    if (!isReady) return
    return (
        <>
            {
                products.content?.length ?
                    <div>
                        <div className={`${css.list} ${isOpened ? css.short: ''}`}>
                            {
                                loading ? <SkeletonWrapper/> :
                                    products?.content?.map((product)=>{
                                        return (
                                            <Product product={product} isNotSwiper key={product.id} />
                                        )
                                    })
                            }
                        </div>
                        <div className={css.pagination}>
                            <Pagination content offset={number} page={totalPages} total={totalElements} setOffset={(page)=>setPagePagination(page)}/>
                        </div>
                    </div>
                    : <div className={css.no_data}>No Data</div>
            }
        </>
    );
};

export default ProductList;