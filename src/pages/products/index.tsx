import React from 'react';
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Wrapper from "@/pages/products/components/wrapper/wrapper";

interface props {

}

const Index = (props: props) => {
    return (
        <>
            <Head>
                <title>Результат поиска</title>
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