import React from 'react';
import {GetServerSideProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Wrapper from "@/components/pages/product/wrapper/wrapper";

interface props {

}

type Props = {};





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


// export const getStaticPaths: GetStaticPaths<Props> = async ({locales}) => {
//     const posts = [1, 2, 3, 4, 5, 6]
//
//     const paths = posts.map((item) => ({
//         params: {
//             id: item.toString()
//         }
//     }))
//
//     return {paths, fallback: false }
// }


export const getServerSideProps: GetServerSideProps<Props> = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "uz", ["common"])),
        },
    };
};
