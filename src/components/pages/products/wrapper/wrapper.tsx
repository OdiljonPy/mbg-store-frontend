"use client";

import React, {useEffect, useRef} from 'react';
import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from 'next-intl';
import {useSearchParams} from "next/navigation";
import ProductList from "@/components/pages/products/product-list/product-list";
import Header from "@/components/pages/products/wrapper/header/header";
import Filters from "@/components/pages/products/filters/filters";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchProduct} from "@/slices/product/productSlices";
import {ICommon, IProducts} from "@/data-types/products/products";

interface props {

}

const Wrapper = (props: props) => {
    const t = useTranslations()
    const searchParams = useSearchParams()
    const category: string | null = searchParams.get('category')

    const productRef = useRef(false)
    const {entities, loading} =  useSelector((state:RootState) => state.product)
    const dispatch = useDispatch<AppDispatch>()

    // console.log(loading,"loading")

    useEffect(() => {
        // if(productRef.current === false){
            dispatch(fetchProduct())
        // }

        // return() =>{
        //     productRef.current = true
        // }
    }, [searchParams]);
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
                {
                    !loading ? <h1>...Loading</h1>: <div>{loading}</div>
                }
                <div className={`${css.wrapper}`}>
                    {/*{*/}
                    {/*    loading && entities.map((product:ICommon)=>{*/}
                    {/*        product.result.content.map((item:IProducts) =>{*/}
                    {/*            console.log(item)*/}
                    {/*        })*/}
                    {/*    })*/}
                    {/*}*/}
                    <Filters/>
                    <ProductList products={entities}/>
                </div>
            </div>
        </section>
    );
};

export default Wrapper;