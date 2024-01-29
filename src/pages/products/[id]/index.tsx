import React from 'react';
import {GetServerSideProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Wrapper from "@/components/pages/product/wrapper/wrapper";

interface props {

}

const Index = (props: props) => {

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

export default Index;

type Props = {};
export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {


    return {
        props: {
            ...(await serverSideTranslations(locale ?? "uz", ["common"])),
        },
    };
};

