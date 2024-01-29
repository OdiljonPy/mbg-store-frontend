import React from 'react';
import {GetServerSideProps, GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Wrapper from "@/components/pages/products/wrapper/wrapper";
import {useTranslation} from "next-i18next";

interface props {

}

export const getStaticProps: GetStaticProps<Props> = async ({locale}) => {


    return {
        props: {
            ...(await serverSideTranslations(locale ?? "uz", ["common"])),
        },
    };
};


const Index = (props: props) => {
    const {t} = useTranslation()
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