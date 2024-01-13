import React from 'react';
import css from './wrapper.module.css'
import Breadcrumbs from "@/shared/breadcrumbs/breadcrumbs";
import {useTranslation} from "next-i18next";
import {useSearchParams} from "next/navigation";
import Product from "@/shared/product/product";
import {product, productWithoutDiscount} from "@/constants/product";
import ProductList from "@/pages/products/components/product-list/product-list";

interface props {

}

const Wrapper = (props: props) => {
    const {t} = useTranslation()
    const searchParams = useSearchParams()
    const search: string | null = searchParams.get('search')
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
                        label: t('categories.all')
                    }
                ]}/>
                <h2 className={css.title}>
                    {t('products.title')}: {search}
                </h2>
                <p className={css.text}>
                    {t('search.found', {products: "1256", categories: "4"})}
                </p>
                <ProductList/>
            </div>
        </section>
    );
};

export default Wrapper;