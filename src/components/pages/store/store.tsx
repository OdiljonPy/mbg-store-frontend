import React, {useEffect} from 'react';
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from "next-intl";
import Header from "@/components/pages/products/wrapper/header/header";
import css from "@/components/pages/products/wrapper/wrapper.module.css";
import Filters from "@/components/pages/products/filters/filters";
import ProductList from "@/components/pages/products/product-list/product-list";
import Intro from "@/components/pages/store/intro/intro";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchProduct} from "@/slices/product/productSlices";

interface props {

}

const Store = (props: props) => {
    const t = useTranslations()

    const {entities, loading} =  useSelector((state:RootState) => state.product)

    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchProduct(''))
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
                        path: '/stores',
                        label: t('header.stores')
                    },
                    {
                        path: '',
                        label: 'Деревенская лавка'
                    }
                ]}/>
                <Intro/>
                <Header data={entities}/>
                <div className={`${css.wrapper}`}>
                    <Filters/>
                    <ProductList products={entities} loading={loading}/>
                </div>
            </div>
        </section>
    );
};

export default Store;