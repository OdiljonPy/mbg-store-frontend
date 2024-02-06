import {GetStaticProps} from "next";
import Head from "next/head";
import {useTranslations} from "next-intl";
import Wrapper from "@/components/pages/cart/wrapper";

interface props {

}

const Index = (props: props) => {
    const t = useTranslations()
    return (
        <>
            <Head>
                <title>
                    {t('header.basket')}
                </title>
            </Head>
            <Wrapper/>
        </>
    );
};

export default Index;

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({locale}) => {


    return {
        props: {
            messages: require(`@/../messages/${locale}.json`)
        },
    };
};