import React from 'react';
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Wrapper from "@/components/pages/product/wrapper/wrapper";

interface props {

}

const Id = (props: props) => {

    return (
        <>
            <Head>
                <title>
                    Кукуруза Bonduelle Classique сладкая
                </title>
            </Head>
            <Wrapper/>
        </>
    );
};

export default Id;

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({locale}) => {


    return {
        props: {
            ...(await serverSideTranslations(locale ?? "uz", ["common"])),
        },
    };
};

export async function getStaticPaths() {
    const paths = [{
        params: {id: '1'}
    }]
    return {paths, fallback: true}
}