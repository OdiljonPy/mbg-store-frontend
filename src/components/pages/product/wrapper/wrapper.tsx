import React, {useEffect, useState} from 'react';
import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from 'next-intl';
import Similar from "@/components/pages/product/wrapper/components/similar/similar";
import Info from "@/components/pages/product/wrapper/components/info/info";
import Comparison from "@/components/pages/product/wrapper/components/info/comparison/comparison";
import Feedbacks from "@/components/pages/product/wrapper/components/feedbacks/feedbacks";
import {useRouter} from "next/router";
import {IProduct, IProductSingle} from "@/data-types/products/products";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchProductSingle} from "@/slices/product/productSingleSlices";

interface props {

}

const Wrapper = (props: props) => {
    const t = useTranslations()
    const router = useRouter()

    const {info,loading} = useSelector((state:RootState) => state.product_single)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchProductSingle(router.query.id))
    }, [router.query.id]);
    console.log(info,"info")
    return (
        <section className={css.wrapper}>
            <div className={'container'}>
                <Breadcrumbs items={[
                    {
                        path: '/',
                        label: t('header.home')
                    },
                    {
                        path: '/products?sort=popular',
                        label: t('products.title')
                    },
                    {
                        path: '/products/:id',
                        label: info?.result?.name
                    }
                ]}/>
                {
                    info && <Info info={info} loading={loading}/>
                }

                <Comparison/>
                <Similar/>
                <Feedbacks/>
            </div>
        </section>
    );
};

export default Wrapper;