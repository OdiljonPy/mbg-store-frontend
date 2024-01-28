import React from 'react';
import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslation} from "next-i18next";
import Similar from "@/components/pages/product/wrapper/components/similar/similar";
import Info from "@/components/pages/product/wrapper/components/info/info";
import Comparison from "@/components/pages/product/wrapper/components/info/comparison/comparison";
import Feedbacks from "@/components/pages/product/wrapper/components/feedbacks/feedbacks";

interface props {

}

const Wrapper = (props: props) => {
    const {t} = useTranslation()
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
                        label: t('Кукуруза Bonduelle Classique сладкая')
                    }
                ]}/>
                <Info/>
                <Comparison/>
                <Similar/>
                <Feedbacks/>
            </div>
        </section>
    );
};

export default Wrapper;