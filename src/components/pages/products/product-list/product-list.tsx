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
    setPagePagination?:(page:number)=>void
}

const ProductList = ({products,loading,setPagePagination}: props) => {
    const {totalElements,totalPages,number} = products
    const searchParams = useSearchParams()
    const isOpened: string | null = searchParams.get('filters')
    const {isReady} = useRouter()


    if (!isReady) return
    return (
        <>
           <div className={`${css.product_list} ${isOpened ? css.short: ''}`}>
               <div className={`${css.list} ${isOpened ? css.short: ''}`}>
                   {
                       loading ? <SkeletonWrapper/> :
                           products?.content?.map((product)=>{
                               return (
                                   <Product product={product} isNotSwiper key={product.id} />
                               )
                           })
                   }
                   {
                       !products.content?.length ? <div className={css.no_data}>No Data</div>:''
                   }
               </div>
               <div className={css.pagination}>
                   <Pagination content offset={1} page={23} total={12} setOffset={(page)=> setPagePagination ? setPagePagination(page) :''}/>
               </div>
           </div>
        </>
    );
};

export default ProductList;

