import React from 'react';
import {GetStaticProps} from "next";
import Head from "next/head";
import {useTranslations} from 'next-intl';
import Wrapper from "@/components/pages/stores/wrapper/wrapper";

interface props {

}

const Index = (props: props) => {
    const t = useTranslations()
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
            messages: require(`@/../messages/${locale}.json`)
        },
    };
};
export default Index;