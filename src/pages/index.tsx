import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";
import Head from "next/head";
import Hero from "@/pages/_components/hero/hero";
import Sales from "@/pages/_components/sales/sales";
import Near from "@/pages/_components/near/near";
import Top from "@/pages/_components/top/top";
import Popular from "@/pages/_components/popular/popular";

export default function Home() {
    return (
        <>
            <Head>
                <title>MGB store</title>
            </Head>
            <Hero/>
            <Sales/>
            <Popular/>
            <Near/>
            <Top/>
        </>
    )
}


type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({locale}) => {


    return {
        props: {
            ...(await serverSideTranslations(locale ?? "uz", ["common"])),
        },
    };
};