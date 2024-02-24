"use client";

import React, {useCallback, useEffect, useRef} from 'react';
import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from 'next-intl';
import {useSearchParams} from "next/navigation";
import ProductList from "@/components/pages/products/product-list/product-list";
import Header from "@/components/pages/products/wrapper/header/header";
import Filters from "@/components/pages/products/filters/filters";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchProduct, filterProduct} from "@/slices/product/productSlices";
import Skeleton from 'react-loading-skeleton'



interface props {

}

const Wrapper = (props: props) => {
    const t = useTranslations()
    const searchParams = useSearchParams()
    const category: string | null = searchParams.get('category')

    const productRef = useRef(false)
    const {entities, loading} =  useSelector((state:RootState) => state.product)
    const dispatch = useDispatch<AppDispatch>()


    const fetchProductList = useCallback(() =>{
        dispatch(fetchProduct(searchParams.get('search')))
        const filterParams = {
            q:searchParams.get('search'),
            category:Number(searchParams.get('category')),
            min_price:Number(searchParams.get('prices')?.split(',')[0]),
            max_price:Number(searchParams.get('prices')?.split(',')[1]),
            rating:Number(searchParams.get('rating')),
            discount:Number(searchParams.get('sales')),
            pickup:searchParams.get('hasDelivery'),
            store: searchParams.get('stores')
            // around_the_clock:any,
            // free_shipping:boolean,
        }
        dispatch(filterProduct(filterParams))
        console.log(filterParams,"parasm")
    },[searchParams])

    useEffect(() => {
        fetchProductList()
    }, [fetchProductList]);


    return (
        <section className={css.results}>
            <div className={'container'}>
                <Breadcrumbs items={[
                    {
                        path: '/',
                        label: t('header.home')
                    },
                    {
                        path: '/products',
                        label: category ?? t('categories.all')
                    }
                ]}/>
                {
                    searchParams.get('search')
                }
                <Header/>

                <div className={`${css.wrapper}`}>
                    <Filters/>
                    <ProductList products={entities} loading={loading}/>
                </div>
            </div>
        </section>
    );
};

export default Wrapper;