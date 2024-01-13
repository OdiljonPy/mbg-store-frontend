import React from 'react';
import css from './wrapper.module.css'
import Breadcrumbs from "@/shared/breadcrumbs/breadcrumbs";
import {useTranslation} from "next-i18next";
import {useSearchParams} from "next/navigation";
import ProductList from "@/pages/products/components/product-list/product-list";
import Title from "@/pages/products/components/wrapper/title/title";
import ProductsCount from "@/pages/products/components/wrapper/products-count/products-count";

interface props {

}

const Wrapper = (props: props) => {
    const {t} = useTranslation()
    const searchParams = useSearchParams()
    const category: string | null = searchParams.get('category')
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
                <Title/>
                <ProductsCount/>
                <ProductList/>
            </div>
        </section>
    );
};

export default Wrapper;