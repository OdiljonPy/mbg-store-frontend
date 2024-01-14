import React from 'react';
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import {useTranslation} from "next-i18next";
import CatalogList from "@/pages/catalog/catalog-list/catalog-list";
import css from './index.module.css'
import Breadcrumbs from "@/shared/breadcrumbs/breadcrumbs";

interface props {

}

const Index = (props: props) => {
    const {t} = useTranslation()
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
            ...(await serverSideTranslations(locale ?? "uz", ["common"])),
        },
    };
};
export default Index;