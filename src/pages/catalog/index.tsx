import React from 'react';
import css from './index.module.css'
import {useTranslations} from 'next-intl';
import Head from "next/head";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import CatalogList from "@/components/pages/catalog/catalog-list/catalog-list";
import {GetStaticProps} from "next";

interface props {

}

const Index = (props: props) => {
    const t = useTranslations()
    return (
        <>
            <Head>
                <title>
                    {t('header.catalog')}
                </title>
            </Head>
            <section className={css.catalog}>
                <div className={'container'}>
                    <Breadcrumbs items={[
                        {
                            path: '/',
                            label: t('header.home')
                        },
                        {
                            path: '/catalog',
                            label: t('header.catalog')
                        }
                    ]}/>
                    <h1 className={css.title}>
                        {t('header.catalog')} {t('products.plural').toLowerCase()}
                    </h1>
                    <CatalogList/>
                </div>
            </section>
        </>
    );
};

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({locale}) => {


    return {
        props: {
            messages: require(`@/../messages/${locale}.json`)
        },
    };
};
export default Index;