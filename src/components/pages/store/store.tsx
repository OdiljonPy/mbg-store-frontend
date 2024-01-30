import React from 'react';
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from "next-intl";
import Header from "@/components/pages/products/wrapper/header/header";
import css from "@/components/pages/products/wrapper/wrapper.module.css";
import Filters from "@/components/pages/products/filters/filters";
import ProductList from "@/components/pages/products/product-list/product-list";

interface props {

}

const Store = (props: props) => {
    const t = useTranslations()
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
                <Header/>
                <div className={`${css.wrapper}`}>
                    <Filters/>
                    <ProductList/>
                </div>
            </div>
        </section>
    );
};

export default Store;