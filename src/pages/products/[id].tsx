import React from 'react';
import {GetServerSideProps} from "next";
import Head from "next/head";
import Wrapper from "@/components/pages/product/wrapper/wrapper";

interface props {

}

type Props = {};





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





export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {
    return {
        props: {
            messages: require(`@/../messages/${locale}.json`)
        },
    };
};
