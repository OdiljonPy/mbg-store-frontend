import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";
import Head from "next/head";
import Hero from "@/components/pages/home/hero/hero";
import Sales from "@/components/pages/home/sales/sales";
import Near from "@/components/pages/home/near/near";
import Top from "@/components/pages/home/top/top";
import Popular from "@/components/pages/home/popular/popular";

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