import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";
import Head from "next/head";
import {useTranslation} from "next-i18next";
import Hero from "@/pages/_components/hero/hero";

export default function Home() {
    const {t} = useTranslation()
    return (
        <>
            <Head>
                <title>MGB store</title>
            </Head>
            <Hero/>
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