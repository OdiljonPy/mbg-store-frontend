import React, {useEffect, useState} from 'react';
import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from 'next-intl';
import Similar from "@/components/pages/product/wrapper/components/similar/similar";
import Info from "@/components/pages/product/wrapper/components/info/info";
import Comparison from "@/components/pages/product/wrapper/components/info/comparison/comparison";
import Feedbacks from "@/components/pages/product/wrapper/components/feedbacks/feedbacks";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchProductSingle} from "@/slices/product/productSingleSlices";
import {GetServerSideProps} from "next";
import {IProductInner} from "@/data-types/products/product-inner";

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
                        label: info?.name
                    }
                ]}/>
                {
                    info && <Info info={info} loading={loading}/>
                }

                <Comparison comparison={info.comparison_products} loading={loading}/>
                <Similar similar={info.related_products} loading={loading} />
                <Feedbacks/>
            </div>
        </section>
    );
};

export default Wrapper;

