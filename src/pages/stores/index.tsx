import React from 'react';
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import {useTranslation} from "next-i18next";
import css from './index.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import Wrapper from "@/components/pages/stores/wrapper/wrapper";

interface props {

}

const Index = (props: props) => {
    const {t} = useTranslation()
    return (
        <>
            <Head>
                <title>
                    {t('header.stores')}
                </title>
            </Head>
            <Wrapper/>

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