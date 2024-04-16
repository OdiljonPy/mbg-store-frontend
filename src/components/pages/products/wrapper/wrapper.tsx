"use client";

import React, { useEffect} from 'react';
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
import {useRouter} from "next/router";
import {fetchCategory} from "@/slices/category/categorySlices";



interface props {

}

const Wrapper = (props: props) => {
    const t = useTranslations()
    const searchParams = useSearchParams()
    const {push, query} = useRouter()
    const category: string | null = searchParams.get('category')

    const dispatch = useDispatch<AppDispatch>()
    const {entities, loading} =  useSelector((state:RootState) => state.product)

    const diffFilters: string[] = ['filters', 'search', 'sort','category']
    const activeFilters = Object.keys(query).filter((item) => !diffFilters.includes(item))



    // search product
    useEffect(() => {
        if(searchParams.get('search') || searchParams.get('search') === ''){
            dispatch(fetchProduct(searchParams.get('search')))
        }
    }, [searchParams.get('search')]);


    // filter product
    const fetchProductFilter = () =>{
        const filterParams = {
            q:searchParams.get('search'),
            category:Number(searchParams.get('category_id')),
            min_price:Number(searchParams.get('prices')?.split(',')[0]),
            max_price:Number(searchParams.get('prices')?.split(',')[1]),
            rating:Number(searchParams.get('rating')),
            discount:0,
            store: searchParams.get('stores')?.split(',').map((el) => Number(el)),
            free_shipping:searchParams.get('delivery')?.split(',').includes('1'),
            pickup:searchParams.get('delivery')?.split(',').includes('2'),
            comments:searchParams.get('withFeedback'),
            available:searchParams.get('accessibility')?.split(',').includes('1'),
            around_the_clock:searchParams.get('accessibility')?.split(',').includes('2'),
            sort:searchParams.get('sort') ? searchParams.get('sort') : 'popular'
        }
        if(searchParams.get('onSales') === 'true'){
            filterParams.discount = 1
        }
        else filterParams.discount = Number(searchParams.get('sale'))


        if(activeFilters.length){
            dispatch(filterProduct(filterParams))
        }

        if(!activeFilters.length && (searchParams.get('sort') || searchParams.get('category') || searchParams.get('search') )){
            dispatch(filterProduct(filterParams))
        }

    }



    useEffect(() => {
        fetchProductFilter()
    }, [searchParams.get('changeFilter'),searchParams.get('sort'),searchParams.get('category'),searchParams.get('search')]);

    // fetch category
    useEffect(() => {
        dispatch(fetchCategory({q:'',size:'40'}))
    }, []);

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

                <Header data={entities} />

                <div className={`${css.wrapper}`}>
                    <Filters />
                    <ProductList products={entities} loading={loading}/>
                </div>
            </div>
        </section>
    );
};

export default Wrapper;