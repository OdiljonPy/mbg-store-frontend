import React from 'react';
import {GetStaticProps} from "next";
import Head from "next/head";
import Wrapper from "@/components/pages/products/wrapper/wrapper";
import {useTranslations} from 'next-intl';

interface props {

}

export const getStaticProps: GetStaticProps<Props> = async ({locale}) => {

    return {
        props: {
            messages: require(`@/../messages/${locale}.json`)
        },
    };
};


const Index = (props: props) => {
    const t = useTranslations()
    return (
        <>
            <Head>
                <title>{t('products.title')}</title>
            </Head>
            <Wrapper/>
        </>
    );
};

type Props = {};


export default Index;