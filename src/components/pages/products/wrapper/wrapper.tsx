"use client";

import React, {useEffect, useState} from 'react';
import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from 'next-intl';
import {useSearchParams} from "next/navigation";
import ProductList from "@/components/pages/products/product-list/product-list";
import Header from "@/components/pages/products/wrapper/header/header";
import Filters from "@/components/pages/products/filters/filters";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import { filterProduct} from "@/slices/product/productSlices";
import {useRouter} from "next/router";
import {fetchCategory} from "@/slices/category/categorySlices";
import Pagination from "@/components/shared/pagination/pagination";



interface props {

}

const Wrapper = (props: props) => {
    const t = useTranslations()
    const searchParams = useSearchParams()
    const { query} = useRouter()
    const category: string | null = searchParams.get('category')

    const [page,setPage] = useState(1)

    const dispatch = useDispatch<AppDispatch>()
    const {entities, loading} =  useSelector((state:RootState) => state.product)

    const diffFilters: string[] = ['filters', 'search', 'sort','category']
    const activeFilters = Object.keys(query).filter((item) => !diffFilters.includes(item))



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
            sort:searchParams.get('sort') ? searchParams.get('sort') : 'popular',
            page:page
        }
        if(searchParams.get('onSales') === 'true'){
            filterParams.discount = 1
        }
        else filterParams.discount = Number(searchParams.get('sale'))


        if(activeFilters.length){
            dispatch(filterProduct(filterParams))
        }

        if(!activeFilters.length && (page || searchParams.get('sort') || searchParams.get('category') || searchParams.get('search') )){
            dispatch(filterProduct(filterParams))
        }

    }



    useEffect(() => {
        fetchProductFilter()
        console.log(page,"pagination page")
    }, [page,searchParams.get('changeFilter'),searchParams.get('sort'),searchParams.get('category'),searchParams.get('search')]);

    // fetch category
    useEffect(() => {
        dispatch(fetchCategory({q:'',size:'40'}))
        setPage(entities.number)
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
                    <ProductList products={entities} loading={loading} setPagePagination={(page)=> setPage(page)}/>
                </div>
            </div>
        </section>
    );
};

export default Wrapper;